import * as titleRepository from "../repositories/titleRepository";
import * as publisherService from '../services/publisherServices';
import * as authorService from '../services/authorServices';
import { ITitle } from "../types/titleTypes";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import dotenv from "dotenv";
dotenv.config();

export async function creating({ name, imageUrl, author, publisher, description }: ITitle) {

    const publisherFound = await publisherService.gettingByName(publisher);
    const authorFound = await authorService.gettingByName(author);

    const titleFound = await getting(name, imageUrl, authorFound.id, publisherFound.id, description);

    if (titleFound !== null) {
        throw ({ type: 'conflict', message: 'there is already a title with this name, the same publisher and author' });
    }


    const newTitle = await titleRepository.creating(name, imageUrl, authorFound.id, publisherFound.id, description);
    return newTitle;
}

export async function getting(name: string, imageUrl: string, authorId: number, publisherId: number, description: string) {

    const titleFound = await titleRepository.getting(name, imageUrl, authorId, publisherId, description);

    return titleFound;
}
export async function gettingTotal() {

    const total = await titleRepository.gettingTotal();

    return total;
}

export async function gettingRecents() {

    const titles = await titleRepository.gettingRecents();

    return titles;
}
export async function gettingSearch(word:string) {

    const titles = await titleRepository.gettingSearch(word);

    return titles;
}
export async function gettingById(id:number) {

    const title = await titleRepository.gettingById(id);

    return title;
}