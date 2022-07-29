import { Entity, Column, CreateDateColumn, UpdateDateColumn, OneToMany, ManyToMany } from "typeorm"
import { Banker } from "./banker";
import { Transaction } from "./Transaction";
import { Person } from "./utils/person";

@Entity('client') //name of the table
export class Client extends Person{

  @Column({
    type: "numeric"
  })
  balance: number

  @Column({
    default: true,
  })
  is_active: boolean

  @Column({
    type: "simple-json",
    nullable: true
  })
  additional_info: {
    age: number;
    username: string
  }

  @Column({
    type: "simple-array",
    default: []
  })
  family_members: string[]

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @OneToMany(
    ()=> Transaction,
    transaction => transaction.client
  )
  transactions: Transaction[]

  @ManyToMany(
    ()=> Banker
  )
  banker: Banker[]
}