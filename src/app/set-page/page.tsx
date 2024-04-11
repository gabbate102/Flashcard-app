import Navbar from "@/components/navbar"
import { Button } from "@/components/ui/button";
import Link from 'next/link'

export default function SetPage({searchParams}: { searchParams: { set: string } }) {
  const currentSet = searchParams.set;
  return (
    <>
      <Navbar />
      <div className="container flex flex-col items-center">
        <div className="w-1/2 py-8">
          <p className="text-3xl">{currentSet}</p>
        </div>
        <div className="flex flex-col w-1/2 my-auto gap-4">
          <Link href="/study-page"><Button className="w-full">Study</Button></Link>
        </div>
      </div>
    </>
  )
}