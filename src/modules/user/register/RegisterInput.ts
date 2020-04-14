import { Length, IsEmail, MinLength } from 'class-validator';
import { InputType, Field } from 'type-graphql';
import { IsEmailAlreadyExist } from './isEmailAlreadyExists';

@InputType()
export class RegisterInput {
  @Field()
  @Length(1, 30)
  firstName: string;

  @Field()
  @Length(1, 30)
  lastName: string;

  @Field()
  @IsEmail()
  @IsEmailAlreadyExist({message: "email already in use"})
  email: string;

  @Field()
  @MinLength(5)
  password: string;
}