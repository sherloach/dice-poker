import { useEffect, useState } from "react";
import { invoke } from "@tauri-apps/api/tauri";
import Dice from "./Dice";

const RANK_NAME = ["Nothing special", "One pair", "Two pairs", "Three of a kind", "Full house", "Four of a kind", "Five of a kind"];

const Playing = () => {
  const [playerHand, setPlayerHand] = useState<number[]>([]);
  const [diceFace, setDiceFace] = useState<number | undefined>();
  const [rank, setRank] = useState<number>(0);

  const rollDice = () => {
    const rng = Math.floor(Math.random() * 6 + 1);
    setDiceFace(rng);
    setPlayerHand([...playerHand, rng]);
  }

  const rankHand = async () => {
    if (playerHand.length === 5) {
      const rank: number = await invoke("rank_hand", { hand: playerHand });
      setRank(rank);
    }
  }

  const playAgain = () => {
    setDiceFace(0);
    setPlayerHand([]);
    setRank(0);
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
        ) : (
          <div>
            <p className="uppercase text-lg font-bold">{RANK_NAME[rank]}</p>
            <button className="w-36 mt-3" onClick={playAgain}>Play again</button>
          </div>
        )
      }
      <div className="relative top-60">
        <Dice diceFace={diceFace} />
      </div>
      <div>
        {playerHand}
      </div>
    </div>
  )
}

export default Playing;
