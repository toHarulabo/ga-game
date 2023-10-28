import Sample from "./Sample";
import { useState, useEffect } from "react";
import makeInit from "../MakeInit";
import crossOver from "./CrossOver";
import selectGoodSol from "./selectGoodSol";
import makeComp from "../MakeComp";
import calFittness from "./calFittness";
import empty from "./Empty";
import full from "./Full";
import Lottie from "lottie-react";
import animation_lnu3chq5 from "../animation_lnu3chq5.json";
import Countdown from "./Countdown";
import Score from "./Score";
import Result from "./Result";
import DoraOneLine from "./DoraOneLine";

export const Makedora = () => {
  const [iteration, setIteration] = useState(0); //世代数
  const [bestSol, setBestSol] = useState<number[]>([]); //最良解
  const [bestSolComp, setBestSolComp] = useState<Array<Array<number>>>([]); //最良解分割
  const [bestValue, setBestValue] = useState(0); //最良値
  const [SolList, setSolList] = useState<Array<Array<number>>>([]); //左に表示される解
  const [SolComp, setSolComp] = useState<Array<Array<Array<number>>>>([]); //分割済みの左に表示される解
  const agent = 100; //遺伝子数

  useEffect(() => {
    async function initializeData() {
      const colorlist = [93, 61, 27, 3]; // blue,black,red,yellowのマス数
      const initSolData = await makeInit(full, colorlist, agent);
      setSolList(initSolData[0]);
      setSolComp(initSolData[1]);
    }
    initializeData();
  }, []);

  const onClickCrossOver = (
    array: Array<Array<number>>,
    selectedNum: number
  ) => {
    const swapNum = 92; //交叉点の数
    const childNum = 10; //子孫生成の回数
    const dim = 184;
    let nextChild: any = []; //親も含めた次世代個体候補
    //console.log(array1);
    const child = crossOver(array, swapNum, childNum, dim); //交叉後の個体一覧を記録
    const bestTwoChild = selectGoodSol(child); //選択された個体を含む個体群の中から上位２つを記録

    //全部の羅列と分割解を設定
    setSolList(child);
    setSolComp(makeComp(child, full));

    //最良解の羅列と分割解を設定
    setBestSol(bestTwoChild[0]);
    const bestOneComp = makeComp(bestTwoChild, full);
    setBestSolComp(bestOneComp[0]);
    // 毎回いい値を更新できるわけではないですよ
    setBestValue(calFittness(bestTwoChild[0])); //最良値の設定
    setIteration(iteration + 1); //反復回数の更新
  };
  if (!SolList.length || !SolComp.length) {
    return (
      <div className="flex justify-center" aria-label="読み込み中">
        <div className="animate-spin h-10 w-10 border-4 border-blue-500 rounded-full border-t-transparent"></div>
      </div>
    );
  }

  return (
    <>
      <div className="flex justify-center">
        <div className="flex flex-col">
          <div className="flex justify-start ml-32">
            <Lottie
              animationData={animation_lnu3chq5}
              loop={true}
              style={{ width: 60, height: 60 }}
            />
            <div className="font-kosugi text-3xl my-4">
              どちらかをせんたくしてください
            </div>
            <Lottie
              animationData={animation_lnu3chq5}
              loop={true}
              style={{ width: 60, height: 60 }}
            />
          </div>
          <div className="flex flex-row space-x-8">
            <div className="">
              {empty.map((numlist, index) => (
                <DoraOneLine
                  key={index}
                  empty={empty[index]}
                  full={full[index]}
                  SolComp={SolComp[0][index]} //ぶっちゃけ適当
                />
              ))}
              <button
                className="font-kosugi ml-16 my-3  transition duration-150 ease-in-out bg-green-500 hover:bg-green-400 text-white text-xl font-semibold border-b-4 border-green-600  py-2 px-28 rounded-full"
                onClick={() => onClickCrossOver(SolList, 1)}
              >
                えらぶ
              </button>
            </div>
            <div className="">
              {empty.map((numlist, index) => (
                <DoraOneLine
                  key={index}
                  empty={empty[index]}
                  full={full[index]}
                  SolComp={SolComp[1][index]} //ぶっちゃけ適当
                />
              ))}
              <button
                className="font-kosugi ml-16 my-3 transition duration-150 ease-in-out bg-green-500 hover:bg-green-400 text-white text-xl font-semibold hover:text-white border-b-4 border-green-600  py-2 px-28 rounded-full"
                onClick={() => onClickCrossOver(SolList, 2)}
              >
                えらぶ
              </button>
            </div>
          </div>
        </div>
        <div className="mt-12 ml-4">
          <Sample iteration={iteration} bestSolComp={bestSolComp} />
        </div>
      </div>

      {iteration > 0 && (
        <>
          <div className="flex justify-center -mr-96 ml-32">
            <Countdown iteration={iteration} />

            <div className="relative">
              <div className="font-kosugi text-6xl text-white font-bold ml-16 top-8 z-10 absolute">
                {bestValue}/100%
              </div>
              <div className="-mr-20 -mt-6 top-0 z-0 absolute">
                <Score />
              </div>
            </div>
          </div>
        </>
      )}

      {iteration === 20 && (
        <>
          <div className="fixed top-0 left-0 w-full h-screen bg-black opacity-50 z-20"></div>
          <Result
            bestValue={bestValue}
            iteration={iteration}
            bestSolComp={bestSolComp}
          />
        </>
      )}
    </>
  );
};
