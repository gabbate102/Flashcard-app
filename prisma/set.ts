import { db } from "@/server/db";
import { Card } from "@prisma/client";

export async function createSet(title: string, authorId: string) {
    return db.set.create({
        data: {
            title: title,
            authorId: authorId
        }
    });
}

export async function getSets(authorId: string) {
    return db.set.findMany({
        where: {
            authorId: authorId
        },

    });
}

export async function getSet(authorId: string, setTitle: string) {
    return db.set.findFirst({
        where: {
            authorId: authorId,
            title: setTitle
        },

    });
}

export async function updateCards(setId: string, cards: Card[]) {

    console.log(setId)
    return db.set.update({
        where: {
            id: setId
        },
        data: {
            Cards: cards
        }
    });
}