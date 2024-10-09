const express = require('express');
const mysql = require('mysql2');
const path = require('path');

const app = express();

// Set port to 80 (or environment variable PORT if defined)
const port = process.env.PORT || 80;

// Serve static files from the 'public' directory
app.use(express.static('public'));

// Create a MySQL connection
const connection = mysql.createConnection({
  host: 'manhwa.czy24ysw6u5b.us-east-1.rds.amazonaws.com', // host endpoint name
  user: 'admin',         // user name
  password: 'password123455', // Password    
  database: 'manhwa'       // database name  
});

// Connect to MySQL
connection.connect(err => {
  if (err) {
    console.error('Error connecting to the database:', err);
    return;
  }
  console.log('Connected to MySQL database');
});

// API endpoint to get the list of manhwa
app.get('/api/manhwa', (req, res) => {
  const query = 'SELECT * FROM manhwa_list';
  connection.query(query, (err, results) => {
    if (err) {
      console.error('Error fetching data:', err);
      res.status(500).send('Error fetching data from database');
      return;
    }
    res.json(results);
  });
});

// Serve the homepage
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Start the server
app.listen(port, () => {
  console.log(`App is running on http://localhost:${port}`);
});
