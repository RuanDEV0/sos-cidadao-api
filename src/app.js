import express from 'express';
import routes from './interfaces/routes/routes.js';

const app = express();

app.use(express.json());

app.use('/sos-cidadao', routes);

export default app;