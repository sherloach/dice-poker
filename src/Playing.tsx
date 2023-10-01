import { useState } from "react";
import Dice from "./Dice";

const Playing = () => {
  const [playerHand, setPlayerHand] = useState();
  const [diceFace, setDiceFace] = useState<number | undefined>();

  const rollDice = () => {
    const rng = Math.floor(Math.random() * 6 + 1);
    console.log(rng);
    setDiceFace(rng);
  }

  return (
    <div className="">
      <Dice diceFace={diceFace} />
      <button onClick={rollDice}>Roll Dice</button>
      <p>{diceFace}</p>
    </div>
  )
}

export default Playing;
