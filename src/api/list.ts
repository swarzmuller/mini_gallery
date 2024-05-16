import { CLIENT_ID } from "./constans";
import api from "./interseptors";

const URL_PATH = `/photos/?client_id=${CLIENT_ID}&per_page=30&page=`;

export const getList = async (page: number, query?: string | null) => {
  if (query) {
    const response = await api.get(`/search${URL_PATH}${page}&query=${query}`);
    return { data: response.data.results, total: response.data.total };
  }

  const response = await api.get(`${URL_PATH}${page}`);
  return { data: response.data, total: response.headers["x-total"] };
};

export const getPhoto = async (slug: string) => {
  const response = await api.get(`/photos/${slug}/?client_id=${CLIENT_ID}`);
  return response.data;
};
