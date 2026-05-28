# OctoFit Tracker

A modern multi-tier fitness tracking application built with React 19, Node.js/Express, TypeScript, and MongoDB.

## Architecture

### Frontend
- **Framework**: React 19
- **Build Tool**: Vite
- **Port**: 5173
- **Location**: `octofit-tracker/frontend`

### Backend
- **Runtime**: Node.js
- **Framework**: Express
- **Language**: TypeScript
- **Database Driver**: Mongoose
- **Port**: 8000
- **Location**: `octofit-tracker/backend`

### Database
- **Type**: MongoDB
- **Port**: 27017
- **Default Database**: octofit-tracker

## Getting Started

### Prerequisites
- Node.js (v18+)
- MongoDB running locally on port 27017

### Installation

1. **Frontend Setup**
```bash
cd octofit-tracker/frontend
npm install
npm run dev
```
Frontend will be available at: `http://localhost:5173`

2. **Backend Setup**
```bash
cd octofit-tracker/backend
npm install
npm run dev
```
Backend will be available at: `http://localhost:8000`

3. **MongoDB**
Ensure MongoDB is running on `localhost:27017`

## Scripts

### Frontend
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

### Backend
- `npm run dev` - Start development server with ts-node
- `npm run build` - Compile TypeScript to JavaScript
- `npm run start` - Run compiled JavaScript
- `npm run typecheck` - Check TypeScript types

## Port Configuration
- Frontend (Vite): 5173
- Backend (Express): 8000
- MongoDB: 27017
