const express = require('express');

const cors = require('cors');

const helmet = require('helmet');

const dotenv = require('dotenv');

dotenv.config();

const app = express();

// Middleware
app.use(helmet());
app.use(cors());
app.use(express.json());

// Sample route
app.get('/', (req, res) => {
  res.send('App is running');
});

app.get('/test', (req, res) => {
  res.json({ message: 'Test route is working' });
});

module.exports = app;