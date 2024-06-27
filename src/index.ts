import express from "express"
import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@apollo/server/express4';
import { prismaClient } from "./lib/db";

async function init() {
  const app = express();
  const PORT = Number([process.env.PORT]) || 8000;
  app.use(express.json());


  // Create Graphql server
  const gqlServer = new ApolloServer({
    typeDefs: `
      type Query {
        Hey_There: String
        say(name:String): String
      }

      type Mutation {
        createUser(firstName: String!, lastName: String!, password: String!, email: String!) : Boolean
      }

    `,// Schema
    resolvers: {
      Query: {
        Hey_There: () => `Hello I am a GQL Server`,
        say: (_, { name }: { name: string }) => `hey ${name}, how are you?`
      },
      Mutation: {
        createUser: async (_, { firstName, lastName, email, password }:
          {
            firstName: string;
            lastName: string;
            email: string;
            password: string;
          }) => {
            await prismaClient.user.create({
              data:{
                firstName, lastName, email, password, salt: "random_salt"
              }
            })
            return true
        }
      }
    }
  })


  // Start GQL Server
  await gqlServer.start();


  app.get("/", (req, res) => {
    res.json({ message: `Server is up and running` })
  })



  app.use("/graphql", expressMiddleware(gqlServer));


  app.listen(PORT, () => {
    console.log(`Server Started At PORT:${PORT}`)
  })
}

init();

