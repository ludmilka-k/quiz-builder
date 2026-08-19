import type { ZodType } from 'zod';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4000';

export class ValidationError extends Error {
  readonly issues: string[];

  constructor(message: string, issues: string[]) {
    super(message);
    this.name = 'ValidationError';
    this.issues = issues;
  }
}

export function validate<T>(schema: ZodType<T>, data: unknown, message: string): T {
  const result = schema.safeParse(data);

  if (!result.success) {
    throw new ValidationError(
      message,
      result.error.issues.map((issue) =>
        issue.path.length ? `${issue.path.join('.')}: ${issue.message}` : issue.message,
      ),
    );
  }

  return result.data;
}

export async function fetchApi<T = unknown>(
  endpoint: string,
  options?: RequestInit & { schema?: ZodType<T> },
): Promise<T> {
  const { schema, ...requestInit } = options ?? {};

  const res = await fetch(`${API_URL}${endpoint}`, {
    ...requestInit,
    headers: {
      'Content-Type': 'application/json',
      ...(requestInit.headers || {}),
    },
  });

  if (!res.ok) {
    throw new Error(`API error: ${res.statusText}`);
  }

  if (res.status === 204) {
    return undefined as T;
  }

  const data: unknown = await res.json();

  if (!schema) {
    return data as T;
  }

  return validate(schema, data, `Unexpected response from ${endpoint}`);
}
