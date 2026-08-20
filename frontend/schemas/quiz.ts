import { z } from 'zod';

export const questionTypeSchema = z.enum(['BOOLEAN', 'INPUT', 'CHECKBOX']);

export const questionSchema = z.object({
  id: z.string(),
  text: z.string(),
  type: questionTypeSchema,
  options: z.array(z.string()),
  correctAnswerBoolean: z.boolean().nullable(),
  correctAnswerInput: z.string().nullable(),
  correctAnswerCheckbox: z.array(z.number().int()).nullable(),
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
    correctAnswerBoolean: z.boolean().optional(),
    correctAnswerInput: z.string().trim().optional(),
    correctAnswerCheckbox: z.array(z.number().int()).optional(),
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

      if (question.correctAnswerCheckbox) {
        for (const index of question.correctAnswerCheckbox) {
          if (index < 0 || index >= options.length) {
            ctx.addIssue({
              code: 'custom',
              path: ['correctAnswerCheckbox'],
              message: 'The correct answer must point to an existing option',
            });
            break;
          }
        }
      }
    }
  });

export const createQuizSchema = z.object({
  title: z.string().trim().min(1, 'Title is required'),
  questions: z.array(createQuestionSchema).min(1, 'A quiz requires at least one question'),
});
