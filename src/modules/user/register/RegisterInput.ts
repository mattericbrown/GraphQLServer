import { Length, IsEmail, MinLength } from 'class-validator';
import { InputType, Field } from 'type-graphql';
import { IsEmailAlreadyExist } from './isEmailAlreadyExists';
import { IsUserNameAlreadyExist } from './isUserNameAlreadyExists'

@InputType()
export class RegisterInput {
  @Field()
  @IsUserNameAlreadyExist({ message: "username already in use" })
  @Length(1, 30)
  userName: string;

  @Field()
  @IsEmail()
  @IsEmailAlreadyExist({ message: "email already in use" })
  email: string;

  @Field()
  @MinLength(5)
  password: string;

  @Field()
  profileImg: string;

  @Field()
  html: boolean;

  @Field()
  css: boolean;

  @Field()
  js: boolean;

  @Field()
  react: boolean;

  @Field()
  vue: boolean;

  @Field()
  gql: boolean;

  @Field()
  ts: boolean;

  @Field()
  vsc: boolean;

  @Field()
  aws: boolean;

  @Field()
  level: number;
}