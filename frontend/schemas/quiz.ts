import { z } from 'zod';

export const questionTypeSchema = z.enum(['BOOLEAN', 'INPUT', 'CHECKBOX']);

export const questionSchema = z.object({
  id: z.string(),
  text: z.string(),
  type: questionTypeSchema,
  options: z.array(z.string()),
  correctAnswer: z.number().int().nullable(),
});

export const quizSchema = z.object({
  id: z.string(),
  title: z.string(),
  createdAt: z.string(),
  questions: z.array(questionSchema),
});

export const quizSummarySchema = z.object({
  id: z.string(),
  title: z.string(),
  questionCount: z.number().int().nonnegative(),
  createdAt: z.string(),
});

export const quizSummaryListSchema = z.array(quizSummarySchema);

export const createQuestionSchema = z
  .object({
    text: z.string().trim().min(1, 'Question text is required'),
    type: questionTypeSchema,
    options: z.array(z.string().trim().min(1, 'Option cannot be empty')).optional(),
    correctAnswer: z.number().int().nonnegative().optional(),
  })
  .superRefine((question, ctx) => {
    if (question.type === 'CHECKBOX') {
      const options = question.options ?? [];

      if (options.length < 2) {
        ctx.addIssue({
          code: 'custom',
          path: ['options'],
          message: 'A checkbox question requires at least two options',
        });
      }

      if (question.correctAnswer !== undefined && question.correctAnswer >= options.length) {
        ctx.addIssue({
          code: 'custom',
          path: ['correctAnswer'],
          message: 'The correct answer must point to an existing option',
        });
      }
    }

    if (question.type === 'BOOLEAN' && question.correctAnswer !== undefined && question.correctAnswer > 1) {
      ctx.addIssue({
        code: 'custom',
        path: ['correctAnswer'],
        message: 'A boolean question accepts only 0 (true) or 1 (false)',
      });
    }
  });

export const createQuizSchema = z.object({
  title: z.string().trim().min(1, 'Title is required'),
  questions: z.array(createQuestionSchema).min(1, 'A quiz requires at least one question'),
});
