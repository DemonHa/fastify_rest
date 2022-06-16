const setupTestEnv = require("./setup_test_env");

const app = setupTestEnv();

describe("Integration test for CRUD operations to test our database", () => {
  test("Should get a list of items", async () => {
    const response = await app.inject({
      method: "GET",
      url: "/v2/items",
    });

    expect(response.statusCode).toBe(200);
  });

  test("Should get a single item", async () => {
    const response = await app.inject({
      method: "GET",
      url: "/v2/items/2",
    });

    expect(response.statusCode).toBe(200);
    expect(response.json()).toHaveProperty(
      "name",
      "description",
      "gross_amount",
      "net_amount",
      "excluded_vat_amount"
    );
  });

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

  test("Should update an item", async () => {
    const item = {
      name: "Updated name",
      description: "Go to park",
    };
    const response = await app.inject({
      method: "PUT",
      url: "/v2/items/5",
      payload: item,
    });

    expect(response.statusCode).toBe(200);
    expect(response.json()).toEqual(expect.objectContaining(item));
  });

  test("Should delete an item", async () => {
    const response = await app.inject({
      method: "DELETE",
      url: "/v2/items/6",
    });

    expect(response.statusCode).toBe(200);
    expect(response.json()).toMatchObject({
      message: "Item 6 deleted succesfully!",
    });
  });
});
