import { Resolver, Mutation, Arg, ClassType, InputType, Field } from "type-graphql";
import { RegisterInput } from "./register/RegisterInput";
import { User } from "../../entity/User";
import { QuizQuestion } from "../../entity/QuizQuestion"


function createResolver<T extends ClassType, X extends ClassType>(
  suffix: string, 
  returnType: T,
  inputType: X,
  entity: any) {
  @Resolver()
  abstract class BaseResolver {
    @Mutation(() => returnType, {name: `create${suffix}`})
    async create(@Arg("data", () => inputType) data: any) {
      return entity.create(data).save();
    }
  }

  return BaseResolver
}

@InputType()
class QuizQuestionInput {
  @Field()
  name: string;
}

export const CreateUserResolver = createResolver("User", User, RegisterInput, User);
export const CreateQuizQuestionResolver = createResolver("QuizQuestion", QuizQuestion, QuizQuestionInput, QuizQuestion);
