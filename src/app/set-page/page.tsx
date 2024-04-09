import Navbar from "@/components/navbar"
import { Button } from "@/components/ui/button";

export default function SetPage() {
  return (
    <>
      <Navbar />
      <div className="container flex flex-col items-center">
        <div className="w-1/2 py-8">
          <p className="text-2xl">All Vocabulary</p>
        </div>
        <div className="flex flex-col w-1/2 my-auto gap-4">
          <Button>Study</Button>
          <Button>Edit Set</Button>
        </div>
      </div>
    </>
  )
}