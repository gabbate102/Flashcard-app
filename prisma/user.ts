import { db } from "@/server/db";

export async function createUser(id: string, name: string) {
    return db.user.create({
        data: {
            id: id,
            name: name,
        },
        include: {
            Sets: true,
        }
    });
}


export async function getUser(id: string) {

    return db.user.findUnique({
        where: {
            id: id,
        },
        include: {
            Sets: true,
        }
    });
}

export async function getUserByName(name: string) {

    return db.user.findFirst({
        where: {
            name: name,
        },
        include: {
            Sets: true,
        }
    });
}