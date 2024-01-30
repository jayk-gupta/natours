const express = require('express');
const app = express();

const tourRouter = require('./routes/tourRoutes');
const userRouter = require('./routes/userRoutes');
const morgan = require('morgan');
app.use(express.json());
if(process.env.NODE_ENV === 'development'){
  app.use(morgan('dev'))
}

app.use('/api/v1/tours', tourRouter);
app.use('/api/v1/users', userRouter);
app.use(express.static(`${__dirname}/public`))
module.exports = app;

/*
  1. app.get('/api/v1/tours/:id/:a/:b', (req, res) => {
  We get all the variables from the query params in a object
   { id: '5', a: 'as', b: 'you' }
   2. For optional parameter put a ques mark: :id/:x?
   */

//////////////////////////
// routes
// get all tours
// app.get('/api/v1/tours', getAllTours);
// get a particular tour
// Add new tour
// app.post('/api/v1/tours',createTour );
// app.get('/api/v1/tours/:id',getTour);
// patch: only update what is changed
// app.patch('/api/v1/tours/:id', );
// delete
// app.delete('/api/v1/tours/:id',deleteTour );
