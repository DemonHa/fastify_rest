const { default: fastifySwagger } = require("@fastify/swagger");
const fastify = require("fastify");

const { todo } = require("./routes/todo");

const build = (opts = {}, optSwagger = {}) => {
  const app = fastify(opts);

  app.register(fastifySwagger, optSwagger);
  app.register(todo, { prefix: "/todo" });
  return app;
};

module.exports = { build };
