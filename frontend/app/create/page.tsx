'use client';

import React from 'react';
import { useForm, useFieldArray, FormProvider } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import { createQuizSchema } from '@/schemas/quiz';
import { CreateQuizPayload } from '@/types';
import { createQuiz } from '@/services/quizzes';
import { QuestionForm } from '@/components/QuestionForm';

export default function CreateQuizPage() {
  const router = useRouter();
  const methods = useForm<CreateQuizPayload>({
    resolver: zodResolver(createQuizSchema),
    defaultValues: {
      title: '',
      questions: [{ text: '', type: 'INPUT' }],
    },
  });

  const { control, handleSubmit } = methods;
  const { fields, append, remove } = useFieldArray({
    control,
    name: 'questions',
  });

  const onSubmit = async (data: CreateQuizPayload) => {
    try {
      await createQuiz(data);
      router.push('/quizzes');
    } catch (e) {
      console.error(e);
      alert('Failed to create quiz');
    }
  };

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Create New Quiz</h1>
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label className="block mb-1">Quiz Title</label>
            <input 
              {...methods.register('title')} 
              className="w-full border p-2 rounded" 
            />
            {methods.formState.errors.title && (
              <p className="text-red-500">{methods.formState.errors.title.message}</p>
            )}
          </div>

          <h2 className="text-xl font-semibold mb-2">Questions</h2>
          {fields.map((field, index) => (
            <QuestionForm key={field.id} index={index} remove={remove} />
          ))}

          <button 
            type="button" 
            onClick={() => append({ text: '', type: 'INPUT' })} 
            className="bg-green-500 text-white p-2 rounded mb-4"
          >
            Add Question
          </button>

          <button 
            type="submit" 
            className="block w-full bg-blue-500 text-white p-3 rounded font-bold"
          >
            Create Quiz
          </button>
        </form>
      </FormProvider>
    </div>
  );
}
