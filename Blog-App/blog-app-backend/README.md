# Blog App — Backend API

A RESTful backend for a blog application built with Node.js, Express, and MongoDB.

## Tech Stack

- **Runtime**: Node.js
- **Framework**: Express.js
- **Database**: MongoDB + Mongoose
- **Auth**: JWT + bcryptjs
- **Other**: dotenv, cookie-parser, cors

## Getting Started

**1. Install dependencies**

```bash
npm install
```

**2. Configure environment**

Create a `.env` file in the root directory:

```env
PORT=5000
NODE_ENV=development
MONGO_URI=mongodb://localhost:27017/blog_app
JWT_SECRET=your_super_secret_key
JWT_EXPIRES_IN=7d
```

**3. Run the server**

```bash
# Development
npm run dev

# Production
npm start
```

## Project Structure

```
├── server.js
├── db/
│   └── connect.js
├── models/
│   ├── User.js
│   └── Article.js
├── routes/
│   ├── auth.routes.js
│   ├── user.routes.js
│   └── article.routes.js
├── controllers/
├── middleware/
│   └── verifyToken.js
└── .env
```

## Data Models

**User**

| Field | Type | Notes |
|-------|------|-------|
| firstName | String | required |
| lastName | String | required |
| email | String | required, unique |
| password | String | hashed with bcryptjs |
| role | String | `user` \| `admin` |
| profileImageUrl | String | optional |
| isUserActive | Boolean | default: `true` |

**Article**

| Field | Type | Notes |
|-------|------|-------|
| author | ObjectId | ref: User |
| title | String | required |
| category | String | required |
| content | String | required |
| comments | Array | ref: Comment |
| isArticleActive | Boolean | default: `true` |

## API Reference

**Auth** `/api/auth`

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/register` | Register a new user |
| POST | `/login` | Login and receive JWT cookie |
| POST | `/logout` | Clear auth cookie |

**Users** `/api/users` 

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/profile` | Get own profile |
| PUT | `/profile` | Update own profile |
| GET | `/` | List all users *(admin only)* |
| DELETE | `/:id` | Deactivate a user *(admin only)* |

**Articles** `/api/articles`

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/` | List all active articles |
| GET | `/:id` | Get a single article |
| POST | `/` | Create article  |
| PUT | `/:id` | Update article  *(author only)* |
| DELETE | `/:id` | Deactivate article  *(author/admin)* |

>  Requires a valid JWT (sent as an HTTP-only cookie)
