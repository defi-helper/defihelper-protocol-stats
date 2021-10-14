"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const Coin_1 = __importDefault(require("./v1/Coin"));
const Followers_1 = __importDefault(require("./v1/Followers"));
const Posts_1 = __importDefault(require("./v1/Posts"));
const apiV1Router = (0, express_1.Router)();
apiV1Router.get('/coin', Coin_1.default);
apiV1Router.get('/posts', Posts_1.default);
apiV1Router.get('/followers', Followers_1.default);
// Export the base-router
const baseRouter = (0, express_1.Router)();
baseRouter.use('/v1', apiV1Router);
exports.default = baseRouter;
