const { default: fastifySwagger } = require("@fastify/swagger");
const fastify = require("fastify");
const postgress = require("@fastify/postgres");

const { todo } = require("./routes/todo");
const { items } = require("./routes/v2/items");

const build = (opts = {}, optSwagger = {}, optPostgress) => {
  const app = fastify(opts);

  app.register(fastifySwagger, optSwagger);
  app.register(todo, { prefix: "/todo" });
  app.register(items, { prefix: "/v2/items" });
  app.register(postgress, optPostgress);
  return app;
};

module.exports = { build };
