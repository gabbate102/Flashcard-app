import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, Set } from "@prisma/client";
import { useRouter } from "next/navigation";
import { useState } from "react";


export function CreateCard({ set, cardsData, setUpdate, update }: { set: Set, cardsData: Card[], setUpdate: (update: boolean) => void, update: boolean }) {

    const defaultCards = cardsData ?? [{ frontSide: '', backSide: '' }];

    const [cards, setCards] = useState<Card[]>(defaultCards);

    const router = useRouter();

    function handleInputChangeFrontSide(e: React.ChangeEvent<HTMLInputElement>, idx: number) {
        const newCards = cards.map((card, index) => {
            if (idx === index) {
                return { ...card, frontSide: e.target.value, timesCorrect: 0 }
            }
            return card;
        });
        setCards(newCards);
    }

    function handleInputChangeBackSide(e: React.ChangeEvent<HTMLInputElement>, idx: number) {
        const newCards = cards.map((card, index) => {
            if (idx === index) {
                return { ...card, backSide: e.target.value, timesCorrect: 0 }
            }
            return card;
        });
        setCards(newCards);
    }

    function handleRemoveCard(idx: number) {
        const newCards = cards.filter((_, index) => idx !== index);
        setCards(newCards);
    }

    async function handleSaveChanges() {
        await fetch('/api/card/update', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id: set.id,
                cards: cards
            })
        })
        setUpdate(!update);
    }

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button className="hover:cursor-pointer font-bold">Edit Set</Button>
            </DialogTrigger>
            <DialogContent className=" w-[800px]">
                <DialogHeader>
                    <DialogTitle>Editing set: {set?.title}</DialogTitle>
                    <DialogDescription>
                        Add as many cards as you want
                    </DialogDescription>
                </DialogHeader>
                <Label className="text-md"><span className="font-bold">{cards.length}</span> cards in this set</Label>
                {cards?.map((_, index) => (
                    <div className="flex gap-2 py-1 items-center">
                        <Input
                            type="text"
                            placeholder="Front of Card"
                            className="border-2 border-black"
                            onChange={(e) => handleInputChangeFrontSide(e, index)}
                            value={cards[index].frontSide}
                        />
                        <Input
                            type="text"
                            placeholder="Back of Card"
                            className="border-2 border-black"
                            onChange={(e) => handleInputChangeBackSide(e, index)}
                            value={cards[index].backSide}
                        />
                        <Button onClick={() => handleRemoveCard(index)} className="hover:cursor-pointer">-</Button>
                    </div>
                ))}
                <Button onClick={
                    () => setCards([...cards, { frontSide: '', backSide: '', timesCorrect: 0 }])
                } className="hover:cursor-pointer"
                >+</Button>
                <DialogFooter>
                    <Button onClick={handleSaveChanges} type="submit">Save changes</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}