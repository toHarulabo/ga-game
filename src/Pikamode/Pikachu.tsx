import React from "react";
import { useNavigate } from "react-router-dom";
import Lottie from "lottie-react";
import animation_lnvdnwp1 from "../animation_lnvdnwp1.json";

export const Pikachu = () => {
  const navigation = useNavigate();
  return (
    <>
      <div
        className="card w-96 bg-base-100 shadow-xl hover:brightness-90 cursor-pointer"
        onClick={() => navigation("/Makepika")}
      >
        <figure>
          <img src="/PikaSample.png" alt="Pikachu" />
        </figure>
        <div className="card-body items-center">
          <div className="flex">
            <h2 className="font-kosugi text-3xl text-center card-title">
              ピカチュウ
            </h2>
            <div className="mt-1 ml-1">
              <Lottie
                animationData={animation_lnvdnwp1}
                loop={true}
                style={{ width: 30, height: 30 }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
