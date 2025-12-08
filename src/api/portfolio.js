import axios from "axios";

import { BASEURL } from "@/api.js";

export const getPortfolio = async () => {
    return await axios.get(`${BASEURL}/api/projects`);
};
