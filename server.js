// Import necessary modules
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 9000; // Use environment variable for PORT

// MongoDB connection string
const mongoURI = "mongodb+srv://sterinjacob2003:T4KSCygxsv32dVQc@cluster0.dekdm.mongodb.net/Healthandwellness";

// Connect to MongoDB
mongoose.connect(mongoURI, { 
  useNewUrlParser: true, 
  useUnifiedTopology: true 
})
  .then(() => {
    console.log("MongoDB connected successfully.");
  })
  .catch(err => {
    console.error("MongoDB connection error:", err);
  });

// Sample API endpoint
app.get('/api/data', (req, res) => {
  res.json({ message: 'Hello from the backend!' });
});

// Your other middleware and routes can be added here

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
