import { useState } from "react";
import DifficultyFilter from "../components/results/DifficultyFilter";
import Table from "../components/results/Table";
import SelectPlayer from "../components/results/SelectPlayer";
import { authUtils } from "../utils/authUtils";
import Button from "../components/ui/Button";
import { Link } from "react-router-dom";
import { ROUTES } from "../_config/routes";
import TitleBlock from "../components/ui/TitleBlock";
import { useEffect } from "react";
import { useSession } from "../context/SessionContext";



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

  const { session } = useSession();
  const user = session.username;
  console.log(user);

  console.log(scores);

  return (
    <>
      <div className={"w-full mb-16 sm:mb-20 md:md-32 lg:mb-48 xl:mb-64"}>
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
        <div className="flex justify-between gap-2">
          <SelectPlayer
            setPlayerSelected={setPlayerSelected}
            user={user.username}
            playerSelected={playerSelected}
          />
          <DifficultyFilter
            setDifficultySelected={setDifficultySelected}
            difficultySelected={difficultySelected}
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
