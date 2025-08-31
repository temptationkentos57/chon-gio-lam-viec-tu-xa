const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
const PORT = 3000;

// Middleware to parse incoming request bodies in JSON format
app.use(bodyParser.json());
// Middleware to parse URL-encoded bodies
app.use(bodyParser.urlencoded({ extended: true }));

// MongoDB connection with error handling
mongoose.connect('mongodb://localhost:27017/chon-gio-lam-viec-tu-xa', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => {
    console.log('MongoDB connection error:', err);
    process.exit(1); // Exit process with failure
  });

// API routes
app.get('/', (req, res) => {
  res.send('Chào mừng đến với ứng dụng Chọn Giờ Làm Việc Từ Xa!');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});