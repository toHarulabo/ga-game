export default function ShuffleArray(array: any) {
  return array.slice().sort(() => Math.random() - Math.random());
}
