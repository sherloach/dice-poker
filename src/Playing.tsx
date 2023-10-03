import { useEffect, useState } from "react";
import { invoke } from "@tauri-apps/api/tauri";
import Dice from "./Dice";

const Playing = () => {
  const [playerHand, setPlayerHand] = useState<number[]>([]);
  const [diceFace, setDiceFace] = useState<number | undefined>();

  const rollDice = () => {
    const rng = Math.floor(Math.random() * 6 + 1);
    setDiceFace(rng);
    setPlayerHand([...playerHand, rng]);
  }

  const rankHand = async () => {
    if (playerHand.length === 5) {
      const rank = await invoke("rank_hand", { hand: playerHand });
      console.log(rank);
    }
  }

  useEffect(() => {
    rankHand();
  }, [playerHand])

  return (
    <div className="flex flex-col justify-center items-center gap-6 text-center">
      <p className="">You have {5 - playerHand.length} times to roll dice</p>
      {
        playerHand.length !== 5 ? (
          <button className="w-36" onClick={rollDice}>Roll Dice</button>
        ) : null
      }
      <div className="relative top-40">
        <Dice diceFace={diceFace} />
      </div>
      <div>
        {playerHand}
      </div>
    </div>
  )
}

export default Playing;
