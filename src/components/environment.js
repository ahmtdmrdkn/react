const projectName = "KIMBSND";

const controllerMappings = {
  backend: {
    basinduyurulari: {
      url: ""
    }
  }
};

const dev = {
  baseUrl: "dev"
};

const test = {
  baseUrl: "test"
};

const prod = {
  baseUrl: "prod"
};

const config =
  process.env.REACT_APP_STAGE.indexOf("prod") >= 0
    ? prod
    : process.env.REACT_APP_STAGE.indexOf("test") >= 0
      ? test
      : dev;

export default {
  ...config
};
