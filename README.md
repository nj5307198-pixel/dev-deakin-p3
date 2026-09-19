# DEV@Deakin — P3 Home Page (React)

React (Vite) migration of the DEV@Deakin home page, built for SIT313 P3.

## Structure

```
src/
  components/
    Navbar.jsx
    Hero.jsx
    About.jsx
    Projects.jsx        (parent) + ProjectCard.jsx (child)
    FeaturedArticles.jsx (parent) + ArticleCard.jsx (child)   ← new, required section
    FeaturedTutorials.jsx (parent) + TutorialCard.jsx (child) ← new, required section
    SignupForm.jsx
    Gallery.jsx
    Footer.jsx           ← new, matches wireframe footer
  data/
    articles.js   (array used with .map() in FeaturedArticles)
    tutorials.js  (array used with .map() in FeaturedTutorials)
  App.jsx         (top-level parent composing all children)

server/           (migrated ExpressJS backend from P2, unchanged logic)
  server.js
  .env.example
```

## Run the frontend

```
npm install
npm run dev
```

Opens on http://localhost:5173

## Run the backend (optional, for the sign-up form to actually send email)

```
cd server
npm install
cp .env.example .env   # fill in your Elastic Email API key
npm run dev
```

Runs on http://localhost:3000

