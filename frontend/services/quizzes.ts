import { fetchApi, validate } from '@/services/api';
import { createQuizSchema, quizSchema, quizSummaryListSchema } from '@/schemas/quiz';
import type { CreateQuizPayload, Quiz, QuizSummary } from '@/types';

export function getQuizzes(): Promise<QuizSummary[]> {
  return fetchApi('/quizzes', { schema: quizSummaryListSchema });
}

export function getQuiz(id: string): Promise<Quiz> {
  return fetchApi(`/quizzes/${id}`, { schema: quizSchema });
}

export function createQuiz(payload: CreateQuizPayload): Promise<Quiz> {
  const quiz = validate(createQuizSchema, payload, 'The quiz is invalid');

  return fetchApi('/quizzes', {
    method: 'POST',
    body: JSON.stringify(quiz),
    schema: quizSchema,
  });
}

export async function deleteQuiz(id: string): Promise<void> {
  await fetchApi<void>(`/quizzes/${id}`, { method: 'DELETE' });
}
