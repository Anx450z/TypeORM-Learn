import { DataSource } from "typeorm";
import dotenv from "dotenv"
import { Client } from "./entities/client"

dotenv.config()

const main = async () => {
  try {
    const dataSource = new DataSource({
      type: "postgres",
      host: process.env.HOST,
      port: 5432,
      username: process.env.USERNAME,
      password: process.env.PASSWORD,
      database: process.env.DATABASE,
      entities: [Client],
      synchronize: true
    });

    let connection = await dataSource.initialize();
    console.log("🟢 Connected successfully to Postgres 🐘")
  } catch (error) {
    console.error(error)
    throw new Error("🔴 Unable to connect to postgresql 🤔")
  }


  // connection.manager./* your stuff...*/
};

main();
