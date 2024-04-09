import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/nextjs";
import Link from 'next/link'

export default function Navbar() {
  return (
    <>
      <div className="w-full h-[64px] flex justify-between px-8">
        <p className="my-auto text-2xl"><Link href="/home">Flashcard</Link></p>
        <SignedIn>
          {/* Mount the UserButton component */}
          <div className="my-auto"> <UserButton showName={true}/></div>
        </SignedIn>
        <SignedOut>
          {/* Signed out users get sign in button */}
          <SignInButton />
        </SignedOut>
      </div>
    </>
  )
}