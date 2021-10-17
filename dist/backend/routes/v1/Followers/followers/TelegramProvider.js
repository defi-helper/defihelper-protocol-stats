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
const node_telegram_bot_api_1 = __importDefault(require("node-telegram-bot-api"));
const ConfigManager_1 = __importDefault(require("../../../../shared/ConfigManager"));
class default_1 {
    get(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const telegramBot = new node_telegram_bot_api_1.default(ConfigManager_1.default.get('TELEGRAM_BOT_TOKEN'), { polling: false });
            return {
                followers: yield telegramBot.getChatMembersCount('@' + id),
                anotherProperty: null,
            };
        });
    }
}
exports.default = default_1;
