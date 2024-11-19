"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MongooseProfileRepository = void 0;
const http_exception_1 = __importDefault(require("@/api/common/exceptions/http.exception"));
const profile_schema_1 = require("@/api/users/model/profile.schema");
const user_schema_1 = require("../../model/user.schema");
class MongooseProfileRepository {
    async save(profile) {
        const newProfile = new profile_schema_1.MongooseProfile(profile);
        await newProfile.save();
        return newProfile;
    }
    async findAll() {
        return await profile_schema_1.MongooseProfile.find();
    }
    async findById(userId) {
        const profile = await profile_schema_1.MongooseProfile.findById(userId);
        return profile;
    }
    async findByUserId(userId) {
        const user = await user_schema_1.MongooseUser.findById(userId);
        return user?.profile || null;
    }
    async update(profileId, updateProfileInfo) {
        const results = await profile_schema_1.MongooseProfile.findByIdAndUpdate(profileId, { $set: updateProfileInfo }, { new: true }
        // updateProfileInfo
        ).exec();
        if (!results) {
            throw new http_exception_1.default(404, "프로필을 찾을 수 없습니다.");
        }
        return results;
    }
    async delete(profileId) {
        await profile_schema_1.MongooseProfile.deleteOne({ _id: profileId });
        return;
    }
}
exports.MongooseProfileRepository = MongooseProfileRepository;
//# sourceMappingURL=mongooseProfile.repository.js.map