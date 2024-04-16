"use client";

import { SignedIn , SignedOut, SignInButton } from "@clerk/nextjs";
import Navbar from "@/components/navbar"
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator"
import { useUser } from "@clerk/nextjs";
import Link from 'next/link'

export default function Home() {

  const user = useUser();

  return (
    <main className="flex items-center justify-center flex-col">
      <Navbar />

      <div className=" flex flex-col items-center justify-center py-20 gap-4">
        <p className="text-6xl font-bold">Flashy</p>
        <p className="text-4xl">Studying has never been easier</p>
        <SignedIn>
          <Link href="/sets">
            <Button>View your Sets</Button>
          </Link>
        </SignedIn>
        <SignedOut>
          <Button><SignInButton /></Button>
        </SignedOut>
        <Separator className="my-4" />
      </div>
    </main>
  );
}
