import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Login() {
  return (
    <div className="flex items-center justify-items-center justify-center h-screen">
      <Card className="h-40 flex flex-col justify-center items-center p-10">
        <p className="text-3xl pb-2 align-text-top">Flashcard App</p>
        <Button>Sign in with Google</Button>
      </Card>
    </div>
  )
}