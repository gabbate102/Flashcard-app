'use client';

import Navbar from "@/components/navbar";
import Link from "next/link";
import { useEffect, useState } from "react";
import { CreateCard } from "../components/create-card";
import { Card, Set } from "@prisma/client";
import { Card as _Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import StudyCards from "../components/study-cards";



export default function Page({ params }: { params: { slug: string } }) {

    const creator = params.slug[0];
    const setTitle = params.slug[1];

    const [set, setSet] = useState<Set>();
    const [cards, setCards] = useState<Card[]>([]);

    const [study, setStudy] = useState(false);

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

    return (
        <main className="">
            <Navbar />
            <div className="container flex flex-col items-center">
                <div className="w-1/2 py-8">
                    <p className="text-3xl">{creator}'s <span className="font-bold">{setTitle}</span> set with {cards.length} flashcard(s)</p>
                </div>
                <div className="flex flex-col w-1/2 my-auto gap-4">
                    <CreateCard set={set} cardsData={cards} />
                    <Button disabled={cards.length <= 0} onClick={() => setStudy(!study)}>Study Set</Button>
                </div>
                {study &&
                    <StudyCards setCards={setCards} cards={cards} />
                }
            </div>
        </main>
    )
}