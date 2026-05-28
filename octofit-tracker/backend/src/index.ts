import express from 'express'
import mongoose from 'mongoose'

const app = express()
const PORT = 8000
const MONGODB_URI = 'mongodb://localhost:27017/octofit-tracker'

// Middleware
app.use(express.json())

// MongoDB Connection
mongoose.connect(MONGODB_URI)
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.error('MongoDB connection error:', err))

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'Backend is running', timestamp: new Date() })
})

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`)
})
