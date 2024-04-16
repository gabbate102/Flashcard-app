import { getSet } from "../../../../../prisma/set";
import { getUserByName } from "../../../../../prisma/user";

export async function GET(req: Request) {

    const { searchParams } = new URL(req.url);

    const creator = searchParams.get('creator');
    const setTitle = searchParams.get('setTitle');

    if (!creator || !setTitle) {
        return Response.json({ status: 400, message: "Invalid request" });
    }

    const user = await getUserByName(creator)

    if (!user) {
        return Response.json({ status: 404, message: "User not found" });
    }

    const set = await getSet(user.id, setTitle)

    return Response.json({ status: 200, set })
}