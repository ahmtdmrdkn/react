import axios from "axios";

export default {
  setupInterceptor() {
    axios.interceptors.request.use(function(config) {
      return config;
    });
    axios.interceptors.response.use(
      response => {
        return response.data;
      },
      err => {
        return Promise.reject(err);
      }
    );
  }
};
