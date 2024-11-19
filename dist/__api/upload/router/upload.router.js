"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const routers_1 = require("@/routers");
const path_util_1 = require("@/utils/path.util");
const express_1 = __importDefault(require("express"));
const multer_1 = require("@/vendors/multer");
const uploadRouter = express_1.default.Router();
const UPLOD_ROUTES = {
    UPLOAD_IMAGE: "/api/upload/image",
    UPLOAD_IMAGES: "/api/upload/images",
};
uploadRouter.post((0, path_util_1.extractPath)(UPLOD_ROUTES.UPLOAD_IMAGE, routers_1.ROUTES_INDEX.UPLOAD_API), multer_1.imageUpload.single("filename"), (req, res, next) => {
    const SERVER_URL = process.env.SERVER_URL || "http://localhost:4000";
    const file = req.file;
    res.json({
        url: `${SERVER_URL}/static/uploads/${file?.filename}`,
    });
});
uploadRouter.post((0, path_util_1.extractPath)(UPLOD_ROUTES.UPLOAD_IMAGES, routers_1.ROUTES_INDEX.UPLOAD_API), multer_1.imageUpload.array("filenames"), (req, res, next) => {
    try {
        const SERVER_URL = process.env.SERVER_URL || "http://localhost:4000";
        const files = req.files;
        res.json({
            files: files.map((file) => `${SERVER_URL}/static/uploads/${file.filename}`),
        });
    }
    catch (error) {
        console.error(error);
        next(error);
    }
});
exports.default = uploadRouter;
//# sourceMappingURL=upload.router.js.map