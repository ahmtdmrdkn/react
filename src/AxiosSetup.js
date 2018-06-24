import axios from "axios";

export default {
  setup() {
    // const axiosBaseURL =
    //   process.env.REACT_APP_STAGE === "prod"
    //     ? "KIMBSNDPROD"
    //     : process.env.REACT_APP_STAGE === "test"
    //       ? "KIMBSNDTEST"
    //       : "KIMBSNDDEV";
    // axios.defaults.baseURL = axiosBaseURL;

    axios.defaults.timeout = 15000;

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
