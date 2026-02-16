# 🚀 How to Run - Intelligent Test Plan Generator

This guide will help you set up and run the Intelligent Test Plan Generator on your local machine.

---

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v18 or higher) - [Download here](https://nodejs.org/)
- **Git** - [Download here](https://git-scm.com/)
- **JIRA Account** with API access
- **Groq API Key** (for cloud LLM) - [Get it here](https://console.groq.com/keys)
- **Ollama** (optional, for local LLM) - [Download here](https://ollama.ai/)

---

## 🔧 Step 1: Clone the Repository

```bash
git clone https://github.com/karanAtreya1986/pd_test_plan_generator_from_jira_epic_using_ai_agents.git
cd pd_test_plan_generator_from_jira_epic_using_ai_agents
```

---

## 🔑 Step 2: Get Your API Credentials

### A. JIRA API Token

1. Go to [Atlassian Account Settings](https://id.atlassian.com/manage-profile/security/api-tokens)
2. Click **"Create API token"**
3. Give it a name (e.g., "Test Plan Generator")
4. Copy the token (you'll need this later)

### B. Groq API Key

1. Visit [Groq Console](https://console.groq.com/keys)
2. Sign up or log in
3. Click **"Create API Key"**
4. Copy the key (starts with `gsk_...`)

### C. Ollama (Optional - for local LLM)

If you want to use local LLM instead of cloud:

```bash
# Install Ollama from https://ollama.ai/

# Pull a model (e.g., llama3.1)
ollama pull llama3.1

# Verify it's running
ollama list
```

---

## ⚙️ Step 3: Configure Backend

### 3.1 Navigate to Backend Directory

```bash
cd intelligent-test-plan-agent/backend
```

### 3.2 Install Dependencies

```bash
npm install
```

### 3.3 Set Up Environment Variables

Copy the example environment file:

```bash
# On Windows (PowerShell)
Copy-Item .env.example .env

# On macOS/Linux
cp .env.example .env
```

### 3.4 Edit `.env` File

Open `.env` in your text editor and fill in your credentials:

```env
# JIRA Configuration
JIRA_BASE_URL=https://your-domain.atlassian.net
JIRA_USERNAME=your-email@example.com
JIRA_API_TOKEN=your-jira-api-token-here

# LLM Configuration
GROQ_API_KEY=gsk_your-groq-api-key-here
OLLAMA_BASE_URL=http://localhost:11434

# Server Configuration
PORT=3001
NODE_ENV=development

# Database
DATABASE_PATH=./data/app.db
```

**Important:** Replace the placeholder values with your actual credentials!

### 3.5 Initialize Database

```bash
npm run db:init
```

### 3.6 Start Backend Server

```bash
npm run dev
```

You should see:
```
🚀 Server running on http://localhost:3001
📊 API endpoints:
   - Settings: /api/settings
   - JIRA: /api/jira
   - Templates: /api/templates
   - Test Plan: /api/testplan
```

---

## 🎨 Step 4: Configure Frontend

Open a **new terminal window** (keep the backend running).

### 4.1 Navigate to Frontend Directory

```bash
cd intelligent-test-plan-agent/frontend
```

### 4.2 Install Dependencies

```bash
npm install
```

### 4.3 Start Frontend Development Server

```bash
npm run dev
```

You should see:
```
  VITE v5.x.x  ready in xxx ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
```

---

## 🌐 Step 5: Access the Application

1. Open your browser and go to: **http://localhost:5173/**
2. You should see the Intelligent Test Plan Generator interface

---

## 🔐 Step 6: Configure Application Settings

### 6.1 Configure JIRA Integration

1. Click on **Settings** in the sidebar
2. Go to the **JIRA** tab
3. Enter your JIRA details:
   - **Base URL**: `https://your-domain.atlassian.net`
   - **Username/Email**: Your JIRA email
   - **API Token**: The token you created in Step 2A
4. Click **"Save JIRA Settings"**
5. Click **"Test Connection"** to verify (should show green ✓)

### 6.2 Configure LLM Provider

#### Option A: Using Groq (Cloud LLM - Recommended)

1. Go to the **LLM** tab
2. Ensure **"Use Local LLM (Ollama)"** is **OFF**
3. Enter your **Groq API Key** (from Step 2B)
4. Select a model (recommended: **GPT-OSS 120B**)
5. Adjust temperature (0.7 is good for test plans)
6. Click **"Save LLM Settings"**
7. Click **"Test Groq"** to verify

#### Option B: Using Ollama (Local LLM)

1. Make sure Ollama is running (`ollama serve`)
2. Go to the **LLM** tab
3. Toggle **"Use Local LLM (Ollama)"** to **ON**
4. Enter Ollama URL: `http://localhost:11434`
5. Enter model name (e.g., `llama3.1`)
6. Click **"Save LLM Settings"**
7. Click **"Test Ollama"** to verify

---

## 🎯 Step 7: Generate Your First Test Plan

1. Go to the **Generate** page (home)
2. Enter a JIRA ticket ID (e.g., `VWO-5`, `PROJ-123`)
3. Click **"Fetch Ticket"**
4. Review the ticket details displayed
5. Click **"Generate Test Plan"**
6. Wait for the AI to generate the test plan
7. Review, edit, and export the generated plan!

---

## 📁 Project Structure

```
pd_test_plan_generator_from_jira_epic_using_ai_agents/
├── intelligent-test-plan-agent/
│   ├── backend/                    # Express.js backend
│   │   ├── src/
│   │   │   ├── database/          # SQLite database & schema
│   │   │   ├── routes/            # API endpoints
│   │   │   ├── services/          # JIRA & LLM integrations
│   │   │   └── utils/             # Validators & error handlers
│   │   ├── .env.example           # Environment template
│   │   └── package.json
│   ├── frontend/                   # React + Vite frontend
│   │   ├── src/
│   │   │   ├── components/        # UI components
│   │   │   ├── pages/             # Main pages
│   │   │   └── services/          # API client
│   │   └── package.json
│   ├── data/                       # SQLite database & generated plans
│   └── templates/                  # PDF templates
├── docs/                           # Additional documentation
├── SECURITY.md                     # Security guidelines
├── README.md                       # Project overview
└── HOW_TO_RUN.md                  # This file!
```

---

## 🔒 Security Notes

### Credential Storage

This application uses **secure OS-level credential storage**:

- **Windows**: Windows Credential Manager
- **macOS**: Keychain
- **Linux**: libsecret

Your API keys are **never stored in plain text files**. They are encrypted and stored in your operating system's secure credential store via the `keytar` library.

### What Gets Stored Where

| Data Type | Storage Location |
|-----------|------------------|
| JIRA API Token | OS Keychain (encrypted) |
| Groq API Key | OS Keychain (encrypted) |
| JIRA Base URL | SQLite database (not sensitive) |
| JIRA Username | SQLite database (not sensitive) |
| LLM Settings | SQLite database (not sensitive) |
| Generated Test Plans | File system (`data/` folder) |

### After First Run

After you've configured the application once:

1. Your credentials are stored securely in the OS keychain
2. You can **delete the `.env` file** if you want
3. The app will continue to work (credentials persist in keychain)
4. To update credentials, use the Settings page in the UI

---

## 🛠️ Troubleshooting

### Backend won't start

**Error**: `Port 3001 already in use`
- **Solution**: Change `PORT` in `.env` to a different port (e.g., `3002`)

**Error**: `Cannot find module 'keytar'`
- **Solution**: Rebuild native modules:
  ```bash
  cd intelligent-test-plan-agent/backend
  npm rebuild keytar
  ```

### Frontend won't connect to backend

**Error**: Network errors or CORS issues
- **Solution**: Ensure backend is running on `http://localhost:3001`
- Check that `VITE_API_URL` in frontend matches backend URL

### JIRA connection fails

**Error**: `401 Unauthorized`
- **Solution**: Verify your JIRA API token is correct
- Make sure you're using your **email** as the username, not your JIRA username

**Error**: `404 Not Found`
- **Solution**: Check that your JIRA Base URL is correct (e.g., `https://yourcompany.atlassian.net`)

### Groq API fails

**Error**: `Invalid API key`
- **Solution**: Get a new API key from [Groq Console](https://console.groq.com/keys)

**Error**: `Rate limit exceeded`
- **Solution**: Wait a few minutes or upgrade your Groq plan

### Ollama connection fails

**Error**: `Connection refused`
- **Solution**: Make sure Ollama is running:
  ```bash
  ollama serve
  ```

**Error**: `Model not found`
- **Solution**: Pull the model first:
  ```bash
  ollama pull llama3.1
  ```

---

## 🎓 Usage Tips

### Best Practices

1. **Use descriptive JIRA tickets**: The better your JIRA ticket descriptions and acceptance criteria, the better the generated test plans
2. **Choose the right model**: 
   - GPT-OSS 120B for comprehensive, detailed plans
   - Llama 3.1 8B for faster, lighter plans
3. **Customize templates**: Upload your own PDF templates for organization-specific formats
4. **Review and edit**: Always review AI-generated content before using it

### Keyboard Shortcuts

- `Ctrl + Enter` - Generate test plan
- `Ctrl + Shift + S` - Save to history

---

## 📞 Support

If you encounter issues:

1. Check the [Troubleshooting](#-troubleshooting) section above
2. Review the [SECURITY.md](./SECURITY.md) for credential issues
3. Check the browser console and backend terminal for error messages
4. Open an issue on [GitHub](https://github.com/karanAtreya1986/pd_test_plan_generator_from_jira_epic_using_ai_agents/issues)

---

## 🎉 You're All Set!

Enjoy automating your test plan creation with AI! 🚀

For more details about the project architecture and methodology, see [README.md](./README.md) and [BLAST.md](./BLAST.md).
