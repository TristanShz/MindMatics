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
import { useEffect } from "react";

const user = {
  pseudo: "player 1",
};

// const scores = [
//   {
//     user: {
//       pseudo: "player 1",
//     },
//     score: 24,
//     difficulty: 'NORMAL',
//   },
//   {
//     user: {
//       pseudo: "player 2",
//     },
//     score: 45,
//     difficulty: 'HARD',
//   },
//   {
//     user: {
//       pseudo: "player 1",
//     },
//     score: 5,
//     difficulty: 'EASY',
//   },
//   {
//     user: {
//       pseudo: "player 1",
//     },
//     score: 67,
//     difficulty: 'NORMAL',
//   },
//   {
//     user: {
//       pseudo: "player 1",
//     },
//     score: 78,
//     difficulty: 'NORMAL',
//   },
//   {
//     user: {
//       pseudo: "player 2",
//     },
//     score: 2,
//     difficulty: 'HARD',
//   },
//   {
//     user: {
//       pseudo: "player 1",
//     },
//     score: 167,
//     difficulty: 'HARD',
//   },
//   {
//     user: {
//       pseudo: "player 3",
//     },
//     score: 90,
//     difficulty: 'HARD',
//   },
// ];

const Home = () => {
  const [playerSelected, setPlayerSelected] = useState();
  const [difficultySelected, setDifficultySelected] = useState();
  const [scores, setScores] = useState();

  const fetchData = async () => {
    const response = await fetch('http://localhost:3001/api/v1/results/').then(res => res.json());
    console.log(response.data);
    setScores(response.data);
  }

  useEffect(() => {
    fetchData();
  }, [])

  console.log(scores);

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
