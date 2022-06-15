const todo = (fastify, _, done) => {
  fastify.get("/", (req, res) => {
    res.send({ message: "Hi, mom!" });
  });

  done();
};

module.exports = {
  todo,
};
