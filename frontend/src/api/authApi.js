import axiosClient from "./axiosClient";

export const loginApi = async (credentials) => {
  const res = await axiosClient.post("/auth/login", credentials);
  return res.data;
};
