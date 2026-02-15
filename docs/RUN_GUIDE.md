# 🚀 Run Guide: Intelligent Test Plan Generator

This guide provides step-by-step instructions to get the **Intelligent Test Plan Generator** up and running on your local machine.

---

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js**: Version 18.x or higher.
- **npm**: Node Package Manager (comes with Node.js).
- **JIRA API Token**: Needed to fetch tickets from your JIRA instance. [Generate one here](https://id.atlassian.com/manage-profile/security/api-tokens).
- **Groq API Key**: (Optional/Recommended) Fast LLM inference. [Get it here](https://console.groq.com/keys).
- **Ollama**: (Optional) For running LLMs locally.

---

## 🛠️ Step-by-Step Installation

### 1. Backend Setup
Navigate to the backend directory and install the necessary packages.
```bash
cd intelligent-test-plan-agent/backend
npm install
```

### 2. Configure Environment Variables
Create a `.env` file in the `intelligent-test-plan-agent/backend/` directory. Use the following template:

```env
PORT=3001
# JIRA Configuration
JIRA_BASE_URL=https://your-domain.atlassian.net
JIRA_USERNAME=your-email@example.com
JIRA_API_TOKEN=your-jira-api-token

# LLM Configuration
GROQ_API_KEY=your-groq-api-key
# (Optional) If using Ollama locally
# OLLAMA_HOST=http://localhost:11434
```

### 3. Initialize the Database
The application uses SQLite for local data storage. Initialize the database schema:
```bash
# Note: Ensure you are in the backend directory
npm run db:init
```

### 4. Frontend Setup
Open a **new terminal window**, navigate to the frontend directory, and install dependencies.
```bash
cd intelligent-test-plan-agent/frontend
npm install
```

---

## 🏃 Running the Application

To run the full application, you need both the backend and frontend servers running simultaneously.

### Start the Backend Server
```bash
cd intelligent-test-plan-agent/backend
npm run dev
```
*The backend will be accessible at `http://localhost:3001`.*

### Start the Frontend Server
```bash
cd intelligent-test-plan-agent/frontend
npm run dev
```
*The frontend will be accessible at `http://localhost:5173`.*

---

## 🔍 How to Use

1.  **Configure Settings**: Once the app is running, navigate to the **Settings** page in the UI to verify your JIRA and LLM connections.
2.  **Fetch Ticket**: Enter a JIRA Ticket ID (e.g., `PROJ-123`) on the dashboard.
3.  **Generate Test Plan**: Click on "Generate" and watch the AI agent analyze the requirements and build a comprehensive test plan.
4.  **Review & Export**: Content is saved locally in the SQLite database and can be reviewed or exported.

---

## 💡 Troubleshooting
- **Port 3001 already in use**: Change the `PORT` variable in your `.env` file.
- **CORS Errors**: Ensure the frontend is running on `http://localhost:5173` (the default Vite port).
- **Database missing**: If you get a "file not found" error for the database, check that the `intelligent-test-plan-agent/data` folder exists.

---
*Happy Testing!* 🧪
