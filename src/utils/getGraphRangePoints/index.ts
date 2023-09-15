export const getGraphRangePoints = (data: number[]): [number, number] => {
  const sortedData = [...data].sort((a, b) => a - b);

  const min = Math.round(sortedData[0]);
  const max = Math.round(sortedData[sortedData.length - 1]);

  return [min, max];
};
