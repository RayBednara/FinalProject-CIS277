import TRow from "./TRow"
import store from "/store"

const renderRows = (sugarLevels) =>
  sugarLevels.map((level) => TRow(level)).join("");

export default () => `
  <tbody>
    ${renderRows(store.data)}
  </tbody>
`;