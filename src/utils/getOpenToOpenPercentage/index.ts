export const getOpenToOpenPercentage = (data: number[][]) => {
  let percentageArray: number[] = [];

  data.forEach((candle, index) => {
    if (index === 0) return;

    const previousCandle = data[index - 1];

    const openToOpenPercentage =
      ((candle[1] - previousCandle[1]) / previousCandle[1]) * 100;

    percentageArray.push(Number(openToOpenPercentage.toFixed(2)));
  });

  return percentageArray;
};
