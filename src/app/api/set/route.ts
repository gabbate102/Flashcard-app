import { currentUser } from "@clerk/nextjs";
import { createUser, getUser } from "../../../../prisma/user";
import { createSet } from "../../../../prisma/set";

export async function POST(req: Request) {

    const _user = await currentUser();

    const data = await req.json()

    if (!_user) {
        return Response.json({ status: 401, message: "Unauthorized" });
    }

    let user = await getUser(_user.id);

    if (!user) {
        return Response.json({ status: 404, message: "User not found" });
    }

    await createSet(data, user.id);

    return Response.json({ status: 200, data })
}