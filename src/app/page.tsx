"use client";

import Navbar from "@/components/navbar"
import Link from 'next/link'
import { Input } from "@/components/ui/input"
import { useState } from "react";

export default function Home() {
  // showFront controls if the card is flipped
  const [showAdd, setShowAdd] = useState(false);
  // topics list as demo data
  const topics = ["Spanish","German"]
  
  const showAddTopic = () => {
    setShowAdd(!showAdd);
  }
  const addNewTopic = (userTopic: string) => {
    topics.push(userTopic)
  }

  // render the topics into a list
  const listItems = topics.map(topic => <p className="text-xl"><Link href={`/topic-page?topic=${topic}`}>{topic}</Link></p>);
  return (
    <main className="">
      <Navbar />
      <div className="container flex flex-col items-center">
        <div className="w-1/2 py-8">
          <p className="text-3xl">My Topics</p>
        </div>
        <div className="flex flex-col w-1/2 my-auto gap-4">
          {listItems}
          <div className="flex items-center gap-4 text-xl">
            {showAdd && <Input className="w-1/2" placeholder="Enter topic name" onChange={(e) => addNewTopic(e.target.value)}/>}
            {showAdd && <p onClick={showAddTopic} className="cursor-pointer">x</p>}
            {!showAdd && <p onClick={showAddTopic} className="cursor-pointer">+</p>}
          </div>
        </div>
      </div>
    </main>
  );
}
