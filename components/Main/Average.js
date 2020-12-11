import store from "/store";

const assignLevelRating = (sugarLevel) => {
  if (sugarLevel >= 70 && sugarLevel <120) {
    return "inRange";
  }
  if (sugarLevel >= 120) {
    return "highLvl";
  }
  if (sugarLevel <70) {
    return "lowLvl";
  }
}

const calcAvg = (sugarsData) =>
  sugarsData.reduce((total, { sugarLevel }) => {
    let ret = total;
    ret += Number(sugarLevel);
    return ret;
  }, 0) / sugarsData.length;

export default () => `<p id="avg" data-level=${assignLevelRating(calcAvg(store.data))}>${calcAvg(store.data).toFixed(1)}</p>`;