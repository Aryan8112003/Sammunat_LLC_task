# Landing Page - React

A modern, responsive landing page built with React and Vite.

## Features

- ⚡ Fast development with Vite
- 🎨 Beautiful, modern design
- 📱 Fully responsive
- ⚛️ Built with React 18
- 🎯 Component-based architecture

## Getting Started

### Install Dependencies

```bash
npm install
```

### Development Server

```bash
npm run dev
```

The app will be available at `http://localhost:5173`

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
landing/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── Features.jsx
│   │   ├── CTA.jsx
│   │   └── Footer.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── styles.css
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## Technologies Used

- React 18
- Vite
- CSS3 (with CSS Variables)

## Deployment

This project is ready to deploy on both **Vercel** and **Netlify**. Both platforms are excellent choices, but **Vercel is slightly easier** for React apps.

### 🚀 Deploy to Vercel (Recommended - Easiest)

1. **Push your code to GitHub** (if not already):
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin <your-github-repo-url>
   git push -u origin main
   ```

2. **Deploy to Vercel**:
   - Go to [vercel.com](https://vercel.com)
   - Sign up/login with GitHub
   - Click "New Project"
   - Import your GitHub repository
   - Vercel will auto-detect Vite settings
   - Click "Deploy"
   - Done! Your site will be live in seconds

**That's it!** Vercel automatically detects Vite and configures everything.

### 🌐 Deploy to Netlify

1. **Push your code to GitHub** (if not already):
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin <your-github-repo-url>
   git push -u origin main
   ```

2. **Deploy to Netlify**:
   - Go to [netlify.com](https://netlify.com)
   - Sign up/login with GitHub
   - Click "Add new site" → "Import an existing project"
   - Select your GitHub repository
   - Build settings (usually auto-detected):
     - Build command: `npm run build`
     - Publish directory: `dist`
   - Click "Deploy site"
   - Done!

### 📝 Manual Deployment (Alternative)

If you prefer to deploy manually:

1. Build the project:
   ```bash
   npm run build
   ```

2. Upload the `dist` folder to your hosting provider

### ⚙️ Configuration Files

Both `vercel.json` and `netlify.toml` are included in this project, so deployment settings are already configured. You can deploy to either platform without any additional setup!

