const express = require('express');
const cors = require('cors');
require('dotenv').config();
const { broadcastText } = require('./controllers/text');
const { createUser } = require('./controllers/user');
const { cronJob } = require('./schedule/cronJob');

const connectDB = require('./config/db');
connectDB();

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post('/text', broadcastText);
app.post('/user', createUser);

const { PORT } = process.env;

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}...`);
  cronJob();
});
