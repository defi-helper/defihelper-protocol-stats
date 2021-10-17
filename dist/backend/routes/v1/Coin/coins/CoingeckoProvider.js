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
const axios_1 = __importDefault(require("axios"));
const cheerio_1 = __importDefault(require("cheerio"));
class default_1 {
    get(providersCoinPageUrl) {
        return __awaiter(this, void 0, void 0, function* () {
            let coinOverviewRawHtml = '';
            try {
                coinOverviewRawHtml =
                    (yield axios_1.default.get(providersCoinPageUrl)).data;
            }
            catch (e) {
                return {
                    watchers: 0,
                    price: 0,
                    rank: 0,
                };
            }
            let $ = cheerio_1.default.load(coinOverviewRawHtml);
            const watchersHtmlNode = $('div:contains("people like this")').last();
            const watchersCountInt = parseInt((watchersHtmlNode.text()).replace(/[^0-9]/g, ''));
            return {
                watchers: watchersCountInt,
                price: 0,
                rank: 0
            };
        });
    }
}
exports.default = default_1;
