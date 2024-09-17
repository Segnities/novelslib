import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class AlternativeTitleCreateWithoutNovelInput {

    @Field(() => String, {nullable:false})
    title!: string;
}