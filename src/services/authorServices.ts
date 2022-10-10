import * as authorRepository from "../repositories/authorRepository";


export async function gettingByName(name:string){
    const author  = await authorRepository.gettingByName(name);
    if(author===null){
        const newAuthor = await authorRepository.creating(name);
        return newAuthor;
    }
    return author;
}

export async function gettingTotal() {

    const total = await authorRepository.gettingTotal();

    return total;
}