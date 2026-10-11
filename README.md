# LeaveCode Modern Platform Architecture

High-performance, enterprise monorepo for the modernized LeaveCode website and digital services platform.

## Architecture Overview

```
d:\SAAS/
├── apps/
│   ├── frontend/         # Next.js 14 (App Router, Tailwind CSS, Lucide Icons, Framer Motion)
│   └── backend/          # Node.js + Express (Helmet, CORS, Mongoose, Zod Error Handling)
├── packages/
│   └── shared/           # Cross-cutting TypeScript definitions & Zod validation schemas
├── package.json          # Root npm workspaces orchestrator
├── tsconfig.base.json    # Shared TypeScript compiler config
└── .env.example          # Environment configuration blueprint
```

### Port Allocation & Deployment Topology
- **Frontend App:** `http://localhost:3000` (Next.js SSR/SSG server)
- **Backend API:** `http://localhost:5000` (Express REST server)
- **API Base URL:** `http://localhost:5000/api/v1`
- **CORS Rules:** Strictly whitelists `http://localhost:3000` in development. Production domain `https://leavecode.com` is configured via `CORS_ORIGINS` environment variable.
- **Data Protection:** Zero database credentials or server keys are accessible to the client bundle. All data writes go through the backend validation pipeline using `@leavecode/shared` Zod contracts.

---

## Quick Start

### 1. Prerequisites
- Node.js `v20.x` or `v22.x+` (Tested on Node v24)
- npm `v10.x+`
- Local MongoDB instance or MongoDB Atlas connection string

### 2. Installation
Install all monorepo dependencies across apps and packages:
```bash
npm install
```

### 3. Environment Variables
Copy `.env.example` to respective environment files:
- Backend: `apps/backend/.env`
- Frontend: `apps/frontend/.env.local`

Configure `MONGODB_URI` with your connection string:
```env
MONGODB_URI=mongodb+srv://<user>:<password>@cluster0.xyz.mongodb.net/leavecode?retryWrites=true&w=majority
```
*(Note: If MongoDB is unavailable during local dev, the backend runs in a resilient fallback mode with health check warnings rather than crashing).*

### 4. Build Shared Package & Monorepo
```bash
npm run build:shared
npm run build
```

### 5. Running the Application
- **Run both frontend and backend concurrently:**
  ```bash
  npm run dev
  ```
- **Run frontend only:**
  ```bash
  npm run dev:frontend
  ```
- **Run backend only:**
  ```bash
  npm run dev:backend
  ```

### 6. Health Check Endpoint
To verify backend and database connection status:
```bash
curl http://localhost:5000/api/v1/health
```
Response format:
```json
{
  "status": "ok",
  "timestamp": "2026-10-11T07:50:00.000Z",
  "uptime": 12.34,
  "service": "LeaveCode API Server",
  "environment": "development",
  "database": "connected"
}
```

### 7. Testing & Linting
Run all automated test suites and linting checks:
```bash
npm test
npm run lint
```
