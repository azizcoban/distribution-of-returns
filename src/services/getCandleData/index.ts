import client from "../client";
import { RequestOptions } from "../types";

export const getCandleData = async (
  symbol: string,
  interval: string,
  options: RequestOptions
) => {
  const res = await client.get(`/v2/${symbol}/${interval}`, options);

  return res.data;
};
