require("dotenv").config();

const envalid = require("envalid");

module.exports = envalid.cleanEnv(process.env, {
  POSTGRES_DB_CONNECTION_STRING: envalid.str({}),
  POSTGRES_TEST_DB_CONNECTION_STRING: envalid.str({}),
  WEB_APP_HOST_PORT: envalid.str({ default: 8080 }),
  // ADMINER_HOST_PORT: envalid.str({}),
});
