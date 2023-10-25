import ShuffleArray from "./ShuffleArray";
import makeComp from "./MakeComp";

export default function makeInit(
  full: number[][],
  colorlist: number[],
  agent: number
): [number[][], number[][][]] {
  let initSolList: Array<Array<number>> = []; //初期解の羅列
  let initSolComp: Array<Array<Array<number>>> = []; //分割された初期解
  let wanline: Array<number> = [];

  //初期解の生成
  for (let i = 0; i < colorlist.length; i++) {
    const count = colorlist[i];
    for (let j = 0; j < count; j++) {
      wanline.push(i + 1);
    }
  }
  //個体群の生成
  for (let i = 0; i < agent; i++) {
    initSolList.push(ShuffleArray(wanline));
  }
  initSolComp = makeComp(initSolList, full);
  return [initSolList, initSolComp];
}
