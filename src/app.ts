import express, { NextFunction, Request, Response } from "express";
import path from "node:path";
import morgan from "morgan";

import cookieParser from "cookie-parser";

// users
// import userRouter from "./api/users/router/users.router";
// import adminUsersRouter from "./api/users/router/adminUsers.router";

import errorHandler from "./api/common/middlewares/errorHandler.middleware";
import authRouter from "./api/auth/router/auth.router";
import { ROUTES_INDEX } from "./routers";
import { authUserMiddleware } from "./api/common/middlewares/authUser.middleware";

import cartRouter from "./api/carts/router/carts.router";
import orderRouter from "./api/orders/router/orders.router";
import adminOrderRouter from "./api/orders/router/adminOrder.router";
import orderItemRouter from "./api/orderItems/router/orderItems.router";
import adminOrderItemRouter from "./api/orderItems/router/adminOrderItem.router";
import cartItemRouter from "./api/cartItems/router/cartItems.router";
import adminCartItemRouter from "./api/cartItems/router/adminCartItem.router";
import userRouter from "./api/users/router/users.router";
import adminUsersRouter from "./api/users/router/adminUsers.router";
import { productRouter } from "./api/product/router/products.router";
import { adminProductRouter } from "./api/product/router/adminProduct.router";

const app = express();

app.use(morgan("dev")); // 클로져
app.use("/static", express.static(path.join(__dirname, "../public")));

app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));
// app.use(// API 검증 미들웨어)

/** -------- auth ---------  */
app.use(ROUTES_INDEX.AUTH_API, authRouter);

/** -------- users ---------  */
app.use(ROUTES_INDEX.USERS_API, userRouter);
app.use(ROUTES_INDEX.ADMIN_USERS_API, adminUsersRouter);

/** -------- orders ---------  */
app.use(ROUTES_INDEX.ORDERS_API, orderRouter);
app.use(ROUTES_INDEX.ADMIN_ORDERS_API, adminOrderRouter);

/** -------- products ---------  */
app.use(ROUTES_INDEX.PRODUCTS_API, productRouter);
app.use(ROUTES_INDEX.ADMIN_PRODUCTS_API, adminProductRouter);

/** -------- orderitems ---------  */
app.use(ROUTES_INDEX.ORDER_ITEMS_API, orderItemRouter);
app.use(ROUTES_INDEX.ADMIN_ORDER_ITEMS_API, adminOrderItemRouter);

/** -------- cartitems ---------  */
app.use(ROUTES_INDEX.CART_ITEMS_API, cartItemRouter);
app.use(ROUTES_INDEX.ADMIN_CART_ITEMS_API, adminCartItemRouter);

/** -------- carts ---------  */
app.use(ROUTES_INDEX.CARTS_API, cartRouter);

app.use(errorHandler);

app.listen(4000, () => {
  console.log(`Server is running on port 4000`);
});
