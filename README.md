.md
# Mentor-Student Management System API

Backend-only REST API for mentors to manage students, assign tasks, and review submissions. Built with Node.js/Express and MongoDB.

## Features
- **Auth**: JWT login for mentors.
- **Students**: CRUD operations (add/edit/delete students).
- **Tasks**: Create and assign tasks to students.
- **Submissions**: Submit/review/mark complete with feedback/progress tracking.
- **Bonus**: Swagger API docs at `/api-docs`.

## Architecture
- **DB**: MongoDB with Mongoose (schemas: Mentor 1:M Student, Task M:M Student, Submission 1:1 Task/Student).
- **API**: RESTful endpoints under `/api/*`, protected with JWT.
- **Security**: bcrypt hashing, helmet, input validation.
- Relationships: Populated queries for efficiency.

## Setup Instructions
1. Clone: `git clone https://github.com/yourusername/mentor-student-api.git`
2. Install: `npm install`
3. Env: Copy `.env.example` to `.env`, add MONGODB_URI (MongoDB Atlas) and JWT_SECRET.
4. Run: `npm run dev`
5. Test: `npm test`

## Demo Credentials
- Login: POST `/api/auth/login` with { "email": "demo@mentor.com", "password": "demo123" } (seed this in DB if needed).

## Live URL
https://yourapp.onrender.com/api-docs

## Tech Stack
- Node.js/Express
- MongoDB/Mongoose
- JWT/Bcrypt