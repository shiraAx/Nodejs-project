import express from "express";
import bodyParser from "body-parser";
import linksRouter from "./routers/LinksRouter.js";
import usersRouter from "./routers/UsersrRouter.js";
import connectDB from "./connectDB.js";

connectDB();
const app = express();
const port = 3000;
app.use(bodyParser.json());
app.use('/links',linksRouter);
app.use('/users',usersRouter)

app.listen(port, () => {
  console.log(`example port${port}`);
});







//app.get("/", (req, res) => {
    //   res.send("drfghuj");
    // });
    // app.get("/links", linksController.getList);
    // app.get("/links/:id", linksController.getById);
    // app.post("/links/",linksController.post);
    // app.put("/links/:id", linksController.update);
    // app.delete("/links/:id", linksController.delete);