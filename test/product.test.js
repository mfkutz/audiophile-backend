import { expect } from "chai";
import { requester } from "./testUtils.js";
import { productToCreate } from "./data/index.js";

let productId;

describe("Test Products API's", () => {
  describe("Products Operations", () => {
    it("Shoud return all products response", async () => {
      const res = await requester.get(`/product`);
      expect(res.status).to.equal(200);
    });

    it("Shoud create a product and return its ID", async () => {
      const res = await requester.post("/product").send(productToCreate);
      expect(res.status).to.equal(201);
      expect(res.body).to.have.property("_id");
      expect(res.status).not.to.equal(404);
      productId = res.body._id;
    });

    it("Should return the product corresponding to the specified ID", async () => {
      const res = await requester.get(`/product/${productId}`);
      expect(res.status).to.equal(200);
      expect(res.body).to.include.all.keys("slug", "name", "image", "price");
    });

    it("Should delete the created product successfully", async () => {
      const res = await requester.delete(`/product/${productId}`);
      expect(res.status).to.equal(200);
      expect(res.body).to.have.property("message", "Product deleted");
    });
  });
});
