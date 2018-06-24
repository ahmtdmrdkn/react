import axios from "axios";

const dev = {
  env: "dev"
};

const test = {
  env: "test"
};

const prod = {
  env: "prod"
};

const controllerMappings = {
  basinDuyurulari: {
    listele: "/listele"
  }
};

const config =
  process.env.REACT_APP_STAGE === "prod"
    ? prod
    : process.env.REACT_APP_STAGE === "test"
      ? test
      : dev;

export default {
  controllerMappings,
  ...config
};
