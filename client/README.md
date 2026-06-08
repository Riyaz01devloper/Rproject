<<<<<<< HEAD
# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
=======
# AI Skill Tracker & Career Guide

A full-stack web application that helps users track their learning progress, manage skills, visualize growth through charts, and receive AI-powered career guidance.

## Features

### Authentication

* User Registration
* User Login
* JWT Authentication
* Protected Routes
* User-specific data access

### Skill Management

* Add Skills
* Delete Skills
* Update Skill Progress
* Track Learning Progress
* Personalized Skill Dashboard

### Analytics & Visualization

* Overall Progress Tracking
* Progress Charts
* Skill-wise Progress Analysis
* Interactive Dashboard

### AI Features

* AI Career Guidance
* AI Skill Recommendations
* Natural Language Commands

  * Add Python
  * Add React
  * Delete JavaScript
  * Delete Node.js

### User Profile

* View User Information
* Personalized Dashboard

### UI/UX

* Responsive Design
* Mobile-Friendly Sidebar
* Dark Mode Support
* Modern Dashboard Interface

## Tech Stack

### Frontend

* React.js
* React Router DOM
* Axios
* Tailwind CSS
* Recharts

### Backend

* Node.js
* Express.js

### Database

* MongoDB Atlas
* Mongoose

### Authentication

* JWT (JSON Web Token)
* bcrypt.js

### AI

* Google Gemini API

## Project Structure

client/

* src/

  * components/
  * pages/
  * services/
  * App.jsx

server/

* controllers/
* models/
* routes/
* middleware/
* ai/
* server.js

## Installation

### Clone Repository

git clone https://github.com/Riyaz01devloper/Rproject.git

### Frontend Setup

cd client

npm install

npm run dev

### Backend Setup

cd server

npm install

npm run dev

## Environment Variables

### Backend (.env)

PORT=5000

MONGO_URI=your_mongodb_connection_string

JWT_SECRET=your_jwt_secret

GEMINI_API_KEY=your_gemini_api_key

### Frontend (.env)

VITE_API_URL=http://localhost:5000

## Screenshots

* Login Page
* Dashboard
* AI Command Center
* Profile Page
* Dark Mode

## Future Improvements

* Skill Categories
* Roadmap Generation
* Resume Analyzer
* AI Interview Preparation
* Notifications & Reminders
* Leaderboard & Gamification

## Author

Riyaz Malik

B.Tech Computer Science Engineering
Jamia Millia Islamia

GitHub: https://github.com/Riyaz01devloper

## License

This project is open-source and available for educational and personal use.
>>>>>>> f3fe5d582ff5d300d3d65d7fe95090a81b6e26cf
