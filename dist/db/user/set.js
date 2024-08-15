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
Object.defineProperty(exports, "__esModule", { value: true });
exports.setUser = setUser;
exports.setUserNpost = setUserNpost;
const db_1 = require("../db");
function setUser(user) {
    return __awaiter(this, void 0, void 0, function* () {
        const res = yield db_1.db.user.create({
            data: {
                firstName: user.firstName,
                lastName: user.lastName,
            },
        });
        console.log('res', res);
    });
}
function setUserNpost(user, post) {
    return __awaiter(this, void 0, void 0, function* () {
        const res = yield db_1.db.user.create({
            data: {
                firstName: user.firstName,
                lastName: user.lastName,
                favoritPosts: {
                    create: {
                        title: post.title,
                        creator: {
                            connect: {
                                id: user.id,
                            },
                        },
                        date: post.date,
                        time: post.time,
                    },
                },
            },
        });
        console.log('res', res);
    });
}
