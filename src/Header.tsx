import { Link } from "react-router-dom";
import Lottie from "lottie-react";
import animation_lnvdf1bp from "./animation_lnvdf1bp.json";

export const Header = () => {
  return (
    <>
      <div className="flex justify-center">
        <div className="navbar shadow-md flex justify-center py-3">
          <Lottie
            animationData={animation_lnvdf1bp}
            loop={true}
            style={{ width: 120, height: 120 }}
          />
          <div className="font-kosugi btn btn-ghost normal-case text-6xl h-16">
            <Link to="/">遺伝的アルゴリズムで〇〇を作ろう</Link>
          </div>
          <Lottie
            animationData={animation_lnvdf1bp}
            loop={true}
            style={{ width: 120, height: 120 }}
          />
        </div>
      </div>
    </>
  );
};
