"use strict";
exports.DATABASE_URL =
 process.env.DATABASE_URL || "mongodb://mamkcay:tjdzR6tq3euumH3Up6YE@helpfulreborn-shard-00-00-wrfx3.mongodb.net:27017,helpfulreborn-shard-00-01-wrfx3.mongodb.net:27017,helpfulreborn-shard-00-02-wrfx3.mongodb.net:27017/helpful?ssl=true&replicaSet=HelpfulReborn-shard-0&authSource=admin&retryWrites=true";
exports.TEST_DATABASE_URL =
 process.env.TEST_DATABASE_URL || "mongodb://localhost/jwt-auth-demo";
exports.PORT = process.env.PORT || 8080;
exports.JWT_SECRET = process.env.JWT_SECRET;
exports.JWT_EXPIRY = process.env.JWT_EXPIRY || "7d";
exports.GOOGLE_KEY = process.env.GEO_KEY;
exports.CLIENT_ORIGIN = process.env.CLIENT_ORIGIN || 'http://localhost:3000';

