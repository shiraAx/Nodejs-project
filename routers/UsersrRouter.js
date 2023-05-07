import express from 'express';
import usersController from '../cotrollers/UsersController.js';

const usersRouter =express.Router();

usersRouter.get("/", usersController.getList);
usersRouter.get("/:id", usersController.getById);
usersRouter.post("/",usersController.post);
usersRouter.put("/:id", usersController.update);
usersRouter.delete("/:id", usersController.delete);

export default usersRouter;