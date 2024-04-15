import Link from 'next/link'
import { Button } from "@/components/ui/button";

export default function StudyResults({topic, set, correct, incorrect}: {topic:string, set:string, correct:number, incorrect:number}) {
  return (
    <div className='absolute w-full h-[700px] top-[64px] flex flex-col items-center justify-center bg-white gap-4'>
      <div className='text-center flex flex-col gap-2'>
        <p className='text-3xl'>{topic} / {set}</p>
        <p>Correct: {correct}</p>
        <p>Incorrect: {incorrect}</p>
      </div>
      <Link href={`/topic-page?topic=${topic}`}><Button>Back to {topic} page</Button></Link>
    </div>
  )
}