import axios from "axios";

axios.defaults.validateStatus = () => true;
export const urlBase = 'https://grupo-3-devops.onrender.com/'; 


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