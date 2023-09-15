export const getGraphThresholds = (range: [number, number]) => {
  const min = Math.floor(range[0]);
  const max = Math.ceil(range[1]);

  const thresholds = Array.from({ length: max - min + 1 }, (_, i) => i + min);

  return thresholds;
};
