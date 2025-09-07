# 1nr Racing Team — Full‑stack (Inspired)

> ⚠️ This starter is **inspired-by** the Williams F1 site’s UX patterns, **not** a 1:1 clone.
> No third‑party assets or trademarks are included.

## Quick start

### 1) Backend
```bash
cd backend
npm install
npm run dev
# API at http://localhost:4000
```

### 2) Frontend
```bash
cd ../frontend
npm install
# set API URL (optional); defaults to http://localhost:4000
echo VITE_API_URL=http://localhost:4000 > .env
npm run dev
# Frontend at http://localhost:5173
```

### Demo accounts
- Register a new account on `/login` (Sign Up tab).

## What’s inside
- **Frontend:** Vite + React + TypeScript + React Router + Axios
- **Backend:** Express + TypeScript + lowdb (JSON file) + JWT + bcrypt
