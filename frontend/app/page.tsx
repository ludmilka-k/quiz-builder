'use client';

import { useEffect, useState } from 'react';
import { fetchApi } from '../services/api';

export default function Home() {
  const [health, setHealth] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchApi('/health')
      .then((data) => {
        setHealth(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div className="bg-white p-6 rounded-lg shadow-md border">
        <h2 className="text-2xl font-bold mb-2 text-indigo-700">Welcome to Quiz Builder</h2>
        <p className="text-gray-600 mb-4">
          A modern full-stack application powered by NestJS, Next.js, PostgreSQL, and Prisma ORM.
        </p>
      </div>
    </div>
  );
}
