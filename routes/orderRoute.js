import express from "express";
import { getAllOrders, getUserOrders, placeOrder, placeOrderStripe } from "../controllers/orderController.js";
import authSeller from "../middlewares/authSeller.js";
import authUser from "../middlewares/authUser.js";

const orderRouter = express.Router();

orderRouter.post("/cod", authUser, placeOrder);
orderRouter.get("/user", authUser, getUserOrders);
orderRouter.get("/seller", authSeller, getAllOrders);
orderRouter.post("/stripe", authUser, placeOrderStripe);
export default orderRouter;
