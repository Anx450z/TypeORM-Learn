import { Entity, Column, CreateDateColumn, UpdateDateColumn } from "typeorm"
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
}