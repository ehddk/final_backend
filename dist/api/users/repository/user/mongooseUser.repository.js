"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MongooseUserRepository = void 0;
const user_schema_1 = require("@/api/users/model/user.schema");
class MongooseUserRepository {
    async save(user) {
        const newUser = new user_schema_1.MongooseUser(user);
        await newUser.save();
        return newUser;
    }
    async findAll() {
        const values = await user_schema_1.MongooseUser.find()
            .populate({
            path: "profile",
            populate: {
                path: "delivery",
                model: "Delivery",
            },
        })
            .populate("cart")
            .exec();
        // console.log("values", values);
        return values;
    }
    async findById(userId) {
        try {
            const fullUser = await user_schema_1.MongooseUser.findById(userId)
                .populate({
                path: "profile",
                populate: {
                    path: "delivery",
                    model: "Delivery",
                },
            })
                .populate({
                path: "inquiries",
                populate: {
                    path: "author",
                    populate: {
                        path: "profile",
                    },
                },
            })
                .populate({
                path: "orders",
                populate: [
                    {
                        path: "userInfo", // userInfo를 포함
                    },
                    {
                        path: "orderItem", // orderItem을 포함
                        populate: {
                            path: "product", // orderItem 내 product를 포함
                        },
                    },
                ],
            })
                .populate({
                path: "cart",
                populate: {
                    path: "cartItem",
                    populate: {
                        path: "product",
                    },
                },
            })
                .exec();
            console.log("Full 유저:", fullUser);
            return fullUser;
        }
        catch (error) {
            const message = error.message.toString();
            if (message.includes("Cast to ObjectId failed")) {
                return null;
            }
            throw error;
        }
        //   const findUser = await MongooseUser.findById(userId).populate(
        //     "profile",
        //     // "cart",
        //     // "orders"
        //   );
        // return findUser ?? null;
    }
    async findByLoginId(loginId) {
        const findUser = await user_schema_1.MongooseUser.findOne({ loginId });
        return findUser ?? null;
    }
    async findByEmail(email) {
        const findUser = await user_schema_1.MongooseUser.findOne({ email });
        return findUser ?? null;
    }
    async update(userId, updateUserInfo) {
        await user_schema_1.MongooseUser.findByIdAndUpdate(userId, updateUserInfo).populate("profile");
        return;
    }
    async delete(userId) {
        await user_schema_1.MongooseUser.deleteOne({ _id: userId });
        return;
    }
}
exports.MongooseUserRepository = MongooseUserRepository;
//# sourceMappingURL=mongooseUser.repository.js.map