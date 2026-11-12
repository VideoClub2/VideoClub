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

- React
- Vite
- Tailwind CSS
- React Router
- Axios
- JSON Server
