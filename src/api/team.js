import axios from "axios";

import { BASEURL } from "@/api.js";

export const getTeam = async () => {
    return await axios.get(`${BASEURL}/api/teams`);
};
