export const getCloseToClosePercentage = (data: number[][]) => {
  let percentageArray: number[] = [];

  data.forEach((candle, index) => {
    if (index === 0) return;

    const previousCandle = data[index - 1];

    const closeToClosePercentage =
      ((candle[2] - previousCandle[2]) / previousCandle[4]) * 100;

    percentageArray.push(Number(closeToClosePercentage.toFixed(2)));
  });

  return percentageArray;
};
