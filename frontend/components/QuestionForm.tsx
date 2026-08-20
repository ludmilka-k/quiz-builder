import React from 'react';
import { useFormContext, useFieldArray, Controller } from 'react-hook-form';
import { CreateQuizPayload } from '@/types';

interface QuestionFormProps {
  index: number;
  remove: (index: number) => void;
}

export const QuestionForm: React.FC<QuestionFormProps> = ({ index, remove }) => {
  const { control, watch } = useFormContext<CreateQuizPayload>();
  const type = watch(`questions.${index}.type`);

  return (
    <div className="p-4 border rounded mb-4">
      <div className="flex justify-between items-center mb-2">
        <h3 className="font-bold">Question {index + 1}</h3>
        <button type="button" onClick={() => remove(index)} className="text-red-500">Remove</button>
      </div>

      <div className="mb-2">
        <label className="block mb-1">Text</label>
        <Controller
          name={`questions.${index}.text`}
          control={control}
          render={({ field, fieldState: { error } }) => (
            <>
              <input {...field} className="w-full border p-1 rounded" />
              {error && <p className="text-red-500 text-sm">{error.message}</p>}
            </>
          )}
        />
      </div>

      <div className="mb-2">
        <label className="block mb-1">Type</label>
        <Controller
          name={`questions.${index}.type`}
          control={control}
          render={({ field }) => (
            <select {...field} className="w-full border p-1 rounded">
              <option value="BOOLEAN">Boolean</option>
              <option value="INPUT">Input</option>
              <option value="CHECKBOX">Checkbox</option>
            </select>
          )}
        />
      </div>

      {type === 'CHECKBOX' && (
        <CheckboxOptions index={index} />
      )}

      {type === 'BOOLEAN' && (
        <div className="mb-2">
          <label className="block mb-1">Correct Answer</label>
          <Controller
            name={`questions.${index}.correctAnswerBoolean`}
            control={control}
            render={({ field }) => (
              <select {...field} value={field.value === null ? '' : String(field.value)} onChange={(e) => field.onChange(e.target.value === '' ? null : e.target.value === 'true')} className="w-full border p-1 rounded">
                <option value="">Select an answer</option>
                <option value="true">True</option>
                <option value="false">False</option>
              </select>
            )}
          />
        </div>
      )}

      {type === 'INPUT' && (
        <div className="mb-2">
          <label className="block mb-1">Correct Answer</label>
          <Controller
            name={`questions.${index}.correctAnswerInput`}
            control={control}
            render={({ field }) => (
              <input {...field} className="w-full border p-1 rounded" />
            )}
          />
        </div>
      )}

      {type === 'CHECKBOX' && (
        <div className="mb-2">
          <label className="block mb-1">Correct Answer (Select all that apply)</label>
          <Controller
            name={`questions.${index}.correctAnswerCheckbox`}
            control={control}
            render={({ field }) => (
              <div>
                {watch(`questions.${index}.options`)?.map((option, optionIndex) => (
                  <label key={optionIndex} className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      checked={(field.value || []).includes(optionIndex)}
                      onChange={(e) => {
                        const current = field.value || [];
                        if (e.target.checked) {
                          field.onChange([...current, optionIndex]);
                        } else {
                          field.onChange(current.filter((i: number) => i !== optionIndex));
                        }
                      }}
                    />
                    {option}
                  </label>
                ))}
              </div>
            )}
          />
        </div>
      )}
    </div>
  );
};

const CheckboxOptions: React.FC<{ index: number }> = ({ index }) => {
  const { control } = useFormContext<CreateQuizPayload>();
  const { fields, append, remove } = useFieldArray({
    control,
    name: `questions.${index}.options` as any,
  });

  return (
    <div className="mb-2">
      <label className="block mb-1">Options</label>
      {fields.map((field, optionIndex) => (
        <div key={field.id} className="flex gap-2 mb-1">
          <Controller
            name={`questions.${index}.options.${optionIndex}`}
            control={control}
            render={({ field }) => <input {...field} className="flex-grow border p-1 rounded" />}
          />
          <button type="button" onClick={() => remove(optionIndex)} className="text-red-500">x</button>
        </div>
      ))}
      <button type="button" onClick={() => append('')} className="bg-blue-500 text-white p-1 rounded mt-1">Add Option</button>
    </div>
  );
};
