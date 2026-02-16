# Security Guidelines

## Secrets Management

This project uses **secure credential storage** to protect sensitive information like API keys and tokens.

### How Secrets Are Stored

1. **JIRA API Token** - Stored in OS keychain via `keytar` library
2. **Groq API Key** - Stored in OS keychain via `keytar` library
3. **Configuration** - Non-sensitive settings stored in SQLite database

### Never Commit These Files

The following files should **NEVER** be committed to version control:

- `.env` files (any environment)
- `intelligent-test-plan-agent/data/app.db` (contains user data)
- Any files containing actual API keys or tokens

### Setting Up Credentials

1. Copy `.env.example` to `.env` in the backend directory
2. Fill in your actual credentials (these will NOT be committed)
3. Run the application - credentials will be stored securely in your OS keychain
4. You can then delete the `.env` file if desired (credentials persist in keychain)

### For Developers

- Use `intelligent-test-plan-agent/backend/.env.example` as a template
- Never hardcode secrets in source code
- All API keys are accessed via `SecureStorage` service
- Secrets are never logged or exposed in error messages

### Verifying Security

Before pushing to GitHub:
```bash
# Check for accidentally committed secrets
git log -p --all -S "gsk_" -S "ATATT" -S "ghp_"

# Ensure .gitignore is working
git status --ignored
```

## Reporting Security Issues

If you discover a security vulnerability, please email the maintainer directly rather than opening a public issue.
