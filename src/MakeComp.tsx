export default function makeComp(
  SolList: Array<Array<number>>,
  full: number[][]
) {
  let SolComp: Array<Array<Array<number>>> = []; //分割された解

  for (let j = 0; j < SolList.length; j++) {
    let tempComp: Array<Array<number>> = [];
    let count = 0;
    for (let i = 0; i < full.length; i++) {
      const total = full[i].reduce((sum, element) => sum + element, 0);
      if (total !== 0) {
        const fullObj1 = SolList[j].slice(count, count + total);
        tempComp.push(fullObj1);
        count = count + total;
      } else {
        tempComp.push([]);
      }
    }
    SolComp.push(tempComp); //この時点で一つの羅列解のCompリストが作られている。
  }

  return SolComp;
}
