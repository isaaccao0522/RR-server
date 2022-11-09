import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';

//Routes
import seedRouter from './routes/seedRoutes.js';
import productRouter from './routes/productRoutes.js';
import userRouter from './routes/userRoutes.js';
import orderRouter from './routes/orderRoutes.js';


dotenv.config ();

mongoose
  .connect ( process.env.MONGO_DB_URL || process.env.DATABASE_URL)
  .then ( () => {
    console.log ( 'Connected to MongoDB.');
  })
  .catch ( ( error) => {
    console.log ( error.message);
  });

const app = express ();

app.use ( cors ());
app.use ( express.json ());
app.use ( express.urlencoded ({ extended: true }));

  
app.use ( '/api/seed', seedRouter);
app.use ( '/api/products', productRouter);
app.use ( '/api/users', userRouter);
app.use ( '/api/orders', orderRouter);

app.get ( "/", ( req, res) => {
  res.send ( 'App is running.')
});


app.use ( ( err, req, res, next) => {
  res.status ( 500).send ({ message: err.message });
});

//PayPal
app.get('/api/keys/paypal', ( req, res) => {
  res.send ( process.env.PAYPAL_CLIENT_ID || 'sb');
});
  

const port = process.env.PORT
app.listen ( port, () => {
  console.log (`serve at http://localhost:${ port}`);
});