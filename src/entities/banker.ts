import { Entity, Column, CreateDateColumn, UpdateDateColumn, ManyToMany, JoinTable } from "typeorm"
import { Client } from "./client";
import { Person } from "./utils/person";

@Entity('banker') //name of the table
export class Banker extends Person{

  @Column({
    unique: true,
    length: 10
  })
  employee_number: string

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @ManyToMany(
    () => Client 
  )
  @JoinTable({
    name: "banker_clients",
    joinColumn: {
      name: "banker",
      referencedColumnName: 'id'
    },
    inverseJoinColumn: {
      name: "client",
      referencedColumnName: "id"
    }
  })
  clients: Client[]
}