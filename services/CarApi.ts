import axios from "axios";

export const fetchCars = axios.create({
  method: "GET",
  baseURL: process.env.NEXT_PUBLIC_CAR_API_URL,
  params: { limit: "20" },
  headers: {
    "X-RapidAPI-Key": process.env.NEXT_PUBLIC_RAPIDAPI_KEY,
    "X-RapidAPI-Host": process.env.NEXT_PUBLIC_RAPIDAPI_HOST,
  },
});
