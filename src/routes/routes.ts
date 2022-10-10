import { Router } from "express";
import authRoutes from "./authRoutes";
import titleRoutes from "./titleRoutes";
import { testsRouter } from "./testsRouter";
import dotenv from 'dotenv';
import authorRoutes from "./authorRoutes";
dotenv.config();

const routes = Router();

routes.use(authRoutes);
routes.use(titleRoutes);
routes.use(authorRoutes);
if (process.env.NODE_ENV === "test") {
	routes.use(testsRouter);
}

export default routes;