import { Request, Response } from 'express';
import * as authorService from '../services/authorServices';



export async function gettingTotal(req:Request,res:Response){
    
    const total = await authorService.gettingTotal();
    res.send({total});
}
