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


export default ({ sugarLevel, comment }) => `
  <tr data-level=${assignLevelRating(sugarLevel)}>
    <td>${sugarLevel}</td>
    <td>${comment}</td>
  </tr>
`;