"use client";

import { monthlyCandleData } from "../../public/data/monthlyCandleData";
import { getOpenToOpenPercentage } from "@/utils/getOpenToOpenPercentage";

import { Histogram } from "@/components/Histogram";
import { dailyCandleData } from "../../public/data/dailyCandleData";
import { weeklyCandleData } from "../../public/data/weeklyCandleData";
import { fourHourCandleData } from "../../public/data/4hourCandleData";

export default function Home() {
  const data = getOpenToOpenPercentage(dailyCandleData);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <Histogram data={data} width={800} height={500} />
      </div>
    </main>
  );
}
