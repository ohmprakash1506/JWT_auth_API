"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var approute_1 = __importDefault(require("./approute"));
var router = (0, express_1.Router)();
var defaultroute = [
    {
        path: '/app',
        route: approute_1.default
    }
];
defaultroute.forEach(function (route) {
    router.use(route.path, route.route);
});
exports.default = router;
