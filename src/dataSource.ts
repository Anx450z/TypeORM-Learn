import { DataSource } from "typeorm";
import { Client } from "./entities/client"
import { Banker } from "./entities/banker";
import { Transaction } from "./entities/Transaction";
import dotenv from 'dotenv'

dotenv.config()

export const dataSource = new DataSource({
  type: "postgres",
  host: process.env.HOST,
  port: 5432,
  username: process.env.USERNAME,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
  entities: [Client, Banker, Transaction], // table in database
  synchronize: true // to migrate automatically
});