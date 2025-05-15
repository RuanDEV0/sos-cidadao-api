import dotenv from 'dotenv';
dotenv.config();

import app from './app.js';
import connectToDatabase from './config/database.js';

const PORT = process.env.PORT;

connectToDatabase().then( () => {
  app.listen(PORT, () => {
    console.log(`Server running at "http://localhost:${PORT}"`);
  });
});