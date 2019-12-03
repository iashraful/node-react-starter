import express from 'express';
import mongoose from 'mongoose';
import { json } from 'body-parser';

const app = express();

// Import Models
import './models/Product'

mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI || `mongodb://localhost:27017/node_react_starter`);

app.use(json());

// Import Routes
import productRoute from './routes/productRoute'
productRoute(app)

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));

  const path = require('path');
  app.get('*', (req,res) => {
      res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  })
}

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`app running on port ${PORT}`)
});