const { build } = require("./app");
const env = require("./config/env");

const app = build(
  { logger: true },
  {
    exposeRoute: true,
    routePrefix: "/docs",
    swagger: {
      info: {
        title: "Swagger Docs",
        description: "Testing the Fastify swagger API",
        version: "0.1.0",
      },
    },
  },
  {
    connectionString: env.POSTGRES_DB_CONNECTION_STRING,
  }
);

app.listen(Number(env.WEB_APP_HOST_PORT), "0.0.0.0", (err, address) => {
  if (err) {
    console.log(err);
    process.exit(1);
  }
  console.log(`Server is now listening on ${address}`);
});
