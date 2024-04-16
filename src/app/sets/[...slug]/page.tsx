'use client';

import Navbar from "@/components/navbar";
import Link from "next/link";
import { useEffect, useState } from "react";
import { CreateCard } from "../components/create-card";

export default function Page({ params }: { params: { slug: string } }) {

    const creator = params.slug[0];
    const setTitle = params.slug[1];

    const [set, setSet] = useState([]);
    const [cards, setCards] = useState([]);

    useEffect(() => {
        fetch(`/api/set/get?creator=${creator}&setTitle=${setTitle}`, {
            cache: 'no-cache',
        })
            .then(response => response.json())
            .then(data => {
                const set = data.set;
                setSet(set)
                setCards(set.Cards)
            }
            )
    }, [])



    return (
        <main className="">
            <Navbar />
            <div className="container flex flex-col items-center">
                <div className="w-1/2 py-8">
                    <p className="text-3xl">Viewing {creator}'s <span className="font-bold">{setTitle}</span> set</p>
                </div>
                <div className="flex flex-col w-1/2 my-auto gap-4">
                    {cards.length > 0 ?
                        <div>
                            <h1>All</h1>
                            <h1>New</h1>
                        </div>
                        :
                        <p>This set is empty!</p>
                    }
                    <CreateCard set={set} cards={cards} />
                </div>
            </div>
        </main>
    )
}