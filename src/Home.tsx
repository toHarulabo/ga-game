import { Pikachu } from "./Pikamode/Pikachu";
import { Enso } from "./Ensomode/Enso";

export const Home = () => {
  return (
    <>
      <div className="flex space-x-4 pl-4 mt-4">
        <Pikachu />
        <Enso />
      </div>
    </>
  );
};
