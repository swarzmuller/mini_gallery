import { CLIENT_ID } from "./constans";
import api from "./interseptors";

export const getList = async () => {
   const response = await api.get(`?client_id=${CLIENT_ID}`);
   return response.data
}