# Quiz Builder

A full-stack Quiz Builder application built with NestJS, Next.js, PostgreSQL, and Prisma ORM in a monorepo structure.

## Architecture
- **Runtime**: Node.js
- **Backend**: NestJS (`backend/`) with Prisma ORM (`backend/prisma/`)
- **Frontend**: Next.js (`frontend/`)
- **Database**: PostgreSQL (via Docker Compose)
- **Validation**: express-validator (for backend), zod (for frontend)

## Prerequisites

- Node.js (v18+ recommended)
- Docker and Docker Compose

## Getting Started

### 1. Install dependencies:
```shell
npm install
```

### 2. Environment Configuration

Copy `.env.example` to `.env` in the root (and/or backend/frontend as needed):
```bash
cp .env.example .env
```

### 2. Start PostgreSQL Database

Run Docker Compose to start the PostgreSQL container:
```bash
docker-compose up -d
```

Stop Docker Compose
```bash
docker-compose down
```

### 3. Deploying a database schema

Apply Prisma migrations to create the table structure in the database:
```shell
npm run prisma:migrate
```

Generate Prisma Client:
```shell
npm run prisma:migrate
```

Run Prisma Studio
```shell
npm run prisma:studio
```

### 4. Filling the database with test data

Use the command to run the database population script:
```shell
npm run db:seed
```

### 5. Setup and Run Backend

Navigate to `backend/`, install dependencies, run Prisma migrations, and start the development server:
```bash
cd backend
npm install
npx prisma migrate dev --name init
npm run start:dev
```

The backend API will be running at `http://localhost:4000`.

### 4. Setup and Run Frontend

In a new terminal, navigate to `frontend/`, install dependencies, and start the Next.js development server:
```bash
cd frontend
npm install
npm run dev
```

The frontend application will be running at `http://localhost:3000`.

## Creating a Quiz

Once both the backend and frontend are running, you can create a new quiz:

1. Open your browser and navigate to **[http://localhost:3000/create](http://localhost:3000/create)** (or click **Create Quiz** in the navigation header).
2. Enter a **Quiz Title**.
3. Add one or more questions using the dynamic question builder.
4. Select the question type:
    - **Boolean**: True/False.
    - **Input**: Short text answer.
    - **Checkbox**: Multiple choice options.
5. Add/remove options or questions dynamically as needed.
6. Click **Submit** to create the quiz. The application will send a `POST /quizzes` request and redirect you to the quiz list.
