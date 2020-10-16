import { MikroORM } from "@mikro-orm/core";
import { Post } from "./entities/Post";
import microConfig from "./mikro-orm.config";

const main = async () => {
    const orm = await MikroORM.init(microConfig);
    orm.getMigrator().up();
    
    // add data
    // const post = orm.em.create(Post, {title: 'my first post'});
    // await orm.em.persistAndFlush(post);
    // await orm.em.nativeInsert(Post, { title: "my first post 2"});
    
    // find data
    // const posts = await orm.em.find(Post, {});
    // console.log(posts);
}

main().catch(err => {
    console.error(err);
});

