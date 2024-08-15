"use strict";
'use server';
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.insertPost = insertPost;
const db_1 = require("../db");
function insertPost(formData) {
    return __awaiter(this, void 0, void 0, function* () {
        const time = Number(formData.get("time"));
        const date = formData.get("date");
        const title = formData.get("title");
        return yield db_1.db.post.create({
            data: {
                title,
                date: new Date(date),
                time,
                creator: {
                    create: {
                        name: "Default Creator",
                    },
                },
            },
        });
    });
}