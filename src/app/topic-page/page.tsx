"use client";

import Navbar from "@/components/navbar"
import Link from 'next/link'
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function TopicPage({searchParams}: { searchParams: { topic: string } }) {
  const [topic, setTopic] = useState();
  return (
    <>
      <Navbar />
      <div className="container flex flex-col items-center">
        <div className="w-1/2 py-8 flex justify-between items-center">
          <p className="text-2xl">{searchParams.topic}</p>
          <Link href={`/edit-page?topic=${topic}`}><Button>Edit</Button></Link>
        </div>
        <div className="flex flex-col w-1/2 my-auto gap-4">
          <p className="text-xl"><Link href="/set-page">All Vocabulary</Link></p>
          <p className="text-xl">New</p>
        </div>
      </div>
    </>
  )
}