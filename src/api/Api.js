import axios from "axios";

export const MainApi = axios.create({
  baseURL: "https://dummyjson.com",
  headers: {
    Auth: "User one"
  }
});


export const AdminApi = axios.create({
  baseURL: "https://admin.dummyjson.com",
});
