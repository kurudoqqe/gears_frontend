import axios from "axios";

import { BASEURL } from "@/api.js";

export const getBlocksPage = async (page = 1) => {
  return await axios.get(`${BASEURL}/api/blog`, {
    params: {
      page: page,
    },
  });
};
