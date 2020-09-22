import { __prod__ } from "./constants";
import { Post } from "./entities/Post";
import { MikroORM } from "@mikro-orm/core";
import path from 'path';

export default {
    type: 'postgresql',
    dbName: 'lireddit',
    user: 'postgres',
    host: '203.236.216.63',
    port: 5432,
    password: 'ginnosystems',
    entities: [Post],
    migrations: {
        path: path.join(__dirname, './migrations'),
        pattern: /^[\w-]+\d+\.[tj]s$/
    },
    debug: !__prod__
} as Parameters<typeof MikroORM.init>[0];