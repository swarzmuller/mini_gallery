import { CLIENT_ID } from "./constans";
import api from "./interseptors";

export const getList = async (page: number, query?: string) => {
   if(query) {
      const response = await api.get(`/search/photos/?page=${page}&per_page=30&query=${query}&client_id=${CLIENT_ID}`);
      return {data: response.data.results, total: response.data.total}
   }

   const response = await api.get(`/photos/?client_id=${CLIENT_ID}&per_page=30&page=${page}`);
   return {data: response.data, total: response.headers['x-total']}
}

export const getPhoto = async (slug: string) => {
   const response = await api.get(`/photos/${slug}/?client_id=${CLIENT_ID}`);
   return response.data
}