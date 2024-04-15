import Navbar from "@/components/navbar"
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input"
import Link from 'next/link'

export default function EditPage({searchParams}: { searchParams: { topic: string }}) {
  const topic = searchParams.topic;
  return (
    <>
      <Navbar />
      <div className="container flex flex-col items-center">
        <div className="w-1/2 py-8">
          <p className="text-3xl">{topic}</p>
        </div>
        <div className="flex flex-col w-1/2 my-auto gap-4">
          <div className="grid grid-cols-9 gap-2">
            <div className="col-span-4">
              <Input placeholder="Front" />
            </div>
            <div className="col-span-4">
              <Input placeholder="Back" />
            </div>
            <Button variant="destructive">-</Button>
          </div>
          <Button className="w-full" variant="ghost">+</Button>
          <Link href={`/topic-page?topic=${topic}`}><Button className="w-full">Done</Button></Link>
          <Link href={`/topic-page?topic=${topic}`}><Button className="w-full">Cancel</Button></Link>
        </div>
      </div>
    </>
  )
}