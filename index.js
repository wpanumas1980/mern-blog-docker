require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const authRoute = require('./routes/auth');
const userRoute = require('./routes/users');
const app = express();

app.use(express.json());

app.use("/api/auth",authRoute);
app.use("/api/users",userRoute);

mongoose
  .connect(process.env.CONNECTION_URL, { 
    useNewUrlParser: true, 
    useUnifiedTopology: true, 
    useCreateIndex: true })
  .then(() => app.listen(process.env.PORT, () => console.log(`Server running on port: ${process.env.PORT}`)))
  .catch((error) => console.log(error.message));