import { Router } from "express";
import UserRouter from "./User.router";
import Analisys from "./Analysis.router";
import AuthRouter from "./Auth.router";

const routes = Router();

routes.use("/user", UserRouter);
routes.use("/analysis", Analisys);
routes.use("/auth", AuthRouter);

export default routes;