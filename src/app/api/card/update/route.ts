import { updateCards } from "../../../../../prisma/set";

export async function POST(req: Request) {

    const data = await req.json()

    if (!data.cards || !data.id) {
        return Response.json({ status: 400, message: "Invalid request" });
    }

    await updateCards(data.id, data.cards);

    return Response.json({ status: 200, data })
}