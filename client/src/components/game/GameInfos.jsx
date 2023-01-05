import { gameConfig } from "../../_config/gameConfig";
import { motion } from "framer-motion";
import { memo, useEffect, useState } from "react";

const GameInfos = memo(({ timer, score, answerState }) => {
  const [previousScore, setPreviousScore] = useState(score);
  const [scoreUpdate, setScoreUpdate] = useState(0);

  useEffect(() => {
    if (score !== previousScore && score) {
      setScoreUpdate(score - previousScore);
      setTimeout(() => {
        setScoreUpdate(0);
      }, 1000);
      setPreviousScore(score);
    }
  }, [score]);

  return (
    <div className={"w-full flex justify-between mt-2"}>
      <div className={"text-start relative"}>
        <p className={"text-slate-400"}>Score : {score}</p>
        {!!scoreUpdate && (
          <motion.p
            className={"absolute right-0 text-teal-500"}
            initial={{ opacity: 1, y: -10 }}
            animate={{ opacity: 0, y: 40 }}
            transition={{ duration: 1 }}
          >
            +{scoreUpdate}
          </motion.p>
        )}
      </div>
      <div className={"text-end relative"}>
        <p className={"text-slate-400"}>
          Time left : {Math.floor(timer / 1000)}
        </p>
        {answerState === gameConfig.answerState.WRONG && (
          <motion.p
            className={"text-red-500 absolute right-0"}
            initial={{ y: -10, opacity: 1 }}
            animate={{ y: 40, opacity: 0 }}
            transition={{ duration: 1 }}
          >
            -{gameConfig.penalty.wrongAnswer / 1000}
          </motion.p>
        )}
        {answerState === gameConfig.answerState.SKIP && (
          <motion.p
            className={"text-orange-500 absolute right-0"}
            initial={{ y: -10, opacity: 1 }}
            animate={{ y: 40, opacity: 0 }}
            transition={{ duration: 1 }}
          >
            -{gameConfig.penalty.skip / 1000}
          </motion.p>
        )}
      </div>
    </div>
  );
});

export default GameInfos;
