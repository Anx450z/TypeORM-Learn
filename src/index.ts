import express from "express";
import { DataSource } from "typeorm";
import dotenv from "dotenv"
import { Client } from "./entities/client"
import { Banker } from "./entities/banker";
import { Transaction } from "./entities/Transaction";
import { createClientRouter } from "./routes/create_client";
import { createBankerRouter } from "./routes/create_banker";
import { createTransactionRouter } from "./routes/create_transaction";
import { connectBankerToClient } from "./routes/connect_banker_to_client"
import { deleteClientRouter } from "./routes/delete_client";
import { fetchClientRouter } from "./routes/fetch_clients";
import { dataSource } from "./dataSource";

const app = express()

const main = async () => {
  try {

    await dataSource.initialize();
    console.log("🟢 Connected successfully to Postgresql 🐘")

    // Middleware
    app.use(express.json()) // req.body
    app.use(createClientRouter)
    app.use(createBankerRouter)
    app.use(createTransactionRouter)
    app.use(connectBankerToClient)
    app.use(deleteClientRouter)
    app.use(fetchClientRouter)

    app.listen(8080, ()=> {
      console.log("🟢 now running at Port: 8080 🌐")
    })
    
  } catch (error) {
    console.error(error)
    throw new Error("🔴 Unable to connect to Postgresql 🤔")
  }

};

main();
