import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from 'typeorm'
import { ObjectType, Field, ID } from 'type-graphql';

@ObjectType()
@Entity()
export class User extends BaseEntity {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column("text", { unique: true })
  userName: string;

  @Field()
  @Column("text", { unique: true })
  email: string;

  @Column()
  password: string;

  @Field()
  @Column()
  profileImg: string;

  @Column("bool", { default: true })
  confirmed: boolean;

  @Field()
  @Column("bool", { default: false })
  html: boolean;

  @Field()
  @Column("bool", { default: false })
  css: boolean;

  @Field()
  @Column("bool", { default: false })
  js: boolean;

  @Field()
  @Column("bool", { default: false })
  react: boolean;

  @Field()
  @Column("bool", { default: false })
  vue: boolean;

  @Field()
  @Column("bool", { default: false })
  gql: boolean;

  @Field()
  @Column("bool", { default: false })
  ts: boolean;

  @Field()
  @Column("bool", { default: false })
  vsc: boolean;

  @Field()
  @Column("bool", { default: false })
  aws: boolean;

  @Field()
  @Column()
  level: number;

  @Field(() => [Number])
  @Column("float4", {
    array: true,
    nullable: true,
  })
  html_scores: number[];

  @Field(() => [Number])
  @Column("float4", {
    array: true,
    nullable: true,
  })
  css_scores: number[];

  @Field(() => [Number])
  @Column("float4", {
    array: true,
    nullable: true,
  })
  js_scores: number[];

  @Field(() => [Number])
  @Column("float4", {
    array: true,
    nullable: true,
  })
  react_scores: number[];

  @Field(() => [Number])
  @Column("float4", {
    array: true,
    nullable: true,
  })
  vue_scores: number[];

  @Field(() => [Number])
  @Column("float4", {
    array: true,
    nullable: true,
  })
  gql_scores: number[];

  @Field(() => [Number])
  @Column("float4", {
    array: true,
    nullable: true,
  })
  ts_scores: number[];

  @Field(() => [Number])
  @Column("float4", {
    array: true,
    nullable: true,
  })
  vsc_scores: number[];

  @Field(() => [Number])
  @Column("float4", {
    array: true,
    nullable: true,
  })
  aws_scores: number[];
}