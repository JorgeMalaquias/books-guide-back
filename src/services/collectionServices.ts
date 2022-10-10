import * as collectionRepository from "../repositories/collectionRepository";
import * as publisherService from '../services/publisherServices';
import * as authorService from '../services/authorServices';
import dotenv from "dotenv";
dotenv.config();

export async function creating(userId:number,titleId:number) {


    const newItem = await collectionRepository.creating(userId,titleId);
    return newItem;
}

export async function deleting(userId:number,titleId:number) {


    const newItem = await collectionRepository.deleting(userId,titleId);
    return newItem;
}

