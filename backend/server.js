const express = require('express');const cors = require('cors');const mongoose = require('mongoose');require('dotenv').config();const app = express();const port = process.env.PORT || 5000;app.use(cors());app.use(express.json())const uri = process.env.ATLAS_URI;mongoose.connect(uri, {useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true});mongoose.connection.once('open', () => {    console.log(`MongoDB connected successfully`)});const facultyRouter = require('./routes/faculty');const directionRouter = require('./routes/direction');const newsRouter = require('./routes/news');const personalCard = require('./routes/personalCard');const forApplicant = require('./routes/forApplicant');app.use('/faculty', facultyRouter);app.use('/direction', directionRouter);app.use('/news', newsRouter);app.use('/card', personalCard);app.use('/forApplicants', forApplicant);app.listen(port, () => {    console.log(`Server listening on port ${port}`)});