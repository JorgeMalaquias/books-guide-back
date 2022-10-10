import { Router } from "express";
import authRoutes from "./authRoutes";
import titleRoutes from "./titleRoutes";

const routes = Router();

routes.use(authRoutes);
routes.use(titleRoutes);

export default routes;