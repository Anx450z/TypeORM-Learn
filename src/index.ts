import express from "express";
import { DataSource } from "typeorm";
import dotenv from "dotenv"
import { Client } from "./entities/client"
import { Banker } from "./entities/banker";
import { Transaction } from "./entities/Transaction";

dotenv.config()
const app = express()

const main = async () => {
  try {
    const dataSource = new DataSource({
      type: "postgres",
      host: process.env.HOST,
      port: 5432,
      username: process.env.USERNAME,
      password: process.env.PASSWORD,
      database: process.env.DATABASE,
      entities: [Client, Banker, Transaction], // table in database
      synchronize: true // to migrate automatically
    });

    let connection = await dataSource.initialize();
    console.log("🟢 Connected successfully to Postgresql 🐘")

    // Middleware
    app.use(express.json()) // req.body

    app.listen(8080, ()=> {
      console.log("🟢 now running at Port: 8080 🌐")
    })
    
  } catch (error) {
    console.error(error)
    throw new Error("🔴 Unable to connect to Postgresql 🤔")
  }


  // connection.manager./* your stuff...*/
};

main();
