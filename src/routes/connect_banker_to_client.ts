import express from 'express'
import { Client } from '../entities/client'
import { Banker } from '../entities/banker'
const router = express.Router()

router.put("/api/banker/:bankerId/client/:clientId", async (req, res) =>{
  const { bankerId, clientId } = req.params

  const client = await Client.findOneBy({id: parseInt(clientId) })
  const banker = await Banker.findOneBy({id: parseInt(bankerId) })

  if(!banker || !client) {
    res.json({
      msg: "🟡Banker or Client not found😕"
    })
  }

  banker!.clients = [client!]

  await banker!.save()

  return res.json({
    msg: "🟢Banker connect with Client🤝"
  })
})

export {
  router as connectBankerToClient
}