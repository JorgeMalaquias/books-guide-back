import * as authorRepository from "../repositories/authorRepository";


export async function getting(id:number){
    const author  = await authorRepository.gettingById(id);
    return author;
}