import Navbar from "@/components/navbar"
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function SetPage() {
  return (
    <div className="h-screen">
      <Navbar />
      <div className="container flex flex-col items-center justify-center py-20 h-max">
        <Card className="w-[700px] h-[400px] flex items-center justify-center">
          <p className="text-4xl">Ejemplo</p>
        </Card>
        <div>
          <Button variant="ghost">←</Button>
          <Button variant="ghost">→</Button>
        </div>
      </div>
    </div>
  )
}