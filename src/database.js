class Database {
  constructor() {
    this.data = [
      {
        id: 1,
        message: "Go to work",
      },
      {
        id: 2,
        message: "Buy some bread",
      },
      {
        id: 3,
        message: "Finish homework",
      },
    ];
  }

  /**
   * Get a list of todos or a single todo is id is specified
   *
   * @param {Number} id
   * @returns {Object}
   */
  get(id) {
    if (!id) return this.data;

    for (let i = 0; i < this.data.length; ++i) {
      if (this.data[i].id == id) return this.data[i];
    }
    return {};
  }

  /**
   * Adding an todo into the database
   *
   * @param {obj} obj
   * @returns {null}
   */
  add(obj) {
    this.data.push(obj);
  }

  /**
   * Update a single todo by id
   *
   * @param {Number} id
   * @param {String} message
   * @returns {Object}
   */
  modify(id, message) {
    const index = this.data.findIndex((el) => el.id === id);
    if (index < 0) return;
    this.data[index].message = message;
    return this.data[index];
  }

  /**
   * Delete a todo by id
   *
   * @param {Number} id
   * @returns {null}
   */
  delete(id) {
    const index = this.data.findIndex((el) => el.id === id);
    if (index < 0) return;
    console.log(index);
    this.data.splice(index, 1);
  }
}

const database = new Database();

module.exports = {
  database,
};
