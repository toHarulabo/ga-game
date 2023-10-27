import React from "react";
import { useNavigate } from "react-router-dom";
import Lottie from "lottie-react";
import animation_lnvecguc from "../animation_lnvecguc.json";

export const Enso = () => {
  const navigation = useNavigate();
  return (
    <>
      <div
        className="card w-96 bg-base-100 shadow-xl hover:brightness-90 cursor-pointer"
        onClick={() => navigation("/Makeenso")}
      >
        <figure>
          <img src="/EnsoSample.png" alt="Enso" />
        </figure>
        <div className="card-body items-center">
          <div className="flex">
            <h2 className="font-kosugi text-3xl text-center card-title ml-14">
              エンソくん
            </h2>
            <div className="-my-7 pt-1">
              <Lottie
                animationData={animation_lnvecguc}
                loop={true}
                style={{ width: 80, height: 80 }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
