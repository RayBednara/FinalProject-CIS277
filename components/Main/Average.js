import store from "/store";

const calcAvg = (sugarsData) =>
  sugarsData.reduce((total, { score }) => {
    let ret = total;
    ret += Number(score);
    return ret;
  }, 0) / sugarsData.length;

export default () => `<p id="avg">${calcAvg(store.data).toFixed(1)}</p>`;