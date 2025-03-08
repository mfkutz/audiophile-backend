import { expect } from "chai";
import { requester } from "./testUtils.js";
import { createOrder } from "./data/index.js";

let orderId;

describe("Test Orders API's", () => {
  describe("Orders Operations", () => {
    it("Should create a new order and get the ID", async () => {
      const res = await requester.post(`/order`).send(createOrder);
      expect(res.status).to.equal(201);
      expect(res.body).to.include.all.keys("message", "order");
      expect(res.status).not.to.equal(404);
      orderId = res.body.order._id;
    });
    it("Should return all orders in de DB", async () => {
      const res = await requester.get(`/order`);
      expect(res.status).to.equal(200);
      expect(res.status).not.to.equal(404);
    });

    it("Should delete the created order", async () => {
      const res = await requester.delete(`/order/${orderId}`);
      expect(res.status).to.equal(200);
      expect(res.body).to.have.property("message", "Order deleted");
      expect(res.status).not.to.equal(404);
    });
  });
});
