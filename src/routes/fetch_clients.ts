import express from "express"
import { Client } from "../entities/client"

const router = express.Router()

router.get("/api/clients", async (req, res)=>{
  const clients = await Client.find()

  return res.json(clients)
})

export {
  router as fetchClientRouter
}