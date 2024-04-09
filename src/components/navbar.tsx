import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/nextjs";

export default function Navbar() {
  return (
    <>
      <div className="w-full h-[64px] flex justify-between">
        <p className="my-auto">Flashcard</p>
        <SignedIn>
          {/* Mount the UserButton component */}
          <UserButton showName={true}/>
        </SignedIn>
        <SignedOut>
          {/* Signed out users get sign in button */}
          <SignInButton />
        </SignedOut>
      </div>
    </>
  )
}