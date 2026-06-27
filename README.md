# EnginAble Global Website

The first prototype (started frontened React/Vite) website for EnginAble Global. It includes the homepage, information, articles, events, partners, and contact sections, plus a mock carousel on the home page.

## Run

```bash
npm install
npm start
```

Open `http://127.0.0.1:4173/`.

## Build

```bash
npm run build
```

## Main Files

- `src/App.jsx`
- `src/styles.css`
- `src/main.jsx`
- `index.html`

# Collaboration Guide

notes: if u are using agentic coding workflow, make sure to brief ur agent with the .md file(dm me if theres none) and tell it to analyse before putting ur changes.

This guide explains how to clone this private repository, make changes, and push your work to GitHub.

Assuming u can read this, so you've done steps 0 and 1 so skip to 2

## 0. Send Kenichi ur github user for him to add ur github account to collab in this repo

## 1. Accept the GitHub Invitation

Before cloning, make sure you have accepted the invitation to collaborate on this private repository.

You can check your invitation from GitHub notifications or your email.

## 2. Install Git

Download and install Git:

https://git-scm.com/downloads

To check if Git is installed, open Terminal or Command Prompt and run:

```bash
git --version
```

## 3. Clone the Repository

Open Terminal, Command Prompt, or VS Code terminal in a new folder in desktop or wherever.

Run:

```bash
git clone https://github.com/Kenichihung/EnginAble-website
```


Then enter the project folder:

```bash
cd EnginAble-website
```

## 4. Get the Latest Version Before Working

Before making changes, always run:

```bash
git pull
```

This makes sure your local files are updated with the latest changes from GitHub.

## 5. Create a New Branch

DO NOT WORK DIRECTLY IN `main`.

Create a new branch for your task:

```bash
git checkout -b your-name-feature-name
```

Example:

```bash
git checkout -b kenichi-navbar
```

## 6. Make Your Changes

Edit the files in VS Code or your preferred code editor.

After making changes, check what files were changed:

```bash
git status
```

## 7. Save Your Changes with a Commit

Add the changed files:

```bash
git add .
```

Commit your changes:

```bash
git commit -m "Describe what you changed"
```

Example:

```bash
git commit -m "Add navbar section"
```

## 8. Push Your Branch to GitHub

Push your branch:

```bash
git push origin your-branch-name
```

Example:

```bash
git push origin kenichi-navbar
```

## 9. Open a Pull Request

After pushing, go to the GitHub repository.

GitHub should show a button to create a Pull Request.

Click **Compare & pull request**, then write a short description of what you changed.

Example:

```text
Added the navbar layout and basic styling.
```

Then click **Create pull request**.

## 10. Wait for Review and Merge

Another team member or the repo owner will review your Pull Request.

If everything looks good, it will be merged into `main`.

## Daily Workflow Summary

Every time you want to work:

```bash
git pull
git checkout -b your-name-task-name
npm run dev
```

After editing:

```bash
npm run build
git status
git add .
git commit -m "Your message"
git push origin your-branch-name
```

Then open a Pull Request on GitHub.

## Important Rules

* Always run `git pull` before starting work.
* Do not push directly to `main`.
* Use a clear branch name.
* Use clear commit messages.
* Make small commits instead of one huge commit.
* Tell the team what you are working on to avoid editing the same file at the same time.
