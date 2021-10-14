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
const RssPost_1 = require("./type/RssPost");
const rss_parser_1 = __importDefault(require("rss-parser"));
class default_1 {
    read(url) {
        return __awaiter(this, void 0, void 0, function* () {
            const parser = new rss_parser_1.default();
            const feed = yield parser.parseURL(url);
            return feed.items.map(v => {
                return {
                    socialNetwork: RssPost_1.RssPostSocialNetworks.medium,
                    title: v.title,
                    text: v['content:encoded'],
                    ownerUsername: v.creator,
                    link: v.link,
                    createdAt: Date.parse(v.pubDate),
                };
            });
        });
    }
}
exports.default = default_1;
