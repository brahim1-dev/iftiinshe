# Iftiinshe

## look here https://baroh.netlify.app/
Iftiinshe is a React course platform for browsing development courses, viewing course details, and managing course content through a simple, responsive interface.

The project is built with React and Vite and uses JSON Server as a lightweight local REST API during development.

## Features

- Browse all available courses
- Show the three most recent courses on the home page
- View detailed course information, including technology, duration, price, and instructor details
- Navigate between pages with React Router
- Add and edit course routes ready for continued development
- Responsive layout styled with Tailwind CSS
- Local course data stored in `src/courses.json`

## Tech Stack

- React 19
- Vite
- React Router
- Tailwind CSS
- React Icons
- JSON Server

## Getting Started

### Prerequisites

Make sure you have Node.js and npm installed.

### Installation

Clone the repository and install its dependencies:

```bash
git clone https://github.com/YOUR_USERNAME/YOUR_REPOSITORY.git
cd 18-Iftiinshe-react-app
npm install
```

Replace `YOUR_USERNAME/YOUR_REPOSITORY` with your GitHub repository path.

### Run the project

The app needs both the Vite development server and the JSON Server API. Open two terminals in the project folder.

**Terminal 1: start the API**

```bash
npm run server
```

The API runs at `http://localhost:3000`.

**Terminal 2: start the React app**

```bash
npm run dev
```

Open the local URL printed by Vite, usually `http://localhost:5173`.

## Available Routes

| Route              | Description                     |
| ------------------ | ------------------------------- |
| `/`                | Home page with featured courses |
| `/courses`         | All courses                     |
| `/courses/:id`     | Details for one course          |
| `/add-course`      | Add course page                 |
| `/edit-course/:id` | Edit course page                |

## API

Course data is served from `src/courses.json` by JSON Server.

| Method | Endpoint                       | Purpose                                       |
| ------ | ------------------------------ | --------------------------------------------- |
| `GET`  | `/courses`                     | Get all courses                               |
| `GET`  | `/courses?_page=1&_per_page=3` | Get the first three courses for the home page |
| `GET`  | `/courses/:id`                 | Get one course                                |

The frontend expects the API to be available on port `3000`. If that port is already in use, stop the other process before running `npm run server`.

## Available Scripts

| Command           | Description                            |
| ----------------- | -------------------------------------- |
| `npm run dev`     | Start the Vite development server      |
| `npm run server`  | Start JSON Server with the course data |
| `npm run build`   | Create a production build              |
| `npm run preview` | Preview the production build locally   |
| `npm run lint`    | Run ESLint                             |

## Project Structure

```text
src/
├── components/       Reusable UI components
├── pages/             Route-level pages
├── assets/            Application assets
├── courses.json       Local JSON Server database
├── App.jsx            Application routes
├── index.css          Global styles
└── main.jsx           Application entry point
```

## Production Build

Create a production build with:

```bash
npm run build
```

The generated files are placed in the `dist/` directory. The current frontend uses a local JSON Server API, so a deployed version will need a hosted API or another production data source.

## Contributing

1. Create a feature branch.
2. Make your changes.
3. Run `npm run build` and `npm run lint`.
4. Open a pull request with a clear description of the change.

## License

This project is currently intended for learning and personal development.
