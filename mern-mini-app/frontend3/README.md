# Employee Manager — Frontend

A React-based frontend for the Employee Manager application. Built with Vite, Tailwind CSS, and React Router, allowing users to create, view, edit, and delete employees via a clean UI.

---

##  Live Demo

> [https://mern-mini-app-livid.vercel.app](https://mern-mini-app-livid.vercel.app)

---

##  Tech Stack

| Tool | Purpose |
|---|---|
| [React 19](https://react.dev/) | UI framework |
| [Vite](https://vitejs.dev/) | Build tool & dev server |
| [Tailwind CSS 4](https://tailwindcss.com/) | Styling |
| [React Router 7](https://reactrouter.com/) | Client-side routing |
| [React Hook Form](https://react-hook-form.com/) | Form handling & validation |
| [Axios](https://axios-http.com/) | HTTP requests |
| [Zustand](https://zustand-demo.pmnd.rs/) | Global state management |

---

##  Project Structure

```
frontend3/
├── public/
│   └── favicon.svg
├── src/
│   ├── assets/
│   │   └── hero.png
│   ├── components/
│   │   ├── Header.jsx        # Navigation bar
│   │   ├── RootLayout.jsx    # Layout wrapper with Header
│   │   ├── Home.jsx          # Landing page
│   │   ├── ListOfEmps.jsx    # View all employees
│   │   ├── Employee.jsx      # Single employee card
│   │   ├── CreateEmp.jsx     # Add new employee form
│   │   └── EditEmployee.jsx  # Edit existing employee form
│   ├── store/
│   │   └── CounterStore.js   # Zustand store
│   ├── App.jsx               # Routes definition
│   ├── main.jsx              # Entry point
│   └── index.css             # Global styles
├── .env                      # Environment variables
├── vite.config.js
└── package.json
```

---

##  Environment Variables

Create a `.env` file in the root of `frontend3/`:

```env
VITE_API_URL=https://your-render-backend-url.onrender.com/employee-api
```

>  All Vite env variables **must** start with `VITE_` to be accessible in the browser.

---

##  Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn
- Backend API running (see [backend README](#))

### Installation

```bash
# Clone the repo
git clone https://github.com/your-username/mern-mini-app.git

# Navigate to frontend
cd mern-mini-app/frontend3

# Install dependencies
npm install

# Start development server
npm run dev
```

The app will run at `http://localhost:5173`

---

##  Available Scripts

```bash
npm run dev        # Start dev server
npm run build      # Build for production
npm run preview    # Preview production build locally
npm run lint       # Run ESLint
```

---

##  Deployment (Vercel)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com) → **New Project** → Import your repo
3. Set **Root Directory** to `frontend3`
4. Add environment variable:
   - `VITE_API_URL` = `https://your-render-backend.onrender.com/employee-api`
5. Click **Deploy**

> After changing any env variable on Vercel, always **redeploy without cache** for changes to take effect.

---

##  Pages & Routes

| Route | Component | Description |
|---|---|---|
| `/` | `Home` | Landing page |
| `/employees` | `ListOfEmps` | List all employees |
| `/create` | `CreateEmp` | Create a new employee |
| `/edit/:id` | `EditEmployee` | Edit an employee |

---
