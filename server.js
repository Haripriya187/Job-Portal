const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const authRoutes = require('./backend/routes/authRoutes');  // Import authRoutes
const jobRoutes = require('./backend/routes/jobRoutes'); // Import your job routes


const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use('/api/auth', authRoutes);  // Make sure the correct path is used
app.use('/api/jobs', jobRoutes);  // Jobs routes





// MongoDB connection
mongoose.connect('mongodb://localhost:27017/job-portal', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((err) => {
    console.error('MongoDB connection error:', err);
  });

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

