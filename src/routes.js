import { Router } from 'express';
const routes = new Router();

routes.get('/test',(request, response) => {
  response.json({ message: 'Testing API' });
});

export default routes;