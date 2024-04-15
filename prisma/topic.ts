import { db } from "@/server/db";
import { Card } from "@prisma/client";

export async function createTopic(title: string, authorId: string) {
    return db.topic.create({
        data: {
            title: title,
            authorId: authorId
        }
    });
}

export async function getTopics(authorId: string) {
    return db.topic.findMany({
        where: {
            authorId: authorId
        },
        include: {
            Cards: true
        }
    });
}

export async function getTopic(id: string) {
    return db.topic.findUnique({
        where: {
            id: id
        },
        include: {
            Cards: true
        }
    });
}

