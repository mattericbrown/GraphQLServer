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

  @Column("float4", {
    array: true,
    default: () => "array[]::integer[]",
    nullable: false,
  })
  html_scores: number[];

  @Column("float4", {
    array: true,
    default: () => "array[]::integer[]",
    nullable: false,
  })
  css_scores: number[];

  @Column("float4", {
    array: true,
    default: () => "array[]::integer[]",
    nullable: false,
  })
  js_scores: number[];

  @Column("float4", {
    array: true,
    default: () => "array[]::integer[]",
    nullable: false,
  })
  react_scores: number[];

  @Column("float4", {
    array: true,
    default: () => "array[]::integer[]",
    nullable: false,
  })
  vue_scores: number[];

  @Column("float4", {
    array: true,
    default: () => "array[]::integer[]",
    nullable: false,
  })
  gql_scores: number[];

  @Column("float4", {
    array: true,
    default: () => "array[]::integer[]",
    nullable: false,
  })
  ts_scores: number[];

  @Column("float4", {
    array: true,
    default: () => "array[]::integer[]",
    nullable: false,
  })
  vsc_scores: number[];

  @Column("float4", {
    array: true,
    default: () => "array[]::integer[]",
    nullable: false,
  })
  aws_scores: number[];
}