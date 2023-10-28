import React from "react";
import { useNavigate } from "react-router-dom";
import Lottie from "lottie-react";
import animation_kirby from "../animation_kirby.json";

export const Kirby = () => {
  const navigation = useNavigate();
  return (
    <>
      <div
        className="card w-96 bg-base-100 shadow-xl hover:brightness-90 cursor-pointer"
        onClick={() => navigation("/Makekirby")}
      >
        <figure>
          <img src="/KirbySample.png" alt="Kirby" />
        </figure>
        <div className="card-body items-center">
          <div className="flex">
            <h2 className="font-kosugi text-3xl text-center card-title">
              ピンク
            </h2>
            <div className="-my-3 ml-1">
              <Lottie
                animationData={animation_kirby}
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
