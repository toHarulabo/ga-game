import { Pikachu } from "./Pikamode/Pikachu";
import { Enso } from "./Ensomode/Enso";
import { Micky } from "./Mickymode/Micky";
import { Dora } from "./Doramode/Dora";
import { Mario } from "./Mariomode/Mario";
import { Kirby } from "./Kirbymode/Kirby";
import { Ampan } from "./Ampanmode/Ampan";
import { Pom } from "./Pommode/Pom";
import { Link } from "react-router-dom";
import { Hari } from "./Harimode/Hari";
import { Kabocha } from "./Kabochamode/Kabocha";
import { Pengin } from "./Penginmode/Pengin";
import { Suika } from "./Suikamode/Suika";
import { Hitachi } from "./Hitachimode/Hitachi";

export const CopyrightFree = () => {
  return (
    <>
      <div className="flex justify-end">
        <Link to="/ga-game/InstFree">
          <button className="rounded-full font-kosugi btn text-xl mt-8 mr-8">
            せつめいをみる
          </button>
        </Link>
      </div>

      <div className="flex justify-center space-x-4 px-4 mt-4">
        <div className="grid grid-cols-3 gap-3">
          <Suika />
          <Hari />
          <Kabocha />
          <Pengin />
          <Hitachi />
          <Enso />
        </div>
      </div>
    </>
  );
};
