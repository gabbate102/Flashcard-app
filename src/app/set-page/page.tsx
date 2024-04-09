import Navbar from "@/components/navbar"
import { Button } from "@/components/ui/button";
import Link from 'next/link'

export default function SetPage() {
  return (
    <>
      <Navbar />
      <div className="container flex flex-col items-center">
        <div className="w-1/2 py-8">
          <p className="text-2xl">All Vocabulary</p>
        </div>
        <div className="flex flex-col w-1/2 my-auto gap-4">
          <Link href="/study-page"><Button className="w-full">Study</Button></Link>
          <Link href="/edit-page"><Button className="w-full">Edit Set</Button></Link>
        </div>
      </div>
    </>
  )
}