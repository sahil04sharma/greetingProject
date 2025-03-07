# greetingProject

Greeting App

A simple full-stack application with a Node.js + Express backend and a React (Vite) frontend that displays a personalized greeting.

Features

User enters a name and gets a greeting message.

Simple API built with Express.js.

Frontend built with React + Vite.

Tech Stack

Frontend: React (Vite), Fetch API

Backend: Node.js, Express, CORS

Dependencies

Backend: express, cors

Frontend: react, react-dom, vite

Installation & Setup

git clone https://github.com/sahil04sharma/greetingProject.git
cd greetingProject

Backend

cd backend
npm install
node server.js

Runs at: http://localhost:5000

Frontend

cd ../frontend
npm install
npm run dev

Open in browser: http://localhost:5173

API Endpoint

GET /api/greet?name=YourName

Returns: { "message": "Hello, YourName! Welcome to Younglabs." }

If name is missing: { "error": "Name is required." }

Why Fetch Instead of Axios?

Fetch is native to browsers and does not require additional dependencies.

It provides a simpler API for basic requests.

Ideal for small projects like this where advanced features (timeouts, interceptors) are not needed.

