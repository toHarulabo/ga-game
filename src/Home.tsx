import { Pikachu } from "./Pikamode/Pikachu";
import { Enso } from "./Ensomode/Enso";
import { Micky } from "./Mickymode/Micky";
import { Dora } from "./Doramode/Dora";
import { Mario } from "./Mariomode/Mario";
import { Kirby } from "./Kirbymode/Kirby";
import { Ampan } from "./Ampanmode/Ampan";
import { Pom } from "./Pommode/Pom";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <>
      <div className="flex justify-end">
        <Link to="/ga-game/Inst">
          <button className="rounded-full font-kosugi btn text-xl mt-8 mr-8">
            せつめいをみる
          </button>
        </Link>
      </div>

      <div className="flex justify-center space-x-4 px-4 mt-4">
        <div className="grid grid-cols-4 gap-4">
          <Pikachu />
          <Micky />
          <Dora />
          <Mario />
          <Kirby />
          <Ampan />
          <Pom />
          <Enso />
        </div>
      </div>
    </>
  );
};
