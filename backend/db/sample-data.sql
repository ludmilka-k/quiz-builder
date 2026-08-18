-- Sample data for Quiz Builder
-- TypeScript quizzes with various question types

-- Quiz 1: TypeScript Basics
INSERT INTO "Quiz" (id, title, description, "createdAt", "updatedAt")
VALUES (
  'a1b2c3d4-e5f6-7890-abcd-ef1234567890',
  'TypeScript Basics',
  'Test your knowledge of TypeScript fundamentals',
  NOW(),
  NOW()
);

INSERT INTO "Question" (id, text, type, options, "correctAnswer", "quizId", "createdAt", "updatedAt")
VALUES
  (
    'q1000001-0000-0000-0000-000000000001',
    'TypeScript is a statically typed superset of JavaScript.',
    'BOOLEAN',
    ARRAY[]::TEXT[],
    NULL,
    'a1b2c3d4-e5f6-7890-abcd-ef1234567890',
    NOW(),
    NOW()
  ),
  (
    'q1000001-0000-0000-0000-000000000002',
    'What keyword is used to declare a typed variable in TypeScript?',
    'INPUT',
    ARRAY[]::TEXT[],
    NULL,
    'a1b2c3d4-e5f6-7890-abcd-ef1234567890',
    NOW(),
    NOW()
  ),
  (
    'q1000001-0000-0000-0000-000000000003',
    'Which of the following are primitive types in TypeScript?',
    'CHECKBOX',
    ARRAY['string', 'number', 'boolean', 'object', 'symbol'],
    NULL,
    'a1b2c3d4-e5f6-7890-abcd-ef1234567890',
    NOW(),
    NOW()
  );

-- Quiz 2: TypeScript Intermediate
INSERT INTO "Quiz" (id, title, description, "createdAt", "updatedAt")
VALUES (
  'b2c3d4e5-f6a7-8901-bcde-fa2345678901',
  'TypeScript Intermediate',
  'Deepen your understanding of TypeScript interfaces, generics, and more',
  NOW(),
  NOW()
);

INSERT INTO "Question" (id, text, type, options, "correctAnswer", "quizId", "createdAt", "updatedAt")
VALUES
  (
    'q2000002-0000-0000-0000-000000000001',
    'TypeScript interfaces can extend multiple other interfaces.',
    'BOOLEAN',
    ARRAY[]::TEXT[],
    NULL,
    'b2c3d4e5-f6a7-8901-bcde-fa2345678901',
    NOW(),
    NOW()
  ),
  (
    'q2000002-0000-0000-0000-000000000002',
    'What TypeScript feature allows you to write reusable components that work with any data type?',
    'INPUT',
    ARRAY[]::TEXT[],
    NULL,
    'b2c3d4e5-f6a7-8901-bcde-fa2345678901',
    NOW(),
    NOW()
  ),
  (
    'q2000002-0000-0000-0000-000000000003',
    'Which of the following utility types are built into TypeScript?',
    'CHECKBOX',
    ARRAY['Partial', 'Required', 'Readonly', 'Mutable', 'Pick', 'Omit'],
    NULL,
    'b2c3d4e5-f6a7-8901-bcde-fa2345678901',
    NOW(),
    NOW()
  ),
  (
    'q2000002-0000-0000-0000-000000000004',
    'TypeScript enums compile down to plain JavaScript objects.',
    'BOOLEAN',
    ARRAY[]::TEXT[],
    NULL,
    'b2c3d4e5-f6a7-8901-bcde-fa2345678901',
    NOW(),
    NOW()
  ),
  (
    'q2000002-0000-0000-0000-000000000005',
    'What symbol is used to mark a property as optional in a TypeScript interface?',
    'INPUT',
    ARRAY[]::TEXT[],
    NULL,
    'b2c3d4e5-f6a7-8901-bcde-fa2345678901',
    NOW(),
    NOW()
  );

-- Quiz 3: TypeScript Advanced
INSERT INTO "Quiz" (id, title, description, "createdAt", "updatedAt")
VALUES (
  'c3d4e5f6-a7b8-9012-cdef-ab3456789012',
  'TypeScript Advanced',
  'Challenge yourself with advanced TypeScript concepts',
  NOW(),
  NOW()
);

INSERT INTO "Question" (id, text, type, options, "correctAnswer", "quizId", "createdAt", "updatedAt")
VALUES
  (
    'q3000003-0000-0000-0000-000000000001',
    'TypeScript supports declaration merging for interfaces.',
    'BOOLEAN',
    ARRAY[]::TEXT[],
    NULL,
    'c3d4e5f6-a7b8-9012-cdef-ab3456789012',
    NOW(),
    NOW()
  ),
  (
    'q3000003-0000-0000-0000-000000000002',
    'What is the name of the TypeScript feature that extracts the type of a variable at compile time?',
    'INPUT',
    ARRAY[]::TEXT[],
    NULL,
    'c3d4e5f6-a7b8-9012-cdef-ab3456789012',
    NOW(),
    NOW()
  ),
  (
    'q3000003-0000-0000-0000-000000000003',
    'Which of the following are valid TypeScript mapped type modifiers?',
    'CHECKBOX',
    ARRAY['+readonly', '-readonly', '+?', '-?', '!optional'],
    NULL,
    'c3d4e5f6-a7b8-9012-cdef-ab3456789012',
    NOW(),
    NOW()
  ),
  (
    'q3000003-0000-0000-0000-000000000004',
    'The "never" type in TypeScript can be assigned to any other type.',
    'BOOLEAN',
    ARRAY[]::TEXT[],
    NULL,
    'c3d4e5f6-a7b8-9012-cdef-ab3456789012',
    NOW(),
    NOW()
  ),
  (
    'q3000003-0000-0000-0000-000000000005',
    'Which TypeScript keyword is used to narrow types within conditional branches?',
    'INPUT',
    ARRAY[]::TEXT[],
    NULL,
    'c3d4e5f6-a7b8-9012-cdef-ab3456789012',
    NOW(),
    NOW()
  ),
  (
    'q3000003-0000-0000-0000-000000000006',
    'Which of the following are examples of TypeScript conditional types?',
    'CHECKBOX',
    ARRAY['T extends U ? X : Y', 'infer R', 'keyof T', 'NonNullable<T>', 'ReturnType<T>'],
    NULL,
    'c3d4e5f6-a7b8-9012-cdef-ab3456789012',
    NOW(),
    NOW()
  );
