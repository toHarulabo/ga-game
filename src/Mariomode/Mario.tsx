import React from "react";
import { useNavigate } from "react-router-dom";
import Lottie from "lottie-react";
import animation_mario from "../animation_mario.json";

export const Mario = () => {
  const navigation = useNavigate();
  return (
    <>
      <div
        className="card w-96 bg-base-100 shadow-xl hover:brightness-90 cursor-pointer"
        onClick={() => navigation("/Makemario")}
      >
        <figure>
          <img src="/MarioSample.png" alt="Mario" />
        </figure>
        <div className="card-body items-center">
          <div className="flex">
            <h2 className="font-kosugi text-3xl text-center card-title ml-20">
              マリオ
            </h2>
            <div className="-my-20 ml-1">
              <Lottie
                animationData={animation_mario}
                loop={true}
                style={{ width: 130, height: 130 }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
