import express from 'express';
import linksController from '../cotrollers/LinksCotroller.js';
const linksRouter =express.Router();

linksRouter.get("/", linksController.getList);
linksRouter.get("/:id", linksController.getById);
linksRouter.post("/",linksController.post);
linksRouter.put("/:id", linksController.update);
linksRouter.delete("/:id", linksController.delete);

export default linksRouter;