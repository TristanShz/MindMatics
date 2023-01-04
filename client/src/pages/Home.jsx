import { useState } from "react";
import DifficultyFilter from "../components/results/DifficultyFilter";
import Table from "../components/results/Table";
import SelectPlayer from "../components/results/SelectPlayer";
import { authUtils } from "../utils/authUtils";
import Button from "../components/ui/Button";
import { Link } from "react-router-dom";
import { ROUTES } from "../_config/routes";
import TitleBlock from "../components/ui/TitleBlock";
import { gameConfig } from "../_config/gameConfig";

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
            "text-end text-red-500 hover:underline hover:cursor-pointer text-lg"
          }
          onClick={authUtils.logout}
        >
          Log out
        </div>
        <div className={"flex flex-col gap-12"}>
          <TitleBlock />
          <h3>Want to be mentaly challenged ?</h3>
          <Link to={ROUTES.game}>
            <Button large>Start game</Button>
          </Link>
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
            difficulties={gameConfig.difficulties}
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
