import { Entity, Column, BaseEntity, PrimaryGeneratedColumn } from "typeorm";
import { ObjectType, Field } from "type-graphql";

@ObjectType()
@Entity()
export class QuizQuestion extends BaseEntity {
  @Field()
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column()
  question: string;

  @Field()
  @Column("bool", { default: false })
  a: boolean;

  @Field()
  @Column("bool", { default: false })
  b: boolean;

  @Field()
  @Column("bool", { default: false })
  c: boolean;

  @Field()
  @Column("bool", { default: false })
  d: boolean;

  @Column("bool", { default: false })
  answer: boolean;
}
