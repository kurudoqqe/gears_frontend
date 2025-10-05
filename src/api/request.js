import axios from "axios";

import { BASEURL } from "@/api.js";

export const sendRequest = async (data) => {
  return await axios.post(`${BASEURL}/api/request`, data);
};
