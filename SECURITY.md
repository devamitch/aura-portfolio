# Security Policy

## Supported Versions

We provide security updates for the following versions:

| Version | Supported          |
| ------- | ------------------ |
| 1.2.x   | :white_check_mark: |
| 1.1.x   | :x:                |
| 1.0.x   | :x:                |

## Reporting a Vulnerability

We take the security of this project seriously. If you discover a security vulnerability, please report it immediately.

### How to Report
- Do not open a public issue.
- Email your report to **security@example.com**.
- Include a detailed description of the vulnerability and steps to reproduce it.

### Our Response
- We will acknowledge your report within 48 hours.
- We will provide a timeline for a fix and keep you updated on our progress.
- We will credit you for the discovery in our changelog (unless you prefer to remain anonymous).

## Best Practices

- **API Keys**: Always use environment variables for sensitive configuration.
- **Firebase Rules**: Regularly audit your Firestore security rules to ensure data protection.
- **Dependencies**: Keep your npm packages up to date to benefit from the latest security patches.
