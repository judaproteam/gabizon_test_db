"use strict";
// Install Prisma Client if not already installed
// npm install @prisma/client
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
exports.createDummyData = createDummyData;
const db_1 = require("./db");
function createDummyData() {
    return __awaiter(this, void 0, void 0, function* () {
        // Create Creators
        const creators = [];
        for (let i = 1; i <= 20; i++) {
            const creator = yield db_1.db.creator.create({
                data: {
                    firstName: `CreatorFirstName${i}`,
                    lastName: `CreatorLastName${i}`,
                },
            });
            creators.push(creator);
        }
        // Create Posts
        const posts = [];
        for (let i = 1; i <= 20; i++) {
            const post = yield db_1.db.post.create({
                data: {
                    title: `Post Title ${i}`,
                    creatorId: creators[i % creators.length].id,
                    time: Math.floor(Math.random() * 100),
                },
            });
            posts.push(post);
        }
        // Create Users
        const users = [];
        for (let i = 1; i <= 20; i++) {
            const user = yield db_1.db.user.create({
                data: {
                    firstName: `UserFirstName${i}`,
                    lastName: `UserLastName${i}`,
                },
            });
            users.push(user);
        }
        // Create Saved records
        for (let i = 0; i < 20; i++) {
            yield db_1.db.saved.create({
                data: {
                    userId: users[i % users.length].id,
                    postId: posts[i % posts.length].id,
                },
            });
        }
        // Create Watched records
        for (let i = 0; i < 20; i++) {
            yield db_1.db.watched.create({
                data: {
                    userId: users[i % users.length].id,
                    postId: posts[i % posts.length].id,
                    count: Math.floor(Math.random() * 10),
                },
            });
        }
        console.log('Dummy data created successfully');
    });
}
