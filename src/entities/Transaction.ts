import {
  BaseEntity,
  Column,
  Entity,
  CreateDateColumn,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
} from "typeorm";
import { Client } from "./client";

export enum TransactionTypes {
  DEPOSITS = "deposit",
  WITHDRAW = "withdraw",
}

@Entity("transaction")
export class Transaction extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: "enum",
    enum: TransactionTypes,
  })
  type: string;

  @Column({
    type: "numeric",
  })
  amount: number;

  @CreateDateColumn()
  created_at: Date;

  @ManyToOne(
    () => Client,
    client => client.transactions
  )

  @JoinColumn({
    name: 'client_id'
  })
  client: Client

}
