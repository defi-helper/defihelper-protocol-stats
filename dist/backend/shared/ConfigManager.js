"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class default_1 {
    static get(key) {
        const v = process.env[key];
        if (v === undefined) {
            throw Error("Key doesn't exists");
        }
        return v;
    }
}
exports.default = default_1;
