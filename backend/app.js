const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv').config()


const userRoutes = require('./routes/user');
const hostelRoutes = require('./routes/hostel');

const app = express();

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });

mongoose.connect(`mongodb+srv://Cris:${process.env.DATABASE_ACCESS}@cluster1.dabfe.mongodb.net/ReserviaV2?retryWrites=true&w=majority`,
{ useNewUrlParser: true,
  useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussi !'))
  .catch((error) => console.log(error));

app.use(express.json());

app.use('/api/auth', userRoutes);
app.use('/api/', hostelRoutes);

module.exports = app;