import { useState } from "react";
import DifficultyFilter from "../components/results/DifficultyFilter";
import Table from "../components/results/Table";
import SelectPlayer from "../components/results/SelectPlayer";
import { DIFFICULTY } from "../_config/appConfig";
import { authUtils } from "../utils/authUtils";
import Button from "../components/ui/Button";

const user = {
  pseudo: "player 1",
};

const scores = [
  {
    user: {
      pseudo: "player 1",
    },
    score: 24,
    difficulty: 2,
  },
  {
    user: {
      pseudo: "player 2",
    },
    score: 45,
    difficulty: 1,
  },
  {
    user: {
      pseudo: "player 1",
    },
    score: 5,
    difficulty: 3,
  },
];

const Home = () => {
  const [playerSelected, setPlayerSelected] = useState();
  const [difficultySelected, setDifficultySelected] = useState();

  return (
    <>
      <div className={"w-full h-[calc(100vh-300px)]"}>
        <div
          className={
            "text-end text-red-500 hover:underline hover:cursor-pointer"
          }
          onClick={authUtils.logout}
        >
          Log out
        </div>
        <div className={"space-y-12"}>
          <h1>Mindmatics</h1>
          <h2
            className={
              "text-transparent bg-clip-text bg-gradient-to-l from-violet-500 to-teal-500"
            }
          >
            Mental math <br /> challenge
          </h2>
          <h3>Want to be mentaly challenged ?</h3>
          <Button large>Start game</Button>
        </div>
      </div>
      <div className={"flex flex-col gap-8"}>
        <h2>Classement</h2>
        <div className="flex justify-around">
          <SelectPlayer
            setPlayerSelected={setPlayerSelected}
            user={user.pseudo}
            playerSelected={playerSelected}
          />
          <DifficultyFilter
            difficulties={DIFFICULTY}
            setDifficultySelected={setDifficultySelected}
          />
        </div>
        <Table
          scores={scores}
          playerSelected={playerSelected}
          difficultySelected={difficultySelected}
        />
      </div>
    </>
  );
};

export default Home;
