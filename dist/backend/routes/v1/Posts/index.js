"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_status_codes_1 = __importDefault(require("http-status-codes"));
const TwitterFeedReader_1 = __importDefault(require("./rss/TwitterFeedReader"));
const MediumFeedReader_1 = __importDefault(require("./rss/MediumFeedReader"));
const { BAD_REQUEST, CREATED, OK } = http_status_codes_1.default;
exports.default = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const twitterPosts = yield (new TwitterFeedReader_1.default()).read('https://rss.app/feeds/16mc8dXw4wDlWdOQ.xml');
    const mediumPosts = yield (new MediumFeedReader_1.default()).read('https://bondappetit.medium.com/feed');
    const posts = [...twitterPosts, ...mediumPosts]
        .sort((a, b) => a.createdAt < b.createdAt ? 1 : -1);
    return res
        .status(OK)
        .json(posts);
});
