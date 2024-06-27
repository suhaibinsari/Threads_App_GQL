We are using

NodeJs
EXpressJs
graphql
graphql-apollo
postgres
typescript

docker
prisma



commands

yarn init
yarn tsc --init
yarn add tsc-watch -D
yarn add express
yarn add graphql
yarn add jsonwebtoken
yarn add @types/jsonwebtoken -D
yarn add @types/express -D
yarn add @apollo/server
yarn add prisma typescript ts-node @types/node -D
npx prisma init

npx gitignore Node


// docker commands

sudo systemctl start docker

sudo systemctl status docker

docker compose up

docker compose up -d (deattached mode)

yarn add prisma typescript ts-node @types/node


// docker db commands

docker ps

docker exec(execute) -it(interactive) docker name bash
docker exec -it a4d85a8e0098 bash

su postgres

psql

\l => list exit using q

\c threads => it will connect you to threads as user postgres

\d to see relations

/// migrate schema command

npx prisma migrate dev --name (any name)

select * from users

\x expanded display

delete from users where 1=1