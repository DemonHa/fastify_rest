const { build } = require("./../src/app");
const env = require("./../src/config/env");

const setup_tables = `CREATE TABLE IF NOT EXISTS "public"."items" ( \
    "id" SERIAL PRIMARY KEY, \
    "name" TEXT NOT NULL, \
    "description" TEXT NOT NULL, \
    "gross_amount" DECIMAL NOT NULL, \
    "net_amount" DECIMAL NOT NULL, \
    "excluded_vat_amount" DECIMAL NOT NULL \
  )`;

const clear_tables = `DELETE FROM items`;
const insert_items =
  "INSERT INTO items (name, description, gross_amount, net_amount, excluded_vat_amount) VALUES ($1, $2, $3, $4, $5)";

module.exports = function setupTestEnv() {
  const app = build(
    { logger: true },
    {},
    {
      connectionString: env.POSTGRES_TEST_DB_CONNECTION_STRING,
    }
  );

  beforeAll(async () => {
    await app.ready();
    await app.pg.query(setup_tables);
    await app.pg.query(clear_tables);
  });

  beforeEach(async () => {
    await app.pg.query(insert_items, ["Someone", "Hi mom", 200, 100, 10]);
  });

  afterEach(async () => {
    await app.pg.query(clear_tables);
  });

  afterAll(async () => {
    await app.pg.query("DROP TABLE IF EXISTS items");
    app.close();
  });

  return app;
};
