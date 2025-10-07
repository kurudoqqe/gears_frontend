import axios from "axios";

import { BASEURL } from "@/api.js";

export const getServices = async () => {
  return await axios.get(`${BASEURL}/api/services`);
};

export const sendService = async (data) => {
  return await axios.post(`${BASEURL}/api/services`, data);
};
