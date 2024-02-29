// api.js
import axios from "axios";

const baseURL = "http://localhost:8000/api"; // Update with your base URL

const axiosInstance = axios.create({
  baseURL,
});

export const makeRequest = async (url, method = "get", data = null) => {
  try {
    let response;
    switch (method.toLowerCase()) {
      case "get":
        response = await axiosInstance.get(url);
        break;
      case "post":
        response = await axiosInstance.post(url, data);
        break;
      case "put":
        response = await axiosInstance.put(url, data);
        break;
      case "delete":
        response = await axiosInstance.delete(url);
        break;
      default:
        throw new Error("Invalid HTTP method");
    }
    return response.data;
  } catch (error) {
    throw error.response.data.message; 
  }
};
