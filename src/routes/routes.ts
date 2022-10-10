import { Router } from "express";
import authRoutes from "./authRoutes";
import titleRoutes from "./titleRoutes";
import { testsRouter } from "./testsRouter";
import dotenv from 'dotenv';
dotenv.config();

const routes = Router();

routes.use(authRoutes);
routes.use(titleRoutes);
if (process.env.NODE_ENV === "test") {
	routes.use(testsRouter);
}

export default routes;