# 🏆 Leaderboard Application (Full Stack - React + Flask)

## 🚀 Overview
A **full-stack leaderboard application** that allows users to view, add, and delete users and manage scores dynamically.

![React](https://img.shields.io/badge/React-18-blue)
![Vite](https://img.shields.io/badge/Vite-3-purple)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6-yellow)
![Python](https://img.shields.io/badge/Python-3.10-blue)
![Flask](https://img.shields.io/badge/Flask-3.1-red)

1. **Frontend (React)**
2. **Backend (Flask + SQLAlchemy API)**

### 📢 **This repo leverages another repository for API services**
This frontend is designed to work with the **Leaderboard API**, which provides the necessary backend services.

🔗 **Leaderboard API Repository:** https://github.com/CodingApps1/leaderboard-api.git

Ensure the backend API is **installed and running** before starting the frontend.

---

## 📌 Installation ( Backend & Frontend)
Follow these steps to set up the project locally:

```bash
**1️⃣ Install the Backend (Leaderboard API)**

Clone and set up the **Leaderboard API (Flask backend)** first:

git clone https://github.com/CodingApps1/leaderboard-api.git
cd leaderboard-api

# Create a virtual environment
python -m venv venv

# macOS/Linux
source venv/bin/activate

# Windows
venv\Scripts\activate

# Install dependencies
pip install -r requirements.txt

---

🔧 Set Up Environment Variables
Create a .env file inside leaderboard-api/ and add:
DATABASE_URL=sqlite:///leaderboard.db
FLASK_ENV=development

---

🖥️ Set up the database:
python app.py  # Start the API server

---

🎯 Your backend API should now be running at:
http://127.0.0.1:5000/api/users
Visit **Leaderboard API Repository:** https://github.com/CodingApps1/leaderboard-api.git for API endpoints documentation

---


**2️⃣ Install the Frontend (Leaderboard Frontend React)**

git clone https://github.com/CodingApps1/leaderboard-frontend-react.git
cd leaderboard-frontend
npm install

---

🎯 Running the Application
npm run dev
Open in browser: http://localhost:5173

---

🧪 Running Tests
Unit Tests (Jest + React Testing Library)
npm test

---

🚀 Build for Production
npm run build
(This creates a dist/ folder that can be deployed to a hosting service)





