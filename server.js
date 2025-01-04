const app = require('./app');
const connectDB = require('./config/db');

// Connect to MongoDB
connectDB();

// Start the server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});