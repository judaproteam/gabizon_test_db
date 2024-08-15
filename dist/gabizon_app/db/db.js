"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.db = void 0;
require("dotenv/config");
const client_1 = require("@prisma/client");
const prismaClientSingleton = () => {
    return new client_1.PrismaClient();
};
exports.db = (_a = globalThis.prismaGlobal) !== null && _a !== void 0 ? _a : prismaClientSingleton();
if (process.env.NODE_ENV !== 'production')
    globalThis.prismaGlobal = exports.db;
