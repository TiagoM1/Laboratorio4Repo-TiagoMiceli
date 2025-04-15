require("dotenv").config();
const { get } = require("env-var");

const envs = {
  path: get("PATH_URL").required().default("public").asString(),
  port: get("PORT").required().asPortNumber(),
  mongoUrl: get("MONGODB_URI").required().asString(),
};

module.exports = { envs };
