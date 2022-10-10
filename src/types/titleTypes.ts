import { Titles } from "@prisma/client"

export interface ITitle {
    name: string,
    imageUrl: string,
    publisher: string,
    author: string,
    description: string
}

export type TypeTitle = Partial<Titles>