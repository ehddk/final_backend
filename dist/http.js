"use strict";
// import "@/asyncSync";
// import "@/eventEmitter";
// import "@/promise";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = __importDefault(require("http"));
const server = http_1.default.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "application/json" });
    if (req.url === "/") {
        res.end(JSON.stringify({ message: "Hello, 모두연구소!" }));
    }
    if (req.url?.startsWith("/users")) {
        switch (req.method?.toLowerCase()) {
            case "get": {
                res.end(JSON.stringify({
                    users: [
                        {
                            name: "김모두",
                            age: 30,
                        },
                        {
                            name: "이모두",
                            age: 28,
                        },
                    ],
                }));
                break;
            }
            case "post": {
                res.end(JSON.stringify({ message: "User created" }));
                break;
            }
            case "put": {
                res.end(JSON.stringify({ message: "User updated" }));
                break;
            }
            case "patch": {
                res.end(JSON.stringify({ message: "User patched" }));
                break;
            }
            case "delete": {
                res.end(JSON.stringify({ message: "User deleted" }));
                break;
            }
        }
    }
});
server.listen(8080, () => {
    console.log("Server is running on port 8080");
});
//# sourceMappingURL=http.js.map