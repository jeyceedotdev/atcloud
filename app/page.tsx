import Image from "next/image";
import { CurrentWeatherResponse } from "./weather.types";

export const runtime = "edge"

export default async function Home() {
  const res = await fetch("/api/weather");

  if (!res.ok) {
    throw new Error("Failed to get the latest weather data.");
  }

  const data = await res.json() as CurrentWeatherResponse;

  return (
    <div>
      <h1>{data.base}</h1>
      <p>Temperature</p>
    </div>
  );
}