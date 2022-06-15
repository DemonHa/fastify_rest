const { database } = require("./../database");

const get_options = {
  schema: {
    response: {
      200: {
        type: "array",
        items: {
          type: "object",
          properties: {
            id: { type: "integer" },
            message: { type: "string" },
          },
        },
      },
    },
  },
};

const get_todo_options = {
  schema: {
    response: {
      200: {
        type: "object",
        properties: {
          id: { type: "integer" },
          message: { type: "string" },
        },
      },
    },
  },
};

const post_options = {
  schema: {
    body: {
      required: ["message"],
      properties: {
        message: { type: "string" },
      },
    },
    response: {
      201: {
        type: "object",
        properties: {
          id: { type: "integer" },
          message: { type: "string" },
        },
      },
    },
  },
};

const put_options = {
  schema: {
    body: {
      required: ["message"],
      properties: {
        message: { type: "string" },
      },
    },
    params: {
      type: "object",
      properties: {
        id: { type: "integer" },
      },
    },
    response: {
      201: {
        type: "object",
        properties: {
          id: { type: "integer" },
          message: { type: "string" },
        },
      },
    },
  },
};

const delete_options = {
  schema: {
    params: {
      type: "object",
      properties: {
        id: { type: "integer" },
      },
    },
    response: {
      200: {
        type: "object",
        properties: {
          message: { type: "string" },
        },
      },
    },
  },
};

const todo = (fastify, _, done) => {
  fastify.get("/", get_options, (req, res) => {
    res.send(database.get());
  });

  fastify.get("/:id", get_todo_options, (req, res) => {
    const { id } = req.params;
    res.send(database.get(id));
  });

  fastify.post("/", post_options, (req, res) => {
    const { message } = req.body;
    const id = database.get().slice(-1)[0].id + 1;
    const todo = { id, message };
    database.add(todo);
    res.code(201).send(todo);
  });

  fastify.put("/:id", put_options, (req, res) => {
    const { id } = req.params;
    const { message } = req.body;

    const result = database.modify(id, message);
    res.code(201).send(result);
  });

  fastify.delete("/:id", delete_options, (req, res) => {
    const { id } = req.params;
    database.delete(id);
    res.send({ message: "OK" });
  });

  done();
};

module.exports = {
  todo,
};
