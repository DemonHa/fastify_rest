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
      type: "object",
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
      type: "object",
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

module.exports = {
  get_options,
  get_todo_options,
  post_options,
  put_options,
  delete_options,
};
