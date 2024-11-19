"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const fsPromises = __importStar(require("fs/promises"));
function readFilePromise(fileName) {
    const file = fsPromises.readFile(fileName, "utf-8");
    return file;
}
async function asyncPromise() {
    const file = await readFilePromise("file.txt");
    console.log("Read File Promise");
    console.log("시작");
    console.log("asyncPromise", file);
    console.log("끝");
}
function syncFile() {
    console.log("Sync File");
    console.log("시작");
    const data = fs_1.default.readFileSync("file.txt", { encoding: "utf-8" });
    console.log("sync File", data);
    console.log("끝");
}
function asyncFile() {
    console.log("Async File");
    console.log("시작");
    fs_1.default.readFile("file.txt", {
        encoding: "utf-8",
    }, (err, data) => {
        if (err)
            throw err;
        console.log("async File", data);
    });
    console.log("끝");
}
asyncPromise(); // 1
syncFile(); // 2
asyncFile(); // 3
//# sourceMappingURL=asyncSync.js.map