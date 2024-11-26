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
import cartItemRouter from "./api/cartItems/router/cartItems.router";
import adminCartItemRouter from "./api/cartItems/router/adminCartItem.router";
import userRouter from "./api/users/router/users.router";
import adminUsersRouter from "./api/users/router/adminUsers.router";
import { productRouter } from "./api/products/router/products.router";
import { adminProductRouter } from "./api/products/router/adminProduct.router";
import { deliveryRouter } from "./api/deliveries/router/delivery.router";
import inquiryRouter from "./api/inquiries/router/inquiry.router";
import adminInquiryRouter from "./api/inquiries/router/adminInquiry.router";

const app = express();
const cors = require('cors');

app.use(express.urlencoded({ extended: true }));

// CORS 설정 수정
app.use(cors({
  origin: ['http://localhost:3000'],
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],  // 허용할 HTTP 메서드
  allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With'], // 허용할 헤더
  exposedHeaders: ['Content-Range', 'X-Content-Range'] // 노출할 헤더
}));

app.options('*', cors());  // 모든 경로에 대해 OPTIONS 요청 허용

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

/**------ deliveries --------  */
app.use(ROUTES_INDEX.DELIVERY_API, deliveryRouter);

/** -------- cartitems ---------  */
app.use(ROUTES_INDEX.CART_ITEMS_API, cartItemRouter);
app.use(ROUTES_INDEX.ADMIN_CART_ITEMS_API, adminCartItemRouter);

/** -------- 1:1문의 ---------  */
app.use(ROUTES_INDEX.INQUIRIES_API, inquiryRouter);
app.use(ROUTES_INDEX.ADMIN_INQUIRIES_API, adminInquiryRouter);

/** -------- carts ---------  */
app.use(ROUTES_INDEX.CARTS_API, cartRouter);

app.use(errorHandler);

app.listen(4000, () => {
  console.log(`Server is running on port 4000`);
});
