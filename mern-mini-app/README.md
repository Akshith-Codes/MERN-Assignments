# Employee Manager — MERN Stack App

A full-stack Employee Management application built with the MERN stack. Users can create, view, edit, and delete employee records through a clean, responsive UI.

---

##  Live Demo

| Service | URL |
|---|---|
| Frontend (Vercel) | https://mern-mini-app-livid.vercel.app |
| Backend API (Render) | https://mern-mini-app-gozp.onrender.com |

---

##  Tech Stack

### Frontend
| Tool | Purpose |
|---|---|
| React 19 | UI framework |
| Vite | Build tool & dev server |
| Tailwind CSS 4 | Styling |
| React Router 7 | Client-side routing |
| React Hook Form | Form handling & validation |
| Axios | HTTP requests |
| Zustand | Global state management |

### Backend
| Tool | Purpose |
|---|---|
| Node.js | Runtime |
| Express 5 | Web framework |
| Mongoose 9 | MongoDB ODM |
| MongoDB Atlas | Cloud database |
| dotenv | Environment variables |
| cors | Cross-origin resource sharing |

---

##  Project Structure

```
mern-mini-app/
├── backend3/                   # Express REST API
│   ├── APIs/
│   │   └── EmployeeAPI.js      # CRUD route handlers
│   ├── models/
│   │   └── EmployeeModel.js    # Mongoose schema
│   ├── stores/
│   │   └── authStore.js        # Auth store
│   ├── .env                    # Backend env vars (not committed)
│   ├── .gitignore
│   ├── package.json
│   └── server.js               # Entry point
│
└── frontend3/                  # React + Vite app
    ├── public/
    ├── src/
    │   ├── assets/
    │   ├── components/
    │   │   ├── Header.jsx
    │   │   ├── RootLayout.jsx
    │   │   ├── Home.jsx
    │   │   ├── ListOfEmps.jsx
    │   │   ├── Employee.jsx
    │   │   ├── CreateEmp.jsx
    │   │   └── EditEmployee.jsx
    │   ├── store/
    │   │   └── CounterStore.js
    │   ├── App.jsx
    │   ├── main.jsx
    │   └── index.css
    ├── .env                    # Frontend env vars (not committed)
    ├── vite.config.js
    └── package.json
```

---

##  Environment Variables

### Backend — `backend3/.env`
```env
PORT=1000
MONGO_URI=your_mongodb_atlas_connection_string
FRONTEND_URL=https://your-vercel-app.vercel.app
```

### Frontend — `frontend3/.env`
```env
VITE_API_URL=https://your-render-backend.onrender.com/employee-api
```

>  Never commit `.env` files to GitHub.

---

##  Getting Started Locally

### Prerequisites
- Node.js 18+
- A MongoDB Atlas account

### 1. Clone the repo

```bash
git clone https://github.com/your-username/mern-mini-app.git
cd mern-mini-app
```

### 2. Start the backend

```bash
cd backend3
npm install
# create .env with your MONGO_URI and PORT
npm run dev
```

API runs at `http://localhost:1000`

### 3. Start the frontend

```bash
cd frontend3
npm install
# create .env with VITE_API_URL=http://localhost:1000/employee-api
npm run dev
```

App runs at `http://localhost:5173`

---

##  API Reference

Base URL: `/employee-api`

| Method | Endpoint | Description |
|---|---|---|
| `GET` | `/employees` | Get all employees |
| `POST` | `/employees` | Create a new employee |
| `PUT` | `/employees/:email` | Update employee by email |
| `DELETE` | `/employees/:email` | Delete employee by email |

---

##  Employee Schema

| Field | Type | Required | Constraints |
|---|---|---|---|
| `name` | String | Yes | Trimmed |
| `email` | String | Yes | Unique, lowercase, valid email format |
| `mobile` | String | Yes | Unique, exactly 10 digits |
| `designation` | String | Yes | Trimmed |
| `companyName` | String | Yes | Trimmed |

---

##  Deployment

### Backend → Render

1. Push `backend3/` to GitHub
2. Create a **Web Service** on [render.com](https://render.com)
3. Set **Root Directory** → `backend3`, **Start Command** → `npm start`
4. Add environment variables in Render dashboard:

| Key | Value |
|---|---|
| `PORT` | `1000` |
| `MONGO_URI` | Your full Atlas connection string |
| `FRONTEND_URL` | Your Vercel frontend URL (no trailing slash) |

5. In **MongoDB Atlas → Network Access** → allow `0.0.0.0/0`

### Frontend → Vercel

1. Push `frontend3/` to GitHub
2. Create a **New Project** on [vercel.com](https://vercel.com)
3. Set **Root Directory** → `frontend3`
4. Add environment variable:

| Key | Value |
|---|---|
| `VITE_API_URL` | `https://your-render-backend.onrender.com/employee-api` |

5. Deploy — after any env variable change, **redeploy without cache**

---

##  Frontend Routes

| Route | Component | Description |
|---|---|---|
| `/` | `Home` | Landing page |
| `/employees` | `ListOfEmps` | View all employees |
| `/create` | `CreateEmp` | Add a new employee |
| `/edit/:email` | `EditEmployee` | Edit an existing employee |

---
