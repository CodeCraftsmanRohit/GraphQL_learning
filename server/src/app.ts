import dotenv from "dotenv";
dotenv.config({ path: "./.env" });
import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { schema } from "./graphql/schema";
import { connectDB } from "./database/database.js";
import { UserModel } from "./models/UserModel";
import { CourseModel } from "./models/CourseModel";
import axios from "axios";

import { USERS } from "./utils/user";
import { TODOS } from "./utils/todo";

export const envMode = process.env.NODE_ENV?.trim() || "DEVELOPMENT";
const port = Number(process.env.PORT) || 3000;
const mongoURI = process.env.MONGO_URI!;
connectDB(mongoURI);



const server = new ApolloServer({
  typeDefs: schema,
  resolvers: {
    // logic likte h resolver ke andar
    Query: {
      hello: () => "Hello World",
      wow: () => "it is wow",
      // users: async()=>{
      //   const users= await UserModel.find();
      //   console.log(users);
      //   return users;
      // },
      // courses: async()=>{
      //   const courses= await CourseModel.find();
      //   console.log(courses);
      //   return courses;
      // }
      // getTodos:()=>[{_id:1,title:"Something is there",completed:false}]
      // getTodos: async()=>
      // (await axios.get("https://jsonplaceholder.typicode.com/todos")).data,

      getTodos: () => TODOS,
      getAllUsers: () => USERS,
      getUser: async (parent, { id }) => USERS.find((e) => e.id === id),
    },
    Todo: {
      user: (todo) => USERS.find((e) => e.id === todo.id),
    },
  },
});

startStandaloneServer(server)
  .then(() => {
    console.log(
      "Server is working on Port:" + port + " in " + envMode + " Mode."
    );
  })
  .catch((err) => {
    console.error(err);
  });

// app.use(
//   helmet({
//     contentSecurityPolicy: envMode !== "DEVELOPMENT",
//     crossOriginEmbedderPolicy: envMode !== "DEVELOPMENT",
//   })
// );

// app.use(express.json());
// app.use(express.urlencoded({extended: true}));

// app.get("/", (req, res) => {
//   res.send("Hello, World!");
// });

// your routes here

// app.listen(port, () =>
//   console.log("Server is working on Port:" + port + " in " + envMode + " Mode.")
// );
