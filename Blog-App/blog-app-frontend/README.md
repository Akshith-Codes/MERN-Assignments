# Blog App — Frontend

A full-stack blog platform frontend built with React, Vite, and Tailwind CSS. Supports three user roles: **User**, **Author**, and **Admin**, each with their own protected dashboard.

## Tech Stack

- **React 19** — UI library
- **Vite** — build tool
- **Tailwind CSS v4** — styling
- **React Router v7** — client-side routing
- **Zustand** — global auth state management
- **Axios** — HTTP requests with cookie credentials
- **React Hook Form** — form handling and validation
- **React Hot Toast** — notifications

## Features

- Role-based protected routes (User / Author / Admin)
- JWT authentication via HTTP-only cookies
- Author dashboard — write, edit, delete/restore articles
- User dashboard — read articles and add comments
- Cloudinary image upload for profile pictures (handled by backend)
- Fully responsive dark gold theme

## Project Structure

```
src/
├── components/
│   ├── Home.jsx              # Public article listing
│   ├── Login.jsx             # Login form
│   ├── Register.jsx          # Registration with image upload
│   ├── ArticleById.jsx       # Single article view with comments
│   ├── AuthorProfile.jsx     # Author dashboard layout
│   ├── AuthorArticles.jsx    # Author's article list
│   ├── WriteArticles.jsx     # Create new article
│   ├── EditArticle.jsx       # Edit existing article
│   ├── UserProfile.jsx       # User dashboard
│   ├── AdminProfile.jsx      # Admin dashboard
│   ├── ProtectedRoute.jsx    # Role-based route guard
│   ├── Unauthorized.jsx      # 401 page
│   ├── RootComponent.jsx     # Root layout with header/footer
│   ├── Header.jsx
│   └── Footer.jsx
├── stores/
│   └── authStore.js          # Zustand auth store (login/logout)
├── styles/
│   └── common.js             # Shared Tailwind class strings
├── App.jsx                   # Router configuration
└── main.jsx
```

## Routes

| Path | Component | Access |
|------|-----------|--------|
| `/` | Home | Public |
| `/register` | Register | Public |
| `/login` | Login | Public |
| `/article/:id` | ArticleById | Public |
| `/user-profile` | UserProfile | USER only |
| `/author-profile` | AuthorProfile | AUTHOR only |
| `/author-profile/write-article` | WriteArticles | AUTHOR only |
| `/edit-article` | EditArticle | AUTHOR only |
| `/unauthorized` | Unauthorized | Public |

## Getting Started

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build
```

## Environment Variables

Create a `.env` file in the root of `blog-app-frontend`:

```env
VITE_API_URL=https://your-backend-url.onrender.com
```

## Deployment

Deployed on **Vercel** with the following settings:

- **Root Directory:** `blog-app-frontend`
- **Build Command:** `npm run build`
- **Output Directory:** `dist`
- **Environment Variable:** `VITE_API_URL` set to backend URL

## Backend

See [blog-app-backend](../blog-app-backend) for the Express + MongoDB API.
