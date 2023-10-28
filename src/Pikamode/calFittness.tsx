import Answer from "./Answer";

export default function calFittness(array: number[]) {
  //ちゃんと全部展開する
  let correct = 0;

  for (let i = 0; i < Answer.length; i++) {
    if (array[i] === Answer[i]) correct++;
  }

  return Math.floor((correct * 1000) / 184) / 10;
}
