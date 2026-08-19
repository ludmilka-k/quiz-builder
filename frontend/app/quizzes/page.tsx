'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { getQuizzes, deleteQuiz } from '@/services/quizzes';
import type { QuizSummary } from '@/types';

export default function QuizzesPage() {
  const [quizzes, setQuizzes] = useState<QuizSummary[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    getQuizzes()
      .then(setQuizzes)
      .catch((err) => setError(err instanceof Error ? err.message : 'Failed to load quizzes'))
      .finally(() => setLoading(false));
  }, []);

  const handleDelete = async (id: string) => {
    try {
      await deleteQuiz(id);
      setQuizzes((prev) => prev.filter((q) => q.id !== id));
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to delete quiz');
    }
  };

  if (loading) {
    return <p className="text-center text-gray-500 mt-8">Loading quizzes…</p>;
  }

  if (error) {
    return <p className="text-center text-red-500 mt-8">{error}</p>;
  }

  if (quizzes.length === 0) {
    return (
      <div className="text-center mt-8">
        <p className="text-gray-500 mb-4">No quizzes yet.</p>
        <Link href="/create" className="text-indigo-600 hover:underline font-medium">
          Create your first quiz
        </Link>
      </div>
    );
  }

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">All Quizzes</h1>
      <ul className="space-y-3">
        {quizzes.map((quiz) => (
          <li
            key={quiz.id}
            className="flex items-center justify-between border rounded p-4 bg-white shadow-sm"
          >
            <Link href={`/quizzes/${quiz.id}`} className="flex-1 hover:text-indigo-600">
              <span className="font-medium">{quiz.title}</span>
              <span className="ml-2 text-sm text-gray-500">
                ({quiz.questionCount} {quiz.questionCount === 1 ? 'question' : 'questions'})
              </span>
            </Link>
            <button
              onClick={() => handleDelete(quiz.id)}
              className="ml-4 text-red-500 hover:text-red-700 font-medium text-sm"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
