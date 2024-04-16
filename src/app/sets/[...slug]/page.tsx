'use client';

import Navbar from "@/components/navbar";
import Link from "next/link";
import { useEffect, useState } from "react";
import { CreateCard } from "../components/create-card";
import { Card, Set } from "@prisma/client";
import { Card as _Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";



export default function Page({ params }: { params: { slug: string } }) {

    const creator = params.slug[0];
    const setTitle = params.slug[1];

    const [set, setSet] = useState<Set>();
    const [cards, setCards] = useState<Card[]>([]);

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
                    <p className="text-3xl">Viewing {creator}'s <span className="font-bold">{setTitle}</span> set</p>
                </div>
                <div className="flex flex-col w-1/2 my-auto gap-4">
                    <CreateCard set={set} cardsData={cards} />
                    {cards.length > 0 ?
                        <div>
                            <h1>Filter: All</h1>
                        </div>
                        :
                        <p>This set is empty!</p>
                    }
                </div>
                {/* <div className="container flex flex-col items-center justify-center py-20 h-max">
                    <p className="pb-4">1/2</p>
                    <_Card className="w-[700px] h-[400px] flex items-center justify-center cursor-pointer">
                        <p className="text-4xl">x</p>
                        <p className="text-4xl">y</p>
                    </_Card>
                    <div className="pt-4 flex gap-2">
                        <Button variant="ghost">Correct</Button>
                        <Button variant="ghost">Wrong</Button>
                    </div>
                </div>
            </div> */}
            </div>
        </main>
    )
}