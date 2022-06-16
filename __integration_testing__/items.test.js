const setupTestEnv = require("./setup_test_env");

const app = setupTestEnv();

describe("Integration test for CRUD operations to test our database", () => {
  test("Should create an item", async () => {
    const item = {
      name: "Someone",
      description: "Hi mom",
      gross_amount: 20,
      net_amount: 16.67,
      excluded_vat_amount: 3.33,
    };

    const response = await app.inject({
      method: "POST",
      url: "/v2/items",
      payload: item,
    });

    expect(response.statusCode).toBe(201);
    expect(response.json()).toMatchObject(item);
  });
});
