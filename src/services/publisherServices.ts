import * as publisherRepository from "../repositories/publisherRepository";


export async function gettingByName(name:string){
    const publisher  = await publisherRepository.gettingByName(name);
    if(publisher===null){
        const newPublisher = await publisherRepository.creating(name);
        return newPublisher;
    }
    return publisher;
}