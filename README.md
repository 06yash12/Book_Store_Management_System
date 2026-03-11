# Book Store - MERN Learning Project

A simple, clean book management application built while learning the MERN stack. This project demonstrates full-stack development fundamentals with MongoDB, Express, React, and Node.js.

## What It Does

Manage your book collection with complete CRUD operations:
- Add new books to your collection
- View all books in table or card layout
- Edit book details
- Delete books from your collection
- View detailed information for each book

## Tech Stack

**Frontend:** React, React Router, Axios, Tailwind CSS, Vite  
**Backend:** Node.js, Express, MongoDB, Mongoose  
**Development:** Nodemon for hot reloading

## Prerequisites

- Node.js (v18 or higher)
- MongoDB (v6 or higher)
- npm package manager

## Installation

Install dependencies for both frontend and backend:

```bash
# Backend
cd backend
npm install

# Frontend
cd frontend
npm install
```

## Running the Application

You'll need three terminal windows:

**Terminal 1 - Start MongoDB:**
```bash
mongod
```

**Terminal 2 - Start Backend Server:**
```bash
cd backend
npm run dev
```
Backend runs on `http://localhost:5555`

**Terminal 3 - Start Frontend:**
```bash
cd frontend
npm run dev
```
Frontend runs on `http://localhost:5173`

Open your browser to `http://localhost:5173` to use the application.

## Project Structure

```
├── backend/
│   ├── models/
│   │   └── bookModel.js      # MongoDB schema
│   ├── routes/
│   │   └── booksRoute.js     # API endpoints
│   ├── config.js             # Database configuration
│   ├── index.js              # Server entry point
│   └── package.json
│
└── frontend/
    ├── src/
    │   ├── components/       # Reusable UI components
    │   ├── pages/            # Page components
    │   ├── App.jsx           # Main application
    │   ├── main.jsx          # Entry point
    │   └── index.css         # Global styles
    ├── index.html
    └── package.json
```

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/books` | Retrieve all books |
| GET | `/books/:id` | Get a specific book |
| POST | `/books` | Create a new book |
| PUT | `/books/:id` | Update a book |
| DELETE | `/books/:id` | Delete a book |

## Key Learning Points

This project covers essential full-stack concepts:
- Building RESTful APIs with Express
- MongoDB database design and Mongoose ODM
- React hooks and state management
- Client-side routing with React Router
- HTTP requests with Axios
- CORS configuration for API security
- Responsive UI design with Tailwind CSS

## Database Configuration

The MongoDB connection is configured in `backend/config.js`:

```javascript
export const PORT = 5555;
export const mongoDBURL = 'mongodb://127.0.0.1:27017/book_store';
```

Modify these values if you need different port or database settings.

## Future Enhancements

This project serves as a foundation for **MetroReads** - a multi-city digital library platform that will modernize library operations across India. The vision includes:

- Multi-city library network with centralized management
- Role-based access for Admins, Librarians, and Members
- Automated book lifecycle: Request → Approve → Issue → Return
- Time-bound QR codes for secure book pickup
- Real-time book tracking and overdue management
- Background automation for system maintenance
- Scalable architecture with Prisma ORM and PostgreSQL

The goal is to make books accessible to everyone while simplifying library management for staff.

---

Built as a learning project to understand full-stack development with the MERN stack.

---
<div align="center">
  <h3>Thank you for visiting our repository!</h3>
</div>
