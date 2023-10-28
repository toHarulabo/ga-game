import Lottie from "lottie-react";
import nkPEmrGIKe from "../nkPEmrGIKe.json";

type Props = {
  iteration: number;
};

export default function Countdown(props: Props) {
  const { iteration } = props;
  return (
    <>
      <Lottie
        animationData={nkPEmrGIKe}
        loop={true}
        style={{ width: 60, height: 60 }}
      />
      <div className="-ml-10 mt-6 pr-3  bg-white h-20 w-28 rounded-md border border-gray-400 border-b-4 border-r-4">
        <div className="font-kosugi text-xl text-right ">
          残り
          <br />
          <div className="text-4xl">{20 - iteration}回</div>
        </div>
      </div>
    </>
  );
}
