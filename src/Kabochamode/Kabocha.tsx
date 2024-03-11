import React from "react";
import { useNavigate } from "react-router-dom";
import Lottie from "lottie-react";
import animation_ampan from "../animation_ampan.json";

export const Kabocha = () => {
  const navigation = useNavigate();
  return (
    <>
      <div
        className="card w-96 bg-base-100 shadow-xl hover:brightness-90 cursor-pointer"
        onClick={() => navigation("/ga-game/Makekabocha")}
      >
        <figure>
          <img src="/ga-game/KabochaSample.png" alt="Kabocha" />
        </figure>
        <div className="card-body items-center">
          <div className="flex">
            <h2 className="font-kosugi text-3xl text-center card-title">
              カボチャ
            </h2>
          </div>
        </div>
      </div>
    </>
  );
};
