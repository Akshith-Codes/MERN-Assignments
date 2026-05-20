# Blog App

A full-stack blog platform with role-based access control. Authors can write and manage articles, users can read and comment, and admins can manage the platform.

**Live Demo:** [blog-app1-nine.vercel.app](https://blog-app1-nine.vercel.app)

---

## Tech Stack

### Frontend
- React 19 + Vite
- Tailwind CSS v4
- React Router v7
- Zustand (auth state)
- Axios
- React Hook Form
- React Hot Toast

### Backend
- Node.js + Express 5
- MongoDB + Mongoose
- JWT (HTTP-only cookies)
- Bcryptjs (password hashing)
- Cloudinary (image uploads)
- Multer (file handling)
- CORS + Cookie Parser

---

## Features

- **Three roles** — User, Author, Admin with protected routes
- **JWT auth** via HTTP-only cookies (`SameSite=None; Secure` for cross-origin)
- **Authors** — write, edit, soft-delete/restore articles
- **Users** — browse articles, add comments
- **Cloudinary** — profile image uploads
- **Dark gold UI** — custom theme throughout

---

## Project Structure

```
blog-app/
├── blog-app-frontend/        # React + Vite
│   ├── src/
│   │   ├── components/       # All page components
│   │   ├── stores/           # Zustand auth store
│   │   ├── styles/           # Shared Tailwind classes
│   │   ├── App.jsx           # Router config
│   │   └── main.jsx
│   ├── vercel.json
│   └── package.json
│
└── blog-app-backend/         # Express API
    ├── APIs/
    │   ├── CommonAPI.js      # Auth routes (register, login, logout)
    │   ├── UserAPI.js        # Article browsing + comments
    │   ├── AuthorAPI.js      # Article CRUD for authors
    │   └── AdminAPI.js       # Admin controls
    ├── config/
    │   ├── cloudinary.js
    │   ├── cloudinaryUpload.js
    │   └── multer.js
    ├── middlewares/
    │   └── VerifyToken.js    # JWT middleware with role check
    ├── models/
    │   ├── UserModel.js
    │   └── ArticleModel.js
    └── server.js
```

---

## API Routes

### Auth (`/auth`)
| Method | Route | Description |
|--------|-------|-------------|
| POST | `/auth/users` | Register |
| POST | `/auth/login` | Login (sets cookie) |
| GET | `/auth/logout` | Logout (clears cookie) |
| GET | `/auth/check-auth` | Verify session |
| PUT | `/auth/password` | Change password |

### User (`/user-api`)
| Method | Route | Description |
|--------|-------|-------------|
| GET | `/user-api/articles` | Get all active articles |
| GET | `/user-api/article/:id` | Get single article |
| PUT | `/user-api/articles` | Add comment |

### Author (`/author-api`)
| Method | Route | Description |
|--------|-------|-------------|
| GET | `/author-api/articles` | Get author's articles |
| POST | `/author-api/article` | Create article |
| PUT | `/author-api/articles` | Edit article |
| PATCH | `/author-api/articles` | Toggle article status |

---

## Getting Started

### Prerequisites
- Node.js 18+
- MongoDB Atlas account
- Cloudinary account

### Backend Setup

```bash
cd blog-app-backend
npm install
```

Create a `.env` file:
```env
DB_URL=mongodb+srv://<user>:<password>@cluster.mongodb.net/<dbname>
SECRET_KEY=your_jwt_secret
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
PORT=4000
```

```bash
npm start
```

### Frontend Setup

```bash
cd blog-app-frontend
npm install
```

Create a `.env` file:
```env
VITE_API_URL=http://localhost:4000
```

```bash
npm run dev
```

---

## Deployment

### Backend → Render
1. Connect GitHub repo to Render
2. Set **Root Directory** to `blog-app-backend`
3. Set **Start Command** to `npm start`
4. Add all `.env` variables in Render's Environment tab
5. Set `NODE_ENV=production`

### Frontend → Vercel
1. Connect GitHub repo to Vercel
2. Set **Root Directory** to `blog-app-frontend`
3. Add environment variable: `VITE_API_URL=https://your-backend.onrender.com`
4. Deploy

> **Important:** For cross-origin cookies to work, the backend must set cookies with `SameSite=None; Secure`. Make sure `NODE_ENV=production` is set on Render, or hardcode `secure: true, sameSite: 'none'` in your cookie options.

---

## Environment Variables Summary

| Variable | Where | Description |
|----------|-------|-------------|
| `DB_URL` | Backend | MongoDB connection string |
| `SECRET_KEY` | Backend | JWT signing secret |
| `CLOUDINARY_CLOUD_NAME` | Backend | Cloudinary cloud name |
| `CLOUDINARY_API_KEY` | Backend | Cloudinary API key |
| `CLOUDINARY_API_SECRET` | Backend | Cloudinary API secret |
| `PORT` | Backend | Server port (default 4000) |
| `NODE_ENV` | Backend (Render) | Set to `production` |
| `VITE_API_URL` | Frontend | Backend base URL |

---

## Author

Built by **Akshith Nair**
