import { updateCards } from "../../../../../prisma/set";

export async function POST(req: Request) {

    const data = await req.json()

    console.log(data.cards)

    if (!data.cards) {
        return Response.json({ status: 400, message: "Invalid request" });
    }

    await updateCards(data.setId, data.cards);

    return Response.json({ status: 200, data })
}