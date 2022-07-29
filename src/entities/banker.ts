import { Entity,BaseEntity, Column, PrimaryColumn, CreateDateColumn, UpdateDateColumn } from "typeorm"

@Entity('banker') //name of the table
export class Banker extends BaseEntity{

  @PrimaryColumn()
  id: number
  
  @Column()
  first_name: string;

  @Column()
  last_name: string;

  @Column({
    unique: true
  })
  email: string

  @Column({
    unique: true,
    length: 10
  })
  card_namer: string

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