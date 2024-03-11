import React from "react";
import { useNavigate } from "react-router-dom";
import Lottie from "lottie-react";
import animation_ampan from "../animation_ampan.json";

export const Suika = () => {
  const navigation = useNavigate();
  return (
    <>
      <div
        className="card w-96 bg-base-100 shadow-xl hover:brightness-90 cursor-pointer"
        onClick={() => navigation("/ga-game/Makesuika")}
      >
        <figure>
          <img src="/ga-game/SuikaSample.png" alt="Suika" />
        </figure>
        <div className="card-body items-center">
          <div className="flex">
            <h2 className="font-kosugi text-3xl text-center card-title">
              スイカ
            </h2>
          </div>
        </div>
      </div>
    </>
  );
};
