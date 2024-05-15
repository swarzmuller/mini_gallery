import { CLIENT_ID } from "./constans";
import api from "./interseptors";

export const getList = async (page: number) => {
   const response = await api.get(`?client_id=${CLIENT_ID}&per_page=30&page=${page}`);

   console.log(response)
   return {data: response.data, total: response.headers['x-total']}
}