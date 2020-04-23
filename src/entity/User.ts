import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from 'typeorm'
import { ObjectType, Field, ID } from 'type-graphql';

@ObjectType()
@Entity()
export class User extends BaseEntity {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column({ nullable: true })
  userName: string;

  @Field()
  @Column("text", { unique: true })
  email: string;

  @Column()
  password: string;

  @Field()
  @Column({ nullable: true })
  profileImg: string;

  @Column("bool", { default: false })
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
  @Column("int", { default: 1 })
  level: number;

  @Field(() => [Number], { nullable: true })
  @Column("float4", {
    array: true,
    default: () => "array[]::integer[]",
    nullable: false,
  })
  html_scores: number[];

  @Field(() => [Number], { nullable: true })
  @Column("float4", {
    array: true,
    default: () => "array[]::integer[]",
    nullable: false,
  })
  css_scores: number[];

  @Field(() => [Number], { nullable: true })
  @Column("float4", {
    array: true,
    default: () => "array[]::integer[]",
    nullable: false,
  })
  js_scores: number[];

  @Field(() => [Number], { nullable: true })
  @Column("float4", {
    array: true,
    default: () => "array[]::integer[]",
    nullable: false,
  })
  react_scores: number[];

  @Field(() => [Number], { nullable: true })
  @Column("float4", {
    array: true,
    default: () => "array[]::integer[]",
    nullable: false,
  })
  vue_scores: number[];

  @Field(() => [Number], { nullable: true })
  @Column("float4", {
    array: true,
    default: () => "array[]::integer[]",
    nullable: false,
  })
  gql_scores: number[];

  @Field(() => [Number], { nullable: true })
  @Column("float4", {
    array: true,
    default: () => "array[]::integer[]",
    nullable: false,
  })
  ts_scores: number[];

  @Field(() => [Number], { nullable: true })
  @Column("float4", {
    array: true,
    default: () => "array[]::integer[]",
    nullable: false,
  })
  vsc_scores: number[];

  @Field(() => [Number], { nullable: true })
  @Column("float4", {
    array: true,
    default: () => "array[]::integer[]",
    nullable: false,
  })
  aws_scores: number[];
}