import Link from 'next/link'
import { Button } from "@/components/ui/button";

export default function Navbar({topic, set, correct, incorrect}: {topic:string, set:string, correct:number, incorrect:number}) {
  return (
    <div>
      <div>
        {set}{topic}
        <p>Correct: {correct}</p>
        <p>Incorrect: {incorrect}</p>
      </div>
      <Link href={`/topic-page?topic=${topic}`}><Button>Back to {topic} page</Button></Link>
    </div>
  )
}