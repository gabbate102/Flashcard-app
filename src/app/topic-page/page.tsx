import Navbar from "@/components/navbar"
import Link from 'next/link'

export default function TopicPage() {
  return (
    <>
      <Navbar />
      <div className="container flex flex-col items-center">
        <div className="w-1/2 py-8">
          <p className="text-2xl">Spanish</p>
        </div>
        <div className="flex flex-col w-1/2 my-auto gap-4">
          <p className="text-xl"><Link href="/set-page">All Vocabulary</Link></p>
          <p className="text-xl">New</p>
        </div>
      </div>
    </>
  )
}