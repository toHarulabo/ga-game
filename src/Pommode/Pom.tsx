import React from "react";
import { useNavigate } from "react-router-dom";
import Lottie from "lottie-react";
import animation_pom from "../animation_pom.json";

export const Pom = () => {
  const navigation = useNavigate();
  return (
    <>
      <div
        className="card w-96 bg-base-100 shadow-xl hover:brightness-90 cursor-pointer"
        onClick={() => navigation("/Makepom")}
      >
        <figure>
          <img src="/PomSample.png" alt="pom" />
        </figure>
        <div className="card-body items-center">
          <div className="flex">
            <h2 className="font-kosugi text-3xl text-center card-title">
              ポムポムプリン
            </h2>
            <div className="-my-2 ml-1">
              <Lottie
                animationData={animation_pom}
                loop={true}
                style={{ width: 50, height: 50 }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
