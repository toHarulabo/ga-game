import Lottie from "lottie-react";
import qAV23GtEgo from "../qAV23GtEgo.json";

export default function Score() {
  return (
    <>
      <div className="flex-row">
        <div className="font-kosugi text-2xl ml-28">あなたのスコア</div>
        <div className="-mt-36">
          <Lottie
            animationData={qAV23GtEgo}
            loop={true}
            style={{ width: 400, height: 400 }}
          />
        </div>
      </div>
    </>
  );
}
