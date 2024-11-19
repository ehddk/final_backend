"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const node_path_1 = __importDefault(require("node:path"));
const morgan_1 = __importDefault(require("morgan"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
// users
// import userRouter from "./api/users/router/users.router";
// import adminUsersRouter from "./api/users/router/adminUsers.router";
const errorHandler_middleware_1 = __importDefault(require("./api/common/middlewares/errorHandler.middleware"));
const auth_router_1 = __importDefault(require("./api/auth/router/auth.router"));
const routers_1 = require("./routers");
const carts_router_1 = __importDefault(require("./api/carts/router/carts.router"));
const orders_router_1 = __importDefault(require("./api/orders/router/orders.router"));
const adminOrder_router_1 = __importDefault(require("./api/orders/router/adminOrder.router"));
const cartItems_router_1 = __importDefault(require("./api/cartItems/router/cartItems.router"));
const adminCartItem_router_1 = __importDefault(require("./api/cartItems/router/adminCartItem.router"));
const users_router_1 = __importDefault(require("./api/users/router/users.router"));
const adminUsers_router_1 = __importDefault(require("./api/users/router/adminUsers.router"));
const products_router_1 = require("./api/products/router/products.router");
const adminProduct_router_1 = require("./api/products/router/adminProduct.router");
const delivery_router_1 = require("./api/deliveries/router/delivery.router");
const inquiry_router_1 = __importDefault(require("./api/inquiries/router/inquiry.router"));
const adminInquiry_router_1 = __importDefault(require("./api/inquiries/router/adminInquiry.router"));
const app = (0, express_1.default)();
app.use((0, morgan_1.default)("dev")); // 클로져
app.use("/static", express_1.default.static(node_path_1.default.join(__dirname, "../public")));
app.use(express_1.default.json());
app.use((0, cookie_parser_1.default)());
app.use(express_1.default.urlencoded({ extended: false }));
// app.use(// API 검증 미들웨어)
/** -------- auth ---------  */
app.use(routers_1.ROUTES_INDEX.AUTH_API, auth_router_1.default);
/** -------- users ---------  */
app.use(routers_1.ROUTES_INDEX.USERS_API, users_router_1.default);
app.use(routers_1.ROUTES_INDEX.ADMIN_USERS_API, adminUsers_router_1.default);
/** -------- orders ---------  */
app.use(routers_1.ROUTES_INDEX.ORDERS_API, orders_router_1.default);
app.use(routers_1.ROUTES_INDEX.ADMIN_ORDERS_API, adminOrder_router_1.default);
/** -------- products ---------  */
app.use(routers_1.ROUTES_INDEX.PRODUCTS_API, products_router_1.productRouter);
app.use(routers_1.ROUTES_INDEX.ADMIN_PRODUCTS_API, adminProduct_router_1.adminProductRouter);
/**------ deliveries --------  */
app.use(routers_1.ROUTES_INDEX.DELIVERY_API, delivery_router_1.deliveryRouter);
/** -------- cartitems ---------  */
app.use(routers_1.ROUTES_INDEX.CART_ITEMS_API, cartItems_router_1.default);
app.use(routers_1.ROUTES_INDEX.ADMIN_CART_ITEMS_API, adminCartItem_router_1.default);
/** -------- 1:1문의 ---------  */
app.use(routers_1.ROUTES_INDEX.INQUIRIES_API, inquiry_router_1.default);
app.use(routers_1.ROUTES_INDEX.ADMIN_INQUIRIES_API, adminInquiry_router_1.default);
/** -------- carts ---------  */
app.use(routers_1.ROUTES_INDEX.CARTS_API, carts_router_1.default);
app.use(errorHandler_middleware_1.default);
app.listen(4000, () => {
    console.log(`Server is running on port 4000`);
});
//# sourceMappingURL=app.js.map