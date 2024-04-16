'use client';

import Navbar from "@/components/navbar";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useUser } from "@clerk/nextjs";
import { Set } from "@prisma/client";

export default function TopicsPage() {

    const [sets, setSets] = useState([]);
    const { user } = useUser();

    useEffect(() => {
        fetch('/api/user', {
            cache: 'no-cache'
        })
            .then(response => response.json())
            .then(data => {
                const user = data.user;
                console.log(user)
                setSets(user.Sets)
            }
            )
    }, [])

    return (
        <main className="">
            <Navbar />
            <div className="container flex flex-col items-center">
                <div className="w-1/2 py-8">
                    <p className="text-3xl">My Sets</p>
                </div>
                <div className="flex flex-col w-1/2 my-auto gap-4">
                    {sets.length > 0 ? sets.map((topic: Set) => (
                        <Link href={`/sets/${user?.firstName}/${topic.title}`} className="text-lg hover:cursor-pointer hover:underline">{topic.title}</Link>
                    ))
                        :
                        <p>You haven't created any sets yet!</p>}
                    <Link href="/sets/new" className="text-lg hover:cursor-pointer">+</Link>
                </div>
            </div>
        </main>
    )
}