"use client";

import Navbar from "@/components/navbar"
import Link from 'next/link'

export default function Home() {
  // topics list as demo data
  const topics = ["Spanish","German"]
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
          <p>+</p>
        </div>
      </div>
    </main>
  );
}
