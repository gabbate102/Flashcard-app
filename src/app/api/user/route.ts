import { currentUser } from "@clerk/nextjs";
import { createUser, getUser } from "../../../../prisma/user";

export async function GET() {

    const _user = await currentUser();

    if (!_user) {
        return Response.json({ status: 401, message: "Unauthorized" });
    }

    let user = await getUser(_user.id);

    if (!user) {
        user = await createUser(_user.id, _user.firstName ?? 'N/A');
    }

    return Response.json({ status: 200, user })
}