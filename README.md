# lireddit

## Summary
 - Fullstack Tutorial 

## Technology Used

 - `React`
 - `TypeScript`
 - `GraphQL`
 - `URQL/Apollo`
 - `Node.js`
 - `Docker`/`PostgreSQL`
 - `MikroOrm/TypeORM`
 - `Redis`
 - `Next.js`
 - `TypeGraphQL`


### Commands Used

- `npm init -y`
- `yarn add -D @types/node typescript`
- `yarn add -D ts-node`
- `yarn add @mikro-orm/cli @mikro-orm/core @mikro-orm/migrations @mikro-orm/postgresql pg`
- `npx mikro-orm migration:create`

## Docker Setup

### A. Pull Postgresql DB Image

```bash
docker pull postgres:13-alpine
```

### B. Run The Image

```bash
docker run --name postrgres -d -it -e POSTGRES_PASSWORD=ginnosystems -p 5432:5432 postgres:13-alpine
```

### Execute

```bash
docker exec -it postgres bash
```

### Key `psql` commands 
 - connect to DB Client : `psql -U postgres`
 - List roles : `\du` 
 - List databas1es : `\l`
 - Connect to database : `\c <DATABASE_NAME>`
 - List Relation : `\d`

## Outline

### Section 1
 - ~~[v0.0.1][v0.0.1] : Project Setup~~
 - ~~[v0.0.2][v0.0.2] : mikroORM Setup~~
 - [v0.0.3][v0.0.3] : Apollo SErver Express Setup
 - [v0.0.4][v0.0.4] : mikroORM TypeGraphQL Crud

### Section 2
 - [v0.1.0][v0.1.0] : Register
 - [v0.1.1][v0.1.0] : Login and Validation
 - [v0.1.2][v0.1.2] : Sessions
 - [v0.1.3][v0.1.3] : Session More Info
 - [v0.1.4][v0.1.4] : Move Stuff
 - [v0.1.5][v0.1.5] : NextJS Chakra
 - [v0.1.6][v0.1.6] : URQL Basic
 - [v0.1.7][v0.1.7] : GraphQL Codegen
 - [v0.1.8][v0.1.8] : Register Errors
 - [v0.1.9][v0.1.9] : Navbar
 - [v0.1.10][v0.1.10] : Cache Update
 - [v0.1.11][v0.1.11] : Logout
 - [v0.1.12][v0.1.12] : URQL SSR
 - [v0.1.13][v0.1.13] : Forgot Password Setup Email
 - [v0.1.14][v0.1.14] : Start Change Password
 - [v0.1.15][v0.1.15] : Change Password

### Section 3 
 - [v0.2.1][v0.2.1] : TypeORM
 - [v0.2.2][v0.2.2] : Many To One
 - [v0.2.3][v0.2.3] : Global Error Handling
 - [v0.2.4][v0.2.4] : Query Params
 - [v0.2.5][v0.2.5] : Post Pagination
 - [v0.2.6][v0.2.6] : Adding Mock Data
 - [v0.2.7][v0.2.7] : Style Posts
 - [v0.2.8][v0.2.8] : URQL Pagination
 - [v0.2.9][v0.2.9] : Fix Mock Data
 - [v0.2.10][v0.2.10] : Pagination Has More
 - [v0.2.11][v0.2.11] : Fetch Post Creator
 - [v0.2.12][v0.2.12] : Field Permissions
 - [v0.2.13][v0.2.13] : Updoots
 - [v0.2.14][v0.2.14] : Invalidate Query
 - [v0.2.15][v0.2.15] : Updoot UI
 - [v0.2.16][v0.2.16] : Change Vote
 - [v0.2.17][v0.2.17] : Write Fragment
 - [v0.2.18][v0.2.18] : Vote Status
 - [v0.2.19][v0.2.19] : SSR Cookie
 
 ### Section 4
 - [v0.3.1][v0.3.1] : Single Post
 - [v0.3.2][v0.3.2] : Delete Post
 - [v0.3.3][v0.3.3] : Edit Post
 - [v0.3.4][v0.3.4] : Dataloader
 - [v0.3.5][v0.3.5] : More Dataloader
 - [v0.3.6][v0.3.6] : Cache Reset
 
### Section 5 
 - [v0.4.1][v0.4.1] : Docker
 - [v0.4.2][v0.4.2] : Env Variables
 - [v0.4.3][v0.4.3] : Migration
 - [v0.4.4][v0.4.4] : Frontend Deploy
 - [v0.4.5][v0.4.5] : Fix Cookie
 - [v0.4.6][v0.4.6] : Initial Conversion + Update Query
 - [v0.4.7][v0.4.7] : Pagination Type Policies
 - [v0.4.8][v0.4.8] : SSR
 - [v0.4.9][v0.4.9] : Update Cache
 - [v0.4.10][v0.4.10] : Forward Cookie



## Reference
 - [Ben Awad][github]
 - [Full Tutorial][tut]
 - [Docker and PostgreSQL in 10 Minutes][yt] 

[github]: https://github.com/benawad
[tut]: https://youtu.be/I6ypD7qv3Z8
[yt]: https://www.youtube.com/watch?v=aHbE3pTyG-Q

[v0.0.1]: http://203.236.231.101:3000/EDUCATION/lireddit/src/v0.0.1
[v0.0.2]: http://203.236.231.101:3000/EDUCATION/lireddit/src/v0.0.2
[v0.0.3]: http://203.236.231.101:3000/EDUCATION/lireddit/src/v0.0.3
[v0.0.4]: http://203.236.231.101:3000/EDUCATION/lireddit/src/v0.0.4
[v0.1.0]: http://203.236.231.101:3000/EDUCATION/lireddit/src/v0.1.0
[v0.1.1]: http://203.236.231.101:3000/EDUCATION/lireddit/src/v0.1.1
[v0.1.2]: http://203.236.231.101:3000/EDUCATION/lireddit/src/v0.1.2
[v0.1.3]: http://203.236.231.101:3000/EDUCATION/lireddit/src/v0.1.3
[v0.1.4]: http://203.236.231.101:3000/EDUCATION/lireddit/src/v0.1.4
[v0.1.5]: http://203.236.231.101:3000/EDUCATION/lireddit/src/v0.1.5
[v0.1.6]: http://203.236.231.101:3000/EDUCATION/lireddit/src/v0.1.6
[v0.1.7]: http://203.236.231.101:3000/EDUCATION/lireddit/src/v0.1.7
[v0.1.8]: http://203.236.231.101:3000/EDUCATION/lireddit/src/v0.1.8
[v0.1.9]: http://203.236.231.101:3000/EDUCATION/lireddit/src/v0.1.9
[v0.1.10]: http://203.236.231.101:3000/EDUCATION/lireddit/src/v0.1.10
[v0.1.11]: http://203.236.231.101:3000/EDUCATION/lireddit/src/v0.1.11
[v0.1.12]: http://203.236.231.101:3000/EDUCATION/lireddit/src/v0.1.12
[v0.1.13]: http://203.236.231.101:3000/EDUCATION/lireddit/src/v0.1.13
[v0.1.14]: http://203.236.231.101:3000/EDUCATION/lireddit/src/v0.1.14
[v0.1.15]: http://203.236.231.101:3000/EDUCATION/lireddit/src/v0.1.15
[v0.2.1]: http://203.236.231.101:3000/EDUCATION/lireddit/src/v0.2.1
[v0.2.2]: http://203.236.231.101:3000/EDUCATION/lireddit/src/v0.2.2
[v0.2.3]: http://203.236.231.101:3000/EDUCATION/lireddit/src/v0.2.3
[v0.2.4]: http://203.236.231.101:3000/EDUCATION/lireddit/src/v0.2.4
[v0.2.5]: http://203.236.231.101:3000/EDUCATION/lireddit/src/v0.2.5
[v0.2.6]: http://203.236.231.101:3000/EDUCATION/lireddit/src/v0.2.6
[v0.2.7]: http://203.236.231.101:3000/EDUCATION/lireddit/src/v0.2.7
[v0.2.8]: http://203.236.231.101:3000/EDUCATION/lireddit/src/v0.2.8
[v0.2.9]: http://203.236.231.101:3000/EDUCATION/lireddit/src/v0.2.9
[v0.2.10]: http://203.236.231.101:3000/EDUCATION/lireddit/src/v0.2.10
[v0.2.11]: http://203.236.231.101:3000/EDUCATION/lireddit/src/v0.2.11
[v0.2.12]: http://203.236.231.101:3000/EDUCATION/lireddit/src/v0.2.12
[v0.2.13]: http://203.236.231.101:3000/EDUCATION/lireddit/src/v0.2.13
[v0.2.14]: http://203.236.231.101:3000/EDUCATION/lireddit/src/v0.2.14
[v0.2.15]: http://203.236.231.101:3000/EDUCATION/lireddit/src/v0.2.15
[v0.2.16]: http://203.236.231.101:3000/EDUCATION/lireddit/src/v0.2.16
[v0.2.17]: http://203.236.231.101:3000/EDUCATION/lireddit/src/v0.2.17
[v0.2.18]: http://203.236.231.101:3000/EDUCATION/lireddit/src/v0.2.18
[v0.2.19]: http://203.236.231.101:3000/EDUCATION/lireddit/src/v0.2.19
[v0.3.1]: http://203.236.231.101:3000/EDUCATION/lireddit/src/v0.3.1
[v0.3.2]: http://203.236.231.101:3000/EDUCATION/lireddit/src/v0.3.2
[v0.3.3]: http://203.236.231.101:3000/EDUCATION/lireddit/src/v0.3.3
[v0.3.4]: http://203.236.231.101:3000/EDUCATION/lireddit/src/v0.3.4
[v0.3.5]: http://203.236.231.101:3000/EDUCATION/lireddit/src/v0.3.5
[v0.3.6]: http://203.236.231.101:3000/EDUCATION/lireddit/src/v0.3.6
[v0.4.1]: http://203.236.231.101:3000/EDUCATION/lireddit/src/v0.4.1
[v0.4.2]: http://203.236.231.101:3000/EDUCATION/lireddit/src/v0.4.2
[v0.4.3]: http://203.236.231.101:3000/EDUCATION/lireddit/src/v0.4.3
[v0.4.4]: http://203.236.231.101:3000/EDUCATION/lireddit/src/v0.4.4
[v0.4.5]: http://203.236.231.101:3000/EDUCATION/lireddit/src/v0.4.5
[v0.4.6]: http://203.236.231.101:3000/EDUCATION/lireddit/src/v0.4.6
[v0.4.7]: http://203.236.231.101:3000/EDUCATION/lireddit/src/v0.4.7
[v0.4.8]: http://203.236.231.101:3000/EDUCATION/lireddit/src/v0.4.8
[v0.4.9]: http://203.236.231.101:3000/EDUCATION/lireddit/src/v0.4.9
[v0.4.10]: http://203.236.231.101:3000/EDUCATION/lireddit/src/v0.4.10