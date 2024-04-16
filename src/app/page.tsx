"use client";

import Navbar from "@/components/navbar"
import { Button } from "@/components/ui/button";
import { useUser } from "@clerk/nextjs";
import Link from 'next/link'

export default function Home() {

  const user = useUser();

  return (
    <main className="flex items-center justify-center flex-col">
      <Navbar />

      <div className=" flex flex-col items-center justify-center py-20 ">
        <p className="text-6xl font-bold">Flashy</p>
        <p className="text-4xl">Studying for your next test has never been easier</p>
        {user ? (
          <Link href="/sets">
            View your Sets
          </Link>
        ) : (
          <Link href="/sign-in">
            Sign in
          </Link>
        )}
      </div>
    </main>
  );
}
