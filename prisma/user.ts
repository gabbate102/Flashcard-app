import { db } from "@/server/db";

export async function createUser(id: string, name: string) {
    return db.user.create({
        data: {
            id: id,
            name: name,
        }
    });
}


export async function getUser(id: string) {
    return db.user.findUnique({
        where: {
            id: id,
        },
        include: {
            Topic: true,
        }
    });
}
