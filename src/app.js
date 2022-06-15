const fastify = require("fastify");

const { todo } = require("./routes/todo");

const build = (opts = {}) => {
  const app = fastify(opts);

  app.register(todo, { prefix: "/todo" });
  return app;
};

module.exports = { build };
