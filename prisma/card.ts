import { db } from "@/server/db";

export async function createCard(topicId: string, front: string, back: string) {
    return db.card.create({
        data: {
            topicId: topicId,
            frontSide: front,
            backSide: back,
        }
    });
}

export async function increaseCardProfiency(id: string, timesCorrect: number) {
    return db.card.update({
        where: {
            id: id
        },
        data: {
            timesCorrect: {
                increment: timesCorrect
            }
        }
    });
}

export async function decreaseCardProfiency(id: string, timesIncorrect: number) {

    const card = await db.card.findUnique({
        where: {
            id: id
        }
    });

    if (card?.timesCorrect === 0) {
        return;
    }

    return db.card.update({
        where: {
            id: id
        },
        data: {
            timesCorrect: {
                decrement: timesIncorrect
            }
        }
    });
}