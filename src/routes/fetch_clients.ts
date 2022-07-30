import express from "express"
import { Client } from "../entities/client"
import { dataSource } from "../dataSource"
// ! this is deprecated
// import { createQueryBuilder } from "typeorm"

const router = express.Router()

router.get("/api/clients", async (req, res)=>{

  // ! deprecated
  // const clients = await createQueryBuilder(
  //   "client"
  // )
  // .select("client")
  // .from(Client, "client")
  // .where('client.id = :clientId', {clientID : 4})
  // .getOne()

  // * new approach
  const clients = await dataSource
  .createQueryBuilder()
  .select("client.first_name")
  .addSelect("client.balance")
  .from(Client, "client")
  .where("client.balance >= :minBalance AND client.balance <= :maxBalance", { 
    minBalance: 500 ,
    maxBalance: 1000
  })
  .getManyAndCount()
  
  return res.json(clients)
})

export {
  router as fetchClientRouter
}