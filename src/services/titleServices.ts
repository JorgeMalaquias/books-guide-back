import * as titleRepository from "../repositories/titleRepository";
import { ITitle } from "../types/titleTypes";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import dotenv from "dotenv";
dotenv.config();

export async function creating({name, imageUrl, author,publisher,description}:ITitle){
    // verifica se existe editora, se não existir cria, pega o id
    // verifica se existe autor, se não existir cria, pega o id
    // verifica se não existe já um titulo com mesmas infos cadastrado, se existir throw error
    const newTitle  = await titleRepository.creating(name, imageUrl, authorId,publisherId,description);
    return newTitle;
}