import { fetcher } from "../utils/fetcher";
import { WINE_API_ENDPOINT } from "../constants";

import useSWR from "swr";

export const useWineData = (path: string) => {
  return useSWR(`${WINE_API_ENDPOINT}${path}`, fetcher)
}
