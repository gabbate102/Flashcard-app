'use client';

import Navbar from "@/components/navbar";
import Link from "next/link";
import { useEffect, useState } from "react";
import { CreateCard } from "../components/create-card";
import { Card, Set } from "@prisma/client";
import { Card as _Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import StudyCards from "../components/study-cards";
import confetti from "canvas-confetti";



export default function Page({ params }: { params: { slug: string } }) {

    const creator = params.slug[0];
    const setTitle = params.slug[1];

    const [set, setSet] = useState<Set>();
    const [cards, setCards] = useState<Card[]>([]);
    const [study, setStudy] = useState(false);
    const [update, setUpdate] = useState(false);
    const [finished, setFinished] = useState(false);

    useEffect(() => {
        fetch(`/api/set/get?creator=${creator}&setTitle=${setTitle}`, {
            cache: 'no-cache',
        })
            .then(response => response.json())
            .then(data => {
                const set = data.set as Set;
                const cards = data.set.Cards;
                setSet(set)
                setCards(cards)
            })
        // check if all the cards have times correct equal to 3

    }, [update])

    useEffect(() => {
        fetch(`/api/set/get?creator=${creator}&setTitle=${setTitle}`, {
            cache: 'no-cache',
        })
            .then(response => response.json())
            .then(data => {
                const set = data.set as Set;
                const cards = data.set.Cards;
                setSet(set)
                setCards(cards)
            }
            )
    }, [])

    if (!set) {
        return
    }

    const handleFinishStudying = async () => {

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

        if (cards.every(card => card.timesCorrect === 3)) {
            confetti()
        }
        setStudy(false)
        setFinished(true)

    }


    return (
        <main className="">
            <Navbar />
            <div className="container flex flex-col items-center">
                <div className="w-1/2 py-8">
                    <p className="text-3xl">{creator}'s <span className="font-bold">{setTitle}</span> set with {cards.length} flashcard(s)</p>
                </div>
                <div className="flex flex-col w-1/2 my-auto gap-4">
                    <CreateCard set={set} cardsData={cards} setUpdate={setUpdate} update={update} />
                    {study ?
                        <Button disabled={cards.length <= 0} onClick={() => handleFinishStudying()}>Finish Studying</Button>
                        :
                        <Button disabled={cards.length <= 0} onClick={() => {
                            setFinished(false);
                            setStudy(!study)
                        }}>Study Set</Button>
                    }
                </div>
                {study &&
                    <StudyCards setCards={setCards} cards={cards} />
                }

                {finished &&
                    <div className="mt-5">
                        <p>Well done! You've finished studying this set!</p>
                        <div className="flex flex-col gap-2 items-center justify-center">
                            <h1 className="py-2 text-2xl">Summary:</h1>
                            {cards.map((card, idx) => (
                                <div className="flex gap-2 items-center text-md">
                                    <p>{card.frontSide} - </p>
                                    {card.timesCorrect === 3 && <p>Perfect</p>}
                                    {card.timesCorrect === 2 && <p>Good</p>}
                                    {card.timesCorrect === 1 && <p>Needs Improvement</p>}
                                    {card.timesCorrect === 0 && <p>Needs Improvement</p>}

                                </div>
                            ))}

                        </div>
                    </div>
                }
            </div>
        </main>
    )
}