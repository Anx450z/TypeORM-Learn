import { Entity,BaseEntity, Column, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm"

@Entity() //this will not be saved in the database
export class Person extends BaseEntity{

  @PrimaryGeneratedColumn()
  id: number
  
  @Column()
  first_name: string;

  @Column({
    nullable: true
  })
  middle_name: string;

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
  card_number: string

  @Column({
    type: "numeric"
  })
  balance: number
}