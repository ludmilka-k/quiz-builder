import { z } from 'zod';
import {
  quizSummarySchema,
  createQuestionSchema,
  createQuizSchema,
  quizSchema,
  questionSchema,
  questionTypeSchema,
} from '@/schemas/quiz';

export type QuestionType = z.infer<typeof questionTypeSchema>;
export type Question = z.infer<typeof questionSchema>;
export type Quiz = z.infer<typeof quizSchema>;
export type QuizSummary = z.infer<typeof quizSummarySchema>;
export type CreateQuestionPayload = z.infer<typeof createQuestionSchema>;
export type CreateQuizPayload = z.infer<typeof createQuizSchema>;

