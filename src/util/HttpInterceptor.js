import axios from "axios";

export default {
  setupInterceptor() {
    axios.interceptors.request.use(function(config) {
      return config;
    });
    axios.interceptors.response.use(
      response => {
        if (response.headers["content-type"].indexOf("application/json") >= 0) {
          if (
            response.data.hasOwnProperty("success") &&
            response.data.success === false
          ) {
            return Promise.reject(
              response.data.hasOwnProperty("message")
                ? response.data.message
                : "Hata meydana geldi !"
            );
          }
        }
        return response.data;
      },
      err => {
        return Promise.reject(err);
      }
    );
  }
};
