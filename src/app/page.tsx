import { Button } from "@/components/ui/button";
import Navbar from "@/components/navbar"
import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <Navbar />
      <p>For Testing:</p>
      <Button><Link href="/home">Go to home page</Link></Button>
      <Button><Link href="/topic-page">Go to topic page</Link></Button>
      <Button><Link href="/set-page">Go to set page</Link></Button>
      <Button><Link href="/study-page">Go to study page</Link></Button>
    </main>
  );
}
