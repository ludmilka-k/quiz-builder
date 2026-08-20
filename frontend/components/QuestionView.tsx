import React from 'react';
import type { Question } from '@/types';

interface QuestionViewProps {
  question: Question;
  index: number;
}

export function QuestionView({ question, index }: QuestionViewProps) {
  return (
    <div className="border rounded p-4 mb-3 bg-white">
      <div className="flex items-center gap-2 mb-2">
        <span className="font-semibold text-gray-700">Q{index + 1}.</span>
        <span className="text-sm px-2 py-0.5 rounded bg-gray-100 text-gray-500 uppercase">
          {question.type}
        </span>
      </div>
      <p className="mb-3 font-medium">{question.text}</p>

      {question.type === 'BOOLEAN' && (
        <div className="flex gap-4">
          <label className="flex items-center gap-1 text-gray-600">
            <input
              type="radio"
              disabled
              checked={question.correctAnswerBoolean === true}
            />{' '}
            True
          </label>
          <label className="flex items-center gap-1 text-gray-600">
            <input
              type="radio"
              disabled
              checked={question.correctAnswerBoolean === false}
            />{' '}
            False
          </label>
        </div>
      )}

      {question.type === 'INPUT' && (
        <input
          type="text"
          disabled
          value={question.correctAnswerInput ?? ''}
          placeholder="Short answer"
          className="w-full border p-2 rounded bg-gray-50 text-gray-600"
        />
      )}

      {question.type === 'CHECKBOX' && (
        <ul className="space-y-1">
          {question.options.map((option, optIdx) => (
            <li key={optIdx} className="flex items-center gap-2 text-gray-600">
              <input
                type="checkbox"
                disabled
                checked={question.correctAnswerCheckbox?.includes(optIdx) ?? false}
              />
              <span>{option}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
