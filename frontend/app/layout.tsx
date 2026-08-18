import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Quiz Builder',
  description: 'Build and play quizzes with NestJS and Next.js',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-900 min-h-screen flex flex-col">
        <header className="bg-white shadow-sm border-b py-4 px-6 flex justify-between items-center">
          <h1 className="text-xl font-bold text-indigo-600">Quiz Builder</h1>
          <nav className="space-x-4">
            <a href="/" className="text-gray-600 hover:text-indigo-600 font-medium">Home</a>
          </nav>
        </header>
        <main className="flex-1 container mx-auto p-6">{children}</main>
        <footer className="bg-white border-t py-4 text-center text-sm text-gray-500">
          Quiz Builder Application &copy; 2026
        </footer>
      </body>
    </html>
  );
}
