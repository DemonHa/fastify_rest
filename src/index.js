const { build } = require("./app");

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
  }
);

app.listen({ port: 3000 }, function (err, address) {
  if (err) {
    fastify.log.error(err);
    process.exit(1);
  }
  // Server is now listening on ${address}
});
