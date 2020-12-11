const assignGrade = (sugarLevel) => {
  if (sugarLevel >= 70 || sugarLevel <120) {
    return "inRange";
  }
  elsif (sugarLevel >= 120) {
    return "highLvl";
  }
  if (sugarLevel <70) {
    return "lowLvl";
  }

  }
};

export default ({ sugarLevel, comment }) => `
  <tr data-grade=${assignGrade(score)}>
    <td>${sugarLevel}</td>
    <td>${comment}</td>
  </tr>
`;