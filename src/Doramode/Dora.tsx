import React from "react";
import { useNavigate } from "react-router-dom";
import Lottie from "lottie-react";
import animation_dora from "../animation_dora.json";

export const Dora = () => {
  const navigation = useNavigate();
  return (
    <>
      <div
        className="card w-96 bg-base-100 shadow-xl hover:brightness-90 cursor-pointer"
        onClick={() => navigation("/Makedora")}
      >
        <figure>
          <img src="/DoraSample.png" alt="Dora" />
        </figure>
        <div className="card-body items-center">
          <div className="flex">
            <h2 className="font-kosugi text-3xl text-center card-title ml-10">
              ドラえもん
            </h2>
            <div className="-my-10 -ml-5">
              <Lottie
                animationData={animation_dora}
                loop={true}
                style={{ width: 120, height: 120 }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
