import axios from "axios";
class Client {
  async getData(url) {
    try {
      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }

  async postData(url, data, headers) {
    try {
      const response = await axios.post(url, data, headers);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }
}

export { Client };
