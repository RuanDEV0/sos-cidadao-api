import { Router } from "express";
const routes = new Router();

routes.get('/test',(response) => {
    response.json({message: 'Testing API'})
});

export default routes;