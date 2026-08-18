import { PrismaClient, QuestionType } from '@prisma/client';

const prisma = new PrismaClient();

// Sample data matching backend/db/sample-data.sql
const sampleData = [
  {
    id: 'a1b2c3d4-e5f6-7890-abcd-ef1234567890',
    title: 'TypeScript Basics',
    description: 'Test your knowledge of TypeScript fundamentals',
    questions: [
      {
        id: 'q1000001-0000-0000-0000-000000000001',
        text: 'TypeScript is a statically typed superset of JavaScript.',
        type: QuestionType.BOOLEAN,
        options: [] as string[],
      },
      {
        id: 'q1000001-0000-0000-0000-000000000002',
        text: 'What keyword is used to declare a typed variable in TypeScript?',
        type: QuestionType.INPUT,
        options: [] as string[],
      },
      {
        id: 'q1000001-0000-0000-0000-000000000003',
        text: 'Which of the following are primitive types in TypeScript?',
        type: QuestionType.CHECKBOX,
        options: ['string', 'number', 'boolean', 'object', 'symbol'],
      },
    ],
  },
  {
    id: 'b2c3d4e5-f6a7-8901-bcde-fa2345678901',
    title: 'TypeScript Intermediate',
    description: 'Deepen your understanding of TypeScript interfaces, generics, and more',
    questions: [
      {
        id: 'q2000002-0000-0000-0000-000000000001',
        text: 'TypeScript interfaces can extend multiple other interfaces.',
        type: QuestionType.BOOLEAN,
        options: [] as string[],
      },
      {
        id: 'q2000002-0000-0000-0000-000000000002',
        text: 'What TypeScript feature allows you to write reusable components that work with any data type?',
        type: QuestionType.INPUT,
        options: [] as string[],
      },
      {
        id: 'q2000002-0000-0000-0000-000000000003',
        text: 'Which of the following utility types are built into TypeScript?',
        type: QuestionType.CHECKBOX,
        options: ['Partial', 'Required', 'Readonly', 'Mutable', 'Pick', 'Omit'],
      },
      {
        id: 'q2000002-0000-0000-0000-000000000004',
        text: 'TypeScript enums compile down to plain JavaScript objects.',
        type: QuestionType.BOOLEAN,
        options: [] as string[],
      },
      {
        id: 'q2000002-0000-0000-0000-000000000005',
        text: 'What symbol is used to mark a property as optional in a TypeScript interface?',
        type: QuestionType.INPUT,
        options: [] as string[],
      },
    ],
  },
  {
    id: 'c3d4e5f6-a7b8-9012-cdef-ab3456789012',
    title: 'TypeScript Advanced',
    description: 'Challenge yourself with advanced TypeScript concepts',
    questions: [
      {
        id: 'q3000003-0000-0000-0000-000000000001',
        text: 'TypeScript supports declaration merging for interfaces.',
        type: QuestionType.BOOLEAN,
        options: [] as string[],
      },
      {
        id: 'q3000003-0000-0000-0000-000000000002',
        text: 'What is the name of the TypeScript feature that extracts the type of a variable at compile time?',
        type: QuestionType.INPUT,
        options: [] as string[],
      },
      {
        id: 'q3000003-0000-0000-0000-000000000003',
        text: 'Which of the following are valid TypeScript mapped type modifiers?',
        type: QuestionType.CHECKBOX,
        options: ['+readonly', '-readonly', '+?', '-?', '!optional'],
      },
      {
        id: 'q3000003-0000-0000-0000-000000000004',
        text: 'The "never" type in TypeScript can be assigned to any other type.',
        type: QuestionType.BOOLEAN,
        options: [] as string[],
      },
      {
        id: 'q3000003-0000-0000-0000-000000000005',
        text: 'Which TypeScript keyword is used to narrow types within conditional branches?',
        type: QuestionType.INPUT,
        options: [] as string[],
      },
      {
        id: 'q3000003-0000-0000-0000-000000000006',
        text: 'Which of the following are examples of TypeScript conditional types?',
        type: QuestionType.CHECKBOX,
        options: ['T extends U ? X : Y', 'infer R', 'keyof T', 'NonNullable<T>', 'ReturnType<T>'],
      },
    ],
  },
];

async function main() {
  console.log('Seeding database with TypeScript quiz data...');

  // Clean existing data
  await prisma.question.deleteMany();
  await prisma.quiz.deleteMany();

  for (const quizData of sampleData) {
    const { questions, ...quizFields } = quizData;
    const quiz = await prisma.quiz.create({
      data: {
        ...quizFields,
        questions: {
          create: questions,
        },
      },
      include: { questions: true },
    });
    console.log(`Created quiz: "${quiz.title}" with ${quiz.questions.length} questions`);
  }

  console.log('Seeding complete!');
}

main()
  .catch((e) => {
    console.error('Seeding failed:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
