import Navbar from "@/components/navbar"
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="container flex flex-col items-center">
        <div className="w-1/2 py-8">
          <p className="text-2xl">My Topics</p>
        </div>
        <div className="flex flex-col w-1/2 my-auto gap-4">
          <p className="text-xl"><Link href="/topic-page">Spanish</Link></p>
          <p className="text-xl">German</p>
          <p>+</p>
        </div>
      </div>
    </>
  )
}