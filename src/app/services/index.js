import axios from "axios";

axios.defaults.validateStatus = () => true;
const urlBase = 'http://localhost:4000/';

export const getResponse = async (url) => {
  try {
   
    const response = await axios.get(`${urlBase}${url}`);
    return response;
  } catch (error) {
    return error;
  }
};

export const postResponse = async (url, data) => {
  try {
    
    const response = await axios.post(`${urlBase}${url}`, data);
    return response;
  } catch (error) {
    return error;
  }
};