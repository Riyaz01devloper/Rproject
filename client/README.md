
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
