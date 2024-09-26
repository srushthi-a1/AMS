const express = require('express');
const mongoose = require('mongoose');
const app = express();

// Middleware
app.use(express.json()); // For parsing JSON

// MongoDB Connection
const mongoURI = '<YOUR_MONGO_URI>'; // Replace with your actual MongoDB URI
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

// Simple route
app.get('/', (req, res) => {
  res.send('Backend is running');
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
