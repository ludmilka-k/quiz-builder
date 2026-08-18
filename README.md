# Quiz Builder

A full-stack Quiz Builder application built with NestJS, Next.js, PostgreSQL, and Prisma ORM in a monorepo structure.

## Architecture

- **Backend**: NestJS (`backend/`) with Prisma ORM (`backend/prisma/`)
- **Frontend**: Next.js (`frontend/`)
- **Database**: PostgreSQL (via Docker Compose)

## Prerequisites

- Node.js (v18+ recommended)
- Docker and Docker Compose

## Getting Started

### 1. Environment Configuration

Copy `.env.example` to `.env` in the root (and/or backend/frontend as needed):
```bash
cp .env.example .env
```

### 2. Start PostgreSQL Database

Run Docker Compose to start the PostgreSQL container:
```bash
docker-compose up -d
```

### 3. Setup and Run Backend

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
