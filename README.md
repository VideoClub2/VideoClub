# Fantasía Videoclub

We are a team of 3.

A movie catalog web app built with React and Vite. Users can explore the catalog, filter movies by category, and view details for each title.

## Requirements

- Node.js and npm

## Installation and setup

1. Clone the repository and move into the project folder.
2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the mock API server in one terminal:

   ```bash
   npm run server
   ```

4. Start the frontend in another terminal:

   ```bash
   npm run dev
   ```

Open the local URL shown by Vite in the browser. The application loads its movie data from `http://localhost:3000/movies`, so keep the server running while using the app.

## Features

- Browse the movie catalog
- Sort by popularity, year, rating, or genre
- View detailed movie information
- Navigate through the app pages

## Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the Vite development server |
| `npm run server` | Start JSON Server using `db.json` |
| `npm run build` | Build the app for production |
| `npm run preview` | Preview the production build |
| `npm run lint` | Run ESLint |

## Tech stack

[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-8-646CFF?logo=vite&logoColor=white)](https://vite.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![React Router](https://img.shields.io/badge/React_Router-7-CA4245?logo=reactrouter&logoColor=white)](https://reactrouter.com/)
[![Axios](https://img.shields.io/badge/Axios-1-5A29E4?logo=axios&logoColor=white)](https://axios-http.com/)
[![JSON Server](https://img.shields.io/badge/JSON_Server-1-222222?logo=json&logoColor=white)](https://github.com/typicode/json-server)
