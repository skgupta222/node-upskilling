import UsersController from "@/controllers/users.controller";
import { Routes } from "@/interfaces/routes.interface";
import { Router } from "express";

class UsersRoutes implements Routes {
   public path = '/users';
   public router = Router();

   public usersController = new UsersController();

   constructor() {
    this.initializeRoutes();
   }
   private initializeRoutes() {
    this.router.get(`${this.path}`, this.usersController.getUsers);
    this.router.get(`${this.path}/:id(\\d+)`, this.usersController.getUserById)  
   }
}

export default UsersRoutes;