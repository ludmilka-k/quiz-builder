'use client';

import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { getQuiz } from '@/services/quizzes';
import { QuestionView } from '@/components/QuestionView';
import type { Quiz } from '@/types';

export default function QuizDetailPage() {
  const params = useParams<{ id: string }>();
  const [quiz, setQuiz] = useState<Quiz | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!params.id) return;

    getQuiz(params.id)
      .then(setQuiz)
      .catch((err) => setError(err instanceof Error ? err.message : 'Failed to load quiz'))
      .finally(() => setLoading(false));
  }, [params.id]);

  if (loading) {
    return <p className="text-center text-gray-500 mt-8">Loading quiz…</p>;
  }

  if (error) {
    return (
      <div className="text-center mt-8">
        <p className="text-red-500 mb-4">{error}</p>
        <Link href="/quizzes" className="text-indigo-600 hover:underline font-medium">
          Back to quizzes
        </Link>
      </div>
    );
  }

  if (!quiz) {
    return (
      <div className="text-center mt-8">
        <p className="text-gray-500 mb-4">Quiz not found.</p>
        <Link href="/quizzes" className="text-indigo-600 hover:underline font-medium">
          Back to quizzes
        </Link>
      </div>
    );
  }

  return (
    <div>
      <Link href="/quizzes" className="text-indigo-600 hover:underline text-sm mb-4 inline-block">
        ← Back to quizzes
      </Link>
      <h1 className="text-2xl font-bold mb-2">{quiz.title}</h1>
      <p className="text-sm text-gray-500 mb-6">
        Created {new Date(quiz.createdAt).toLocaleDateString()} · {quiz.questions.length}{' '}
        {quiz.questions.length === 1 ? 'question' : 'questions'}
      </p>

      <div className="space-y-2">
        {quiz.questions.map((question, index) => (
          <QuestionView key={question.id} question={question} index={index} />
        ))}
      </div>
    </div>
  );
}
