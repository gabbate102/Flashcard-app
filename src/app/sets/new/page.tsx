'use client';
import Navbar from "@/components/navbar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Page() {

    const [topicName, setTopicName] = useState('');
    const router = useRouter();

    return (
        <main className="">
            <Navbar />
            <div className="container flex flex-col items-center">
                <div className="w-1/2 py-8 flex flex-col gap-2 items-start">
                    <p className="text-3xl">New topic: {topicName}</p>
                    <Input
                        type="text"
                        value={topicName}
                        onChange={(e) => setTopicName(e.target.value)}
                        placeholder="Enter topic name"
                        className="border-2 border-black w-fit"
                    />
                    <div className="flex gap-2">
                        <Link href="/sets">
                            <Button variant={'secondary'}>
                                Back
                            </Button>
                        </Link>
                        <Button
                            onClick={() => {
                                fetch('/api/set', {
                                    method: 'POST',
                                    headers: {
                                        'Content-Type': 'application/json'
                                    },
                                    body: JSON.stringify(topicName)
                                })
                                    .then(response => router.push('/sets'))
                                    .then(data => console.log(data))
                            }}
                            className=" text-white p-2 rounded-md"
                        >
                            Confirm
                        </Button>
                    </div>
                </div>
                <div>
                </div>
            </div>
        </main>
    )
} 