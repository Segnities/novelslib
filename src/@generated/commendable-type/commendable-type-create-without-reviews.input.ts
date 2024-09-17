import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NovelCreateNestedManyWithoutCommendableTypeInput } from '../novel/novel-create-nested-many-without-commendable-type.input';
import { ChapterCreateNestedManyWithoutCommendableTypeInput } from '../chapter/chapter-create-nested-many-without-commendable-type.input';
import { CommentCreateNestedManyWithoutCommendableTypeInput } from '../comment/comment-create-nested-many-without-commendable-type.input';
import { NewsCreateNestedManyWithoutCommendableTypeInput } from '../news/news-create-nested-many-without-commendable-type.input';

@InputType()
export class CommendableTypeCreateWithoutReviewsInput {

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => NovelCreateNestedManyWithoutCommendableTypeInput, {nullable:true})
    novels?: NovelCreateNestedManyWithoutCommendableTypeInput;

    @Field(() => ChapterCreateNestedManyWithoutCommendableTypeInput, {nullable:true})
    chapters?: ChapterCreateNestedManyWithoutCommendableTypeInput;

    @Field(() => CommentCreateNestedManyWithoutCommendableTypeInput, {nullable:true})
    comments?: CommentCreateNestedManyWithoutCommendableTypeInput;

    @Field(() => NewsCreateNestedManyWithoutCommendableTypeInput, {nullable:true})
    news?: NewsCreateNestedManyWithoutCommendableTypeInput;
}