import "reflect-metadata";
import { ApolloServer } from 'apollo-server-express';
import Express from 'express';
import { createConnection } from "typeorm";
import session from 'express-session';
import connectRedis from 'connect-redis';
import cors from 'cors'

import { redis } from './redis'
import { createSchema } from './utils/createSchema'
  
const main = async () => {
  await createConnection();

  const schema = await createSchema();



  const apolloServer = new ApolloServer({
    schema,
    introspection: true,
    playground: true,
    context: ({req, res}: any) => ({ req, res }),
    validationRules: [
      // queryComplexity({
      //   maximumComplexity: 8,
      //   variables: {},
      //   onComplete: (complexity: number) => {
      //     console.log("Query Complexity:", complexity);
      //   },
      //   estimators: [
      //     fieldConfigEstimator(),
      //     simpleEstimator({
      //       defaultComplexity: 1,
      //     })
      //   ]
      //  }) as any
      ]
  });
  
  const app = Express();

  app.set("trust proxy", 1);

  const RedisStore = connectRedis(session);

  const newLocal = "http://www.developersquiz.com";
  app.use(
    cors({
      credentials: true,
      origin: newLocal,
    })
  );

  app.use(
    session({
      store: new RedisStore({
        client: redis as any
      }),
      name: "qid",
      secret: "xbalfwkerf21493",
      resave: false,
      saveUninitialized: false,
      cookie: {
        httpOnly: true,
        secure: false,
        maxAge: 1000 * 60 * 60 * 24  * 365
      },
    })
  );

  

  redis.on("error", (error: any) => {
    console.log("Redis connection error", error);
    process.exit(1);
  });

  process.on("exit", function () {
    console.log("Exiting...listener count", redis.listenerCount("error"));
  });

  apolloServer.applyMiddleware({ app, cors: false });

  app.listen( {port: process.env.PORT || 4000 }, () => {
    console.log("server started on http://localhost:4000/graphql");
  })
};
  
main();