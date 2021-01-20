import axios from "axios";

axios.defaults.baseURL = "https://swapi.dev/api";

export const fetchData = async (path = "/people", id = "1") => {
  try {
    const { data } = await axios.get(`${path}/${id}`);
    return data;
  } catch (error) {
    throw new Error("No such object");
  }
};
