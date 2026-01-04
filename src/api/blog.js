import axios from "axios";

import { BASEURL } from "@/api.js";

export const getBlocksPage = async (page = 1, perPage = 4) => {
  return await axios.get(`${BASEURL}/api/blog`, {
    params: {
      per_page: perPage,
      page: page,
    },
  });
};
