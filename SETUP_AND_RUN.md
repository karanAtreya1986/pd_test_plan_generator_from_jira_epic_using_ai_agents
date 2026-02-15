# Intelligent Test Plan Generator - Setup and Execution Guide

This guide provides step-by-step instructions to set up and run the **Intelligent Test Plan Generator** project.

## 📋 Prerequisites
- **Node.js** (v18.x or higher)
- **npm** (v9.x or higher)
- **Jira Account** (Base URL, Username, and API Token)
- **Groq API Key** (for LLM generation)

---

## 🚀 Getting Started

### 1. Configure Environment Variables
Navigate to the backend directory and create a `.env` file based on the example provided.

**File Location:** `intelligent-test-plan-agent/backend/.env`

**Content Template:**
```env
# JIRA Configuration
JIRA_BASE_URL=https://your-domain.atlassian.net
JIRA_USERNAME=your-email@example.com
JIRA_API_TOKEN=your-jira-api-token

# Groq Configuration
GROQ_API_KEY=your-groq-api-key

# Ollama Configuration (Optional - for local LLM)
OLLAMA_BASE_URL=http://localhost:11434

# Server Configuration
PORT=3001
NODE_ENV=development

# Database
DATABASE_PATH=./data/app.db
```

### 2. Install Dependencies
You need to install packages for both the frontend and the backend.

**For Backend:**
```bash
cd intelligent-test-plan-agent/backend
npm install
```

**For Frontend:**
```bash
cd intelligent-test-plan-agent/frontend
npm install
```

### 3. Initialize the Database
The project uses SQLite. You must initialize the database before first use.

**Run in Backend folder:**
```bash
npm run db:init
```

---

## 🛠️ Running the Application

To run the project, you need to start both the backend and frontend servers simultaneously.

### 1. Start the Backend (API Server)
```bash
cd intelligent-test-plan-agent/backend
npm run dev
```
*The backend will run on `http://localhost:3001`*

### 2. Start the Frontend (Vite App)
```bash
cd intelligent-test-plan-agent/frontend
npm run dev
```
*The frontend will run on `http://localhost:3000`*

---

## 🖥️ How to Use
1.  Open [http://localhost:3000](http://localhost:3000) in your web browser.
2.  In the dashboard, enter a **Jira Ticket ID** (e.g., `SCRUM-5`).
3.  Click **Fetch Ticket** to pull details from Jira.
4.  Use the **Generate Test Plan** button to create a comprehensive test plan using AI.

---

## 📁 Project Structure
- `/intelligent-test-plan-agent/backend`: Express service with Jira, Groq, and SQLite integration.
- `/intelligent-test-plan-agent/frontend`: React application built with Tailwind CSS and Vite.
- `/intelligent-test-plan-agent/data`: Contains the SQLite database file (`app.db`).
