import { Router } from "express";
import { gettingTotal } from "../controllers/authorControllers";

const authorRoutes = Router();


authorRoutes.get('/authors/total', gettingTotal);


export default authorRoutes;