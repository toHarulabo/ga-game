export default function getRandomArray(n: number, dim: number) {
  const range = Array.from({ length: dim }, (_, index) => index); // 0からdimまでの数値を含む配列を作成
  const shuffled = range.sort(() => Math.random() - 0.5); // 配列をランダムにシャッフル
  return shuffled.slice(0, n); // 先頭からn個の要素を取得
}
