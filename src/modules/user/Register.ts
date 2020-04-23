import { Resolver, Query, Mutation, Arg, UseMiddleware } from "type-graphql";
import bcrypt from 'bcryptjs'
import { User } from "../../entity/User";
import { RegisterInput } from "./register/RegisterInput";
import { isAuth } from "../middleware/isAuth";
import { sendEmail } from "../utils/sendEmail";
import { createConfirmationUrl } from "../utils/createConfirmationUrl"

@Resolver()
export class RegisterResolver {
  @UseMiddleware(isAuth)
  @Query(() => String)
  async hello() {
    return "Hello World!";
  }

  @Mutation(() => User)
  async register(
    @Arg("data")
    {
      email,
      userName,
      password,
      profileImg,
      html,
      css,
      js,
      react,
      vue,
      gql,
      ts,
      vsc,
      aws,
      level
      
    }: RegisterInput
  ): Promise<User> {
    const hashedPassword = await bcrypt.hash(password, 12);

    const user = await User.create({
      userName,
      email,
      password: hashedPassword,
      profileImg,
      html,
      css,
      js,
      react,
      vue,
      gql,
      ts,
      vsc,
      aws,
      level
    }).save();

    await sendEmail(email, await createConfirmationUrl(user.id));

    return user;
  }
}
