# Employee Manager — Backend

A REST API built with Node.js, Express, and MongoDB Atlas for managing employee records. Deployed on Render.

---

##  Live API

> https://mern-mini-app-gozp.onrender.com

Health check: `GET /` → `{ "message": "Employee API is running" }`

---

##  Tech Stack

| Tool | Purpose |
|---|---|
| [Node.js](https://nodejs.org/) | Runtime |
| [Express 5](https://expressjs.com/) | Web framework |
| [Mongoose 9](https://mongoosejs.com/) | MongoDB ODM |
| [MongoDB Atlas](https://www.mongodb.com/atlas) | Cloud database |
| [dotenv](https://github.com/motdotla/dotenv) | Environment variables |
| [cors](https://github.com/expressjs/cors) | Cross-origin resource sharing |

---

##  Project Structure

```
backend3/
├── APIs/
│   ├── EmployeeAPI.js    # Route handlers (CRUD)
│   └── empreq.http       # HTTP request samples
├── models/
│   └── EmployeeModel.js  # Mongoose schema & model
├── stores/
│   └── authStore.js      # Auth store (Zustand)
├── .env                  # Environment variables (not committed)
├── .gitignore
├── package.json
└── server.js             # App entry point
```

---

##  Environment Variables

Create a `.env` file in the root of `backend3/`:

```env
PORT=1000
MONGO_URI=mongodb://akshith:akshith@ac-9fryhqk-shard-00-00.8ioplxs.mongodb.net:27017,.../backend3db?ssl=true&replicaSet=atlas-ca1abf-shard-0&authSource=admin&appName=Cluster0
FRONTEND_URL=https://your-vercel-app.vercel.app
```

>  Never commit `.env` to GitHub. It is listed in `.gitignore`.

---

##  Getting Started

### Prerequisites

- Node.js 18+
- A MongoDB Atlas cluster with network access enabled

### Installation

```bash
# Clone the repo
git clone https://github.com/your-username/mern-mini-app.git

# Navigate to backend
cd mern-mini-app/backend3

# Install dependencies
npm install

# Start development server
npm run dev
```

The API will run at `http://localhost:1000`

---

##  Available Scripts

```bash
npm start      # Start production server
npm run dev    # Start with --watch (auto-restart on file changes)
```

---

## 📡 API Endpoints

Base URL: `/employee-api`

| Method | Endpoint | Description |
|---|---|---|
| `GET` | `/employees` | Get all employees |
| `POST` | `/employees` | Create a new employee |
| `PUT` | `/employees/:email` | Update employee by email |
| `DELETE` | `/employees/:email` | Delete employee by email |

---

### Request & Response Examples

#### `POST /employee-api/employees`

**Request body:**
```json
{
  "name": "Akshith Nair",
  "email": "akshithnair47@gmail.com",
  "mobile": "8977914018",
  "designation": "CEO",
  "companyName": "JPMC"
}
```

**Response `201`:**
```json
{
  "message": "Employee created successfully",
  "payload": {
    "_id": "...",
    "name": "Akshith Nair",
    "email": "akshithnair47@gmail.com",
    "mobile": "8977914018",
    "designation": "CEO",
    "companyName": "JPMC",
    "createdAt": "...",
    "updatedAt": "..."
  }
}
```

#### `GET /employee-api/employees`

**Response `200`:**
```json
{
  "message": "Employees fetched successfully",
  "payload": [ { ... }, { ... } ]
}
```

---

##  Employee Schema

| Field | Type | Required | Constraints |
|---|---|---|---|
| `name` | String | Yes | Trimmed |
| `email` | String | Yes | Unique, lowercase, valid format |
| `mobile` | String | Yes | Unique, exactly 10 digits |
| `designation` | String | Yes | Trimmed |
| `companyName` | String | Yes Trimmed |

Timestamps (`createdAt`, `updatedAt`) are added automatically.

---

##  Deployment (Render)

1. Push `backend3/` to a GitHub repo
2. Go to [render.com](https://render.com) → **New Web Service** → Connect repo
3. Set **Root Directory** to `backend3`
4. Set **Start Command** to `npm start`
5. Add these environment variables in Render dashboard:

| Key | Value |
|---|---|
| `PORT` | `1000` |
| `MONGO_URI` | your full Atlas connection string |
| `FRONTEND_URL` | your Vercel frontend URL |

6. In **MongoDB Atlas → Network Access** → Add `0.0.0.0/0` to allow Render's dynamic IPs



