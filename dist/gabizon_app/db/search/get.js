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
exports.searchPosts = searchPosts;
exports.filterPosts = filterPosts;
const db_1 = require("../db");
function searchPosts(query) {
    return __awaiter(this, void 0, void 0, function* () {
        const posts = yield db_1.db.post.findMany({
            where: {
                OR: [{ title: { contains: query } }, { desc: { contains: query } }],
            },
        });
    });
}
function filterPosts(query) {
    return __awaiter(this, void 0, void 0, function* () {
        if (query.sort === "watched") {
            db_1.db.watched.groupBy({
                by: ["userId", "postId"],
                where: {
                    post: {
                        AND: [
                            { time: { lte: query.time } },
                            { creatorId: { equals: query.creatorId } },
                            { type: { equals: query.type } },
                        ],
                    },
                },
            });
        }
        query.time = Number(query.time);
        query.creatorId = Number(query.creatorId);
        const posts = yield db_1.db.post.findMany({
            where: {
                AND: [
                    { time: { lte: query.time } },
                    { creatorId: { equals: query.creatorId } },
                    { type: { equals: query.type } },
                ],
            },
        });
    });
}
//TODO: searchUsers function
//TODO: searchCreators function
