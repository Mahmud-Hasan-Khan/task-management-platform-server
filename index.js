const express = require('express');
const cors = require('cors');
const app = express();
require('dotenv').config();
const port = process.env.PORT || 5000;

app.use(cors());

app.get('/', (req, res) => {
    res.send("Task Manager Server is running")
})

app.listen(port, () => {
    console.log(`Task Manager Server is running on port ${port}`);
})