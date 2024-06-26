"use client";

import Navbar from "@/components/navbar"
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import StudyResults from "@/components/study_results"

export default function SetPage({searchParams}: { searchParams: { set: string, topic: string } }) {
  // create sample data 
  const card_set = [
    {
      "front":"Ejemplo",
      "back":"Example",
      "timesCorrect":0
    },
    {
      "front":"Silla",
      "back":"Chair",
      "timesCorrect":0
    },
    {
      "front":"Sencillo",
      "back":"Simple",
      "timesCorrect":0
    },
    {
      "front":"Lavar",
      "back":"To wash",
      "timesCorrect":0
    },
    {
      "front":"Creer",
      "back":"To believe",
      "timesCorrect":0
    },
    {
      "front":"Tener razón",
      "back":"To be right",
      "timesCorrect":0
    }
  ];

  const set = searchParams.set;
  const topic = searchParams.topic;

  // showFront controls if the card is flipped
  const [showFront, setShowFront] = useState(true);
  // currentIndex controls which card is shown
  const [currentIndex, setCurrentIndex] = useState(0);
  // complete controls if the user is directed to the studyComplete page
  const [complete, setComplete] = useState(false);
  // correct stores the cards that were correct 
  const [correct, setCorrect] = useState([]);
  // numCorrect stores the number of cards that were correct 
  const [numCorrect, setNumCorrect] = useState(0);
  // incorrect stores the cards that were incorrect 
  const [incorrect, setIncorrect] = useState([]);
  // numIncorrect stores the number of cards that were correct 
  const [numIncorrect, setNumIncorrect] = useState(0);

  // onFlip flips the card by alternating showFront
  const onFlip = () => {
    setShowFront(!showFront);
  }

  // nextCard shows the next card
  const nextCard = () => {
    // if the user has not reached the end of the set 
    if (currentIndex < card_set.length - 1) {
      setTimeout(()=> {
        // reset showFront to true and incriment the currentIndex
        setShowFront(true);
        setCurrentIndex(currentIndex + 1);
      }, 100);
    } else {
      setComplete(true);
    }
  }

  // onCorrect increments the card's timesCorrect value
  const onCorrect = () => {
    console.log("onCorrect called");
    if (card_set[currentIndex].timesCorrect < 3) {
      card_set[currentIndex].timesCorrect = card_set[currentIndex].timesCorrect + 1;
      setNumCorrect(numCorrect+1);
      console.log(numCorrect);
    }
    nextCard();
  }

  // onWrong decrements the card's timesCorrect value
  const onWrong = () => {
    console.log("onWrong called");
    if (card_set[currentIndex].timesCorrect > 0) {
      card_set[currentIndex].timesCorrect = card_set[currentIndex].timesCorrect - 1;
      setNumIncorrect(numIncorrect+1);
      console.log(numIncorrect);
    }
    nextCard();
  }

  return (
    <div className="h-screen">
      <Navbar />
      <div className="container flex flex-col items-center justify-center py-20 h-max">
        <p className="pb-4">{currentIndex + 1} / {card_set.length}</p>
        <Card className="w-[700px] h-[400px] flex items-center justify-center cursor-pointer" onClick={onFlip}>
          {showFront && <p className="text-4xl">{card_set[currentIndex].front}</p>}
          {!showFront && <p className="text-4xl">{card_set[currentIndex].back}</p>}
        </Card>
        {!showFront &&
        <div className="pt-4 flex gap-2">       
          <Button variant="ghost" onClick={onCorrect}>Correct</Button>
          <Button variant="ghost" onClick={onWrong}>Wrong</Button>
        </div>
        }
      </div>
      {complete && <StudyResults topic={topic} set={set} correct={numCorrect} incorrect={numIncorrect}/>}
    </div>
  )
}