import { Card } from "@prisma/client";
import { Card as _Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";


const CardComponent = ({ card, cardIdx }: { card: Card, cardIdx: number }) => {

    const [flipped, setFlipped] = useState(false);

    return (
        <_Card onClick={() => setFlipped(!flipped)} className="w-[700px] h-[400px] flex items-center justify-center cursor-pointer">
            {!flipped ? <p className="text-4xl">{card.frontSide}</p> : <p className="text-4xl">{card.backSide}</p>}
        </_Card>
    )
}


export default function StudyCards({ cards, setCards }: { cards: Card[], setCards: (cards: Card[]) => void }) {

    const [cardIdx, setCardIdx] = useState(0);
    const [cardSet, setCardSet] = useState<Card[]>(cards);

    function handleNextCard() {
        if (cardIdx < cards.length - 1) {
            setCardIdx(cardIdx + 1);
        }
    }

    function handlePreviousCard() {
        if (cardIdx > 0) {
            setCardIdx(cardIdx - 1);
        }
    }


    function markCardCorrect() {
        const newCards = cards.map((card, index) => {
            if (cardIdx === index && card.timesCorrect < 3) {
                return { ...card, timesCorrect: card.timesCorrect + 1 }
            }
            return card;
        });
        setCards(newCards);
    }

    function markCardIncorrect() {
        const newCards = cards.map((card, index) => {
            if (cardIdx === index && card.timesCorrect > 0) {
                return { ...card, timesCorrect: card.timesCorrect - 1 }
            }
            return card;
        });
        setCards(newCards);
    }

    return (
        <div className="container flex flex-col items-center justify-center py-20 h-max">
            <div className='flex items-center gap-2 pb-4'>
                <Button onClick={handlePreviousCard} variant="ghost">Previous</Button>
                <p className="">{cardIdx + 1}/{cards.length}</p>
                <Button onClick={handleNextCard} variant="ghost">Next</Button>
            </div>
            <p>Times correct: {cards[cardIdx].timesCorrect}</p>
            <CardComponent card={cards[cardIdx]} cardIdx={cardIdx} />
            <div className="pt-4 flex gap-2">
                <Button onClick={markCardCorrect} variant="ghost">Correct</Button>
                <Button onClick={markCardIncorrect} variant="ghost">Wrong</Button>
            </div>
        </div>
    )
}
