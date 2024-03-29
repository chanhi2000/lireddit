import { __prod__ } from "./constants";
import { Post } from "./entities/Post";
import { MikroORM } from "@mikro-orm/core";
import path from 'path';
import { User } from "./entities/User";

export default {
    type: 'postgresql',
    dbName: 'lireddit',
    user: 'postgres',
    host: 'localhost',
    port: 5432,
    password: 'ginnosystems',
    entities: [Post, User],
    migrations: {
        path: path.join(__dirname, './migrations'),
        pattern: /^[\w-]+\d+\.[tj]s$/
    },
    debug: !__prod__
} as Parameters<typeof MikroORM.init>[0];