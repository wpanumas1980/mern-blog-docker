require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');

const app = express();

mongoose
  .connect(process.env.CONNECTION_URL, { 
    useNewUrlParser: true, 
    useUnifiedTopology: true, 
    useCreateIndex: true })
  .then(() => app.listen(process.env.PORT, () => console.log(`Server running on port: ${process.env.PORT}`)))
  .catch((error) => console.log(error.message));
