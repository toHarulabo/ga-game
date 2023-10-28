import calFittness from "./calFittness";

export default function selectGoodSol(
  array: Array<Array<number>>
): [number[], number[]] {
  let first = -1;
  let second = -1;
  let goodscore = -1;
  let badscore = -1;
  //ちゃんと全部展開する
  for (let i = 0; i < array.length; i++) {
    let newScore = calFittness(array[i]);
    if (goodscore < newScore) {
      second = first;
      goodscore = newScore;
      first = i;
    } else if (badscore < newScore) {
      badscore = newScore;
      second = i;
    }
  }

  return [array[first], array[second]];
}
