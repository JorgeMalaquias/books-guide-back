import { Router } from "express";
import { logging, registering } from "../controllers/authControllers";
import comparingPasswords from "../middlewares/comparingPassword";
import { validateSchemaMiddleware } from "../middlewares/validateSchema";
import { userRegisterSchema, userLoginSchema } from "../schemas/authSchemas";
import { gettingSearch, gettingById } from "../controllers/authControllers";

const authRoutes = Router();

authRoutes.post('/register',validateSchemaMiddleware(userRegisterSchema), comparingPasswords, registering);
authRoutes.post('/login', validateSchemaMiddleware(userLoginSchema), logging);
authRoutes.get('/users/search/:word', gettingSearch);
authRoutes.get('/users/:id', gettingById);

export default authRoutes;