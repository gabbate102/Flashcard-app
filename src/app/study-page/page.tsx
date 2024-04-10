"use client";

import Navbar from "@/components/navbar"
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function SetPage() {
  const card_set = [
    ["Ejemplo","Example"],
    ["Silla","Chair"],
    ["Sencillo","Simple"],
    ["Lavar","To wash"],
    ["Creer","To believe"],
    ["Tener razón","To be right"]
  ];

  const [showFront, setShowFront] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [complete, setComplete] = useState(false);

  const onFlip = () => {
    setShowFront(!showFront);
  }

  const nextCard = () => {
    if (currentIndex < card_set.length - 1) {
      setTimeout(()=> {
        setShowFront(true);
        setCurrentIndex(currentIndex + 1);
      }, 100);
    } else {
      setComplete(true);
    }
  }

  return (
    <div className="h-screen">
      <Navbar />
      <div className="container flex flex-col items-center justify-center py-20 h-max">
        <p className="pb-4">{currentIndex + 1} / {card_set.length}</p>
        <Card className="w-[700px] h-[400px] flex items-center justify-center" onClick={onFlip}>
          {showFront && <p className="text-4xl">{card_set[currentIndex][0]}</p>}
          {!showFront && <p className="text-4xl">{card_set[currentIndex][1]}</p>}
        </Card>
        {!showFront &&
        <div className="pt-4 flex gap-2">       
          <Button variant="ghost" onClick={nextCard}>Correct</Button>
          <Button variant="ghost" onClick={nextCard}>Wrong</Button>
        </div>
        }
      </div>
    </div>
  )
}