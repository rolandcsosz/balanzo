# Contributing to Balanzo

First off, thanks for taking the time to contribute! 🎉

The following is a set of guidelines for contributing to Balanzo. These are mostly guidelines, not rules. Use your best judgment, and feel free to propose changes to this document in a pull request.

## Code of Conduct

This project and everyone participating in it is governed by the [Balanzo Code of Conduct](CODE_OF_CONDUCT.md). By participating, you are expected to uphold this code. Please report unacceptable behavior to [hello@rolandcsosz.com](mailto:hello@rolandcsosz.com).

## How Can I Contribute?

### Reporting Bugs

This section guides you through submitting a bug report for Balanzo. Following these guidelines helps maintainers and the community understand your report, reproduce the behavior, and find related reports.

- **Use a clear and descriptive title** for the issue to identify the problem.
- **Describe the exact steps which reproduce the problem** in as many details as possible.
- **Provide specific examples** to demonstrate the steps.

### Pull Requests

1.  Fork the repo and create your branch from `main`.
2.  If you've added code that should be tested, add tests.
3.  If you've changed APIs, update the documentation.
4.  Ensure the test suite passes.
5.  Make sure your code lints.
6.  Issue that pull request!

## Development Setup

### Backend

1.  Navigate to `backend/`.
2.  Copy `.env.example` to `.env`.
3.  Run `npm install`.
4.  Run `npm run dev`.

### Frontend

1.  Navigate to `frontend/`.
2.  Copy `.env.example` to `.env`.
3.  Run `npm install`.
4.  Run `npm run dev` to start the web server (and Tauri if applicable).

## Styleguides

### Git Commit Messages

- Use the present tense ("Add feature" not "Added feature").
- Use the imperative mood ("Move cursor to..." not "Moves cursor to...").
- Limit the first line to 72 characters or less.
