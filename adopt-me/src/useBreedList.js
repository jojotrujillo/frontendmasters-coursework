import { useQuery } from "@tanstack/react-query";
import fetchBreedList from "./fetchBreedList";

export default function useBreedList(animal) {
  const results = useQuery(["breeds", animal], fetchBreedList);

  // if there's a result, return the data, otherwise return an empty array
  return [results?.data?.breeds ?? [], results.status];
}
