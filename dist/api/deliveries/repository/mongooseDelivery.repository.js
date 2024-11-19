"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MongooseDeliveryRepository = void 0;
const delivery_schema_1 = require("../model/delivery.schema");
const http_exception_1 = __importDefault(require("@/api/common/exceptions/http.exception"));
const mongoose_1 = __importDefault(require("mongoose"));
const user_schema_1 = require("@/api/users/model/user.schema");
class MongooseDeliveryRepository {
    async save(userId, delivery) {
        try {
            const newDelivery = new delivery_schema_1.MongooseDelivery({
                userId,
                ...delivery
            });
            await newDelivery.save();
            return newDelivery;
        }
        catch (error) {
            throw new http_exception_1.default(500, '배송지 등록중에 오류 발생');
        }
    }
    async findAll(userId) {
        //return await this.MongooseDelivery.find({ user: userId }).lean();
        const deliveries = await delivery_schema_1.MongooseDelivery.find({ userId: userId });
        return deliveries;
    }
    async findById(userId, deliveryId) {
        try {
            console.log('Finding delivery with:', { userId, deliveryId });
            const user = await user_schema_1.MongooseUser.findById(userId)
                .populate({
                path: 'profile',
                populate: {
                    path: 'delivery',
                    model: 'Delivery'
                }
            })
                .exec();
            console.log('Found user with profile:', user);
            //   if (!user?.profile.delivery) {
            //     console.log('No delivery found in profile');
            //     return null;
            // }
            // console.log('user?,.prof',user?.profile.delivery)
            const delivery = user?.profile.delivery.find(item => item._id.toString() === deliveryId);
            //console.log('해당 배송지 내용',delivery)
            // const delivery= user.profile.delivery.find(
            //   item=>
            // )
            // const delivery= user
            // console.log('devsdsd',delivery)
            // return delivery || null;
            if (!delivery) {
                throw new Error('해당 배송지ID가 없습니다. ');
            }
            return delivery || null;
        }
        catch (error) {
            console.error('Error in findById:', error);
            throw error;
        }
    }
    async update(userId, deliveryId, updateDeliveryInfo) {
        const results = await delivery_schema_1.MongooseDelivery.findOneAndUpdate({ _id: deliveryId, userId: userId }, updateDeliveryInfo);
        console.log('resuttt', results);
        console.log("deliveryId:", deliveryId, "userId:", userId);
        if (!results) {
            throw new http_exception_1.default(404, "해당 배송지 수정을 할 수 없습니다.");
        }
        return results;
    }
    async delete(userId, deliveryId) {
        try {
            const result = await delivery_schema_1.MongooseDelivery.deleteOne({
                _id: new mongoose_1.default.Types.ObjectId(deliveryId),
                userId: userId
            });
            // 삭제된 문서가 없는 경우 처리
            if (result.deletedCount === 0) {
                throw new Error('배송지를 찾을 수 없습니다.');
            }
        }
        catch (error) {
            if (error instanceof mongoose_1.default.Error.CastError) {
                throw new Error('잘못된 배송지 ID 형식입니다.');
            }
            throw error;
        }
    }
}
exports.MongooseDeliveryRepository = MongooseDeliveryRepository;
//# sourceMappingURL=mongooseDelivery.repository.js.map