"use client";

import Navbar from "@/components/navbar"
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input"
import Link from 'next/link'
import { useState } from "react";

export default function EditPage({searchParams}: { searchParams: { topic: string }}) {
  const topic = searchParams.topic;
  const [cards, setCards] = useState([
    {
      "front":"Ejemplo",
      "back":"Example",
      "timesCorrect":0
    },
    {
      "front":"Silla",
      "back":"Chair",
      "timesCorrect":0
    },
    {
      "front":"Sencillo",
      "back":"Simple",
      "timesCorrect":0
    },
    {
      "front":"Lavar",
      "back":"To wash",
      "timesCorrect":0
    },
    {
      "front":"Creer",
      "back":"To believe",
      "timesCorrect":0
    },
    {
      "front":"Tener razón",
      "back":"To be right",
      "timesCorrect":0
    }
  ]);

  const card_set = [
    {
      "front":"Ejemplo",
      "back":"Example",
      "timesCorrect":0
    },
    {
      "front":"Silla",
      "back":"Chair",
      "timesCorrect":0
    },
    {
      "front":"Sencillo",
      "back":"Simple",
      "timesCorrect":0
    },
    {
      "front":"Lavar",
      "back":"To wash",
      "timesCorrect":0
    },
    {
      "front":"Creer",
      "back":"To believe",
      "timesCorrect":0
    },
    {
      "front":"Tener razón",
      "back":"To be right",
      "timesCorrect":0
    }
  ];


  // render the topics into a list
  const listItems = card_set.map(card => 
  <div className="grid grid-cols-9 gap-2">
    <div className="col-span-4">
      <Input placeholder="Front" value={card.front} onChange={(e) => card.front = e.target.value}/>
    </div>
    <div className="col-span-4">
      <Input placeholder="Back" value={card.back} onChange={(e) => card.back = e.target.value}/>
    </div>
    <Button variant="destructive">-</Button>
  </div>);
  
  const addRow = () => {
    console.log("addRow clicked")
  }

  return (
    <>
      <Navbar />
      <div className="container flex flex-col items-center">
        <div className="w-1/2 py-8">
          <p className="text-3xl">{topic}</p>
        </div>
        <div className="flex flex-col w-1/2 my-auto gap-4">
          {listItems}
          <Button className="w-full" variant="ghost" onClick={addRow}>+</Button>
          <Link href={`/topic-page?topic=${topic}`}><Button className="w-full">Done</Button></Link>
          <Link href={`/topic-page?topic=${topic}`}><Button className="w-full">Cancel</Button></Link>
        </div>
      </div>
    </>
  )
}