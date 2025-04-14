import { Router } from 'express';
import UserController from '../controllers/userController';

const router = Router();
const userController = new UserController();

export function setUserRoutes(app: Router) {
  app.post('/register', userController.createUser.bind(userController));
}