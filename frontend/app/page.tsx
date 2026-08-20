import {Metadata} from 'next';
import Link from "next/link";

export const metadata: Metadata = {
  title: 'Quizzes Builder',
};

export default function Home() {

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div className="bg-white p-6 rounded-lg shadow-md border">
        <h1 className="text-2xl font-bold mb-2 text-indigo-700">Welcome to Quiz Builder</h1>
        <p className="text-gray-600 mb-4">
          A modern full-stack application powered by NestJS, Next.js, PostgreSQL, and Prisma ORM.
        </p>
        <Link href="/quizzes" className="bg-green-500 text-white p-2 rounded mb-4 hover:text-indigo-600 font-medium">Go To Quizzes</Link>
      </div>
    </div>
  );
}
