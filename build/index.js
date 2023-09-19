"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var route_1 = __importDefault(require("./routers/route"));
require("dotenv/config");
var app = (0, express_1.default)();
var port = process.env.PORT;
app.use(express_1.default.json());
app.listen(port, function () {
    console.log("server is running in port : ".concat(port));
});
app.use('app/v1', route_1.default);
