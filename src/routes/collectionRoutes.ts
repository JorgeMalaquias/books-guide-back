import { Router } from "express";
import { validatingToken } from "../middlewares/validateToken";
import { validateSchemaMiddleware } from "../middlewares/validateSchema";
import { creating, deleting } from "../controllers/collectionControllers";

const collectionRoutes = Router();

collectionRoutes.post('/collections/:titleId',validatingToken,creating);
collectionRoutes.delete('/collections/:titleId',validatingToken,deleting);


export default collectionRoutes;