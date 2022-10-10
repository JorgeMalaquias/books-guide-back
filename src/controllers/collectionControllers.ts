import { Request, Response } from 'express';
import * as collectionService from '../services/collectionServices';

export async function creating(req:Request,res:Response){
    
    const newItem = await collectionService.creating(Number(res.locals.userId),Number(req.params.titleId));
    res.status(201);
}
export async function deleting(req:Request,res:Response){
    
    const newItem = await collectionService.deleting(Number(res.locals.userId),Number(req.params.titleId));
    res.status(200);
}