import getRandomArray from "../getRandomArray";
import selectGoodSol from "./selectGoodSol";
//親個体を２つ選択して子孫を残した場合、その２個体に似た解が出るのみで他の親個体が考慮されないので収束早まる。
export default function crossOver(
  array: Array<Array<number>>,
  n1: number, //交叉点の数
  n2: number, //子孫の数
  dim: number //遺伝子数
) {
  const childList: number[][] = [];
  const bst: Array<Array<number>> = selectGoodSol(array);
  const target: Array<number> = bst[0];
  let arrayCopy: Array<Array<number>> = [];

  let indexToRemove = array.findIndex((arr) =>
    arr.every((value, index) => value === target[index])
  );

  if (indexToRemove !== -1) {
    array.splice(indexToRemove, 1);
  }
  arrayCopy = array;
  console.log(array, arrayCopy);

  // 個体数繰り返す
  for (let j = 0; j < array.length; j = j + 2) {
    const crossPoint = getRandomArray(n1, dim); //0から229までのn個のランダムな数値を含む配列を作成
    //ここが割と重要 bestと他個体の交叉を10回するとか？
    let array1Copy: any = [...bst[0]]; // array1のコピーを作成
    let array2Copy: any = [...arrayCopy[j]]; // array2のコピーを作成

    crossPoint.map((crossPoint, idx) => {
      [array1Copy[crossPoint], array2Copy[crossPoint]] = [
        array2Copy[crossPoint],
        array1Copy[crossPoint],
      ];
    });
    childList.push(array1Copy);
    childList.push(array2Copy);
  }

  return childList;
}
