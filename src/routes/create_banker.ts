import express from "express"
import { Banker } from "../entities/banker"

const router = express.Router()

router.post("/api/banker", async (req, res) => {
  const {
    firstName,
    lastName,
    email,
    cardNumber,
    empNumber,
    balance
  } = req.body

  const banker = Banker.create({
    first_name: firstName,
    last_name: lastName,
    email,
    card_number: cardNumber,
    employee_number: empNumber
  })

  await banker.save()
  return res.json(banker)
  
})

export {
  router as createBankerRouter
}