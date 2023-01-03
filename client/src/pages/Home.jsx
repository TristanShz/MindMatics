import { authUtils } from "../utils/authUtils";

const Home = () => {
  return (
    <div className={"w-full h-full"}>
      <div
        className={"text-end text-red-500 hover:underline hover:cursor-pointer"}
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
      </div>
    </div>
  );
};

export default Home;
