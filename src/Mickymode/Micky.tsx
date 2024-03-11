import React from "react";
import { useNavigate } from "react-router-dom";
import Lottie from "lottie-react";
import animation_micky from "../animation_micky.json";

export const Micky = () => {
  const navigation = useNavigate();
  return (
    <>
      <div
        className="card w-96 bg-base-100 shadow-xl hover:brightness-90 cursor-pointer"
        onClick={() => navigation("/ga-game/Makemicky")}
      >
        <figure>
          <img src="/ga-game/MickySample.png" alt="Pikachu" />
        </figure>
        <div className="card-body items-center">
          <div className="flex">
            <h2 className="font-kosugi text-3xl text-center card-title">
              ねずみ
            </h2>
            <div className="mt-1 ml-1">
              <Lottie
                animationData={animation_micky}
                loop={true}
                style={{ width: 40, height: 40 }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
