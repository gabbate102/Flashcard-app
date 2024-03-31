import { Button } from "@/components/ui/button";
import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <p>For Testing:</p>
      <Button><Link href="/login">Go to login page</Link></Button>
    </main>
  );
}
