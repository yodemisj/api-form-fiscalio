import { Router } from "express";
import { HomeController } from "../controllers/HomeController";

const route = Router();

route.get('/', HomeController.index);
route.post('/convert', HomeController.convertNumber);

export default route;