import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NovelUncheckedUpdateManyWithoutCommendableTypeNestedInput } from '../novel/novel-unchecked-update-many-without-commendable-type-nested.input';
import { ChapterUncheckedUpdateManyWithoutCommendableTypeNestedInput } from '../chapter/chapter-unchecked-update-many-without-commendable-type-nested.input';
import { CommentUncheckedUpdateManyWithoutCommendableTypeNestedInput } from '../comment/comment-unchecked-update-many-without-commendable-type-nested.input';
import { NewsUncheckedUpdateManyWithoutCommendableTypeNestedInput } from '../news/news-unchecked-update-many-without-commendable-type-nested.input';

@InputType()
export class CommendableTypeUncheckedUpdateWithoutReviewsInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: IntFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => NovelUncheckedUpdateManyWithoutCommendableTypeNestedInput, {nullable:true})
    novels?: NovelUncheckedUpdateManyWithoutCommendableTypeNestedInput;

    @Field(() => ChapterUncheckedUpdateManyWithoutCommendableTypeNestedInput, {nullable:true})
    chapters?: ChapterUncheckedUpdateManyWithoutCommendableTypeNestedInput;

    @Field(() => CommentUncheckedUpdateManyWithoutCommendableTypeNestedInput, {nullable:true})
    comments?: CommentUncheckedUpdateManyWithoutCommendableTypeNestedInput;

    @Field(() => NewsUncheckedUpdateManyWithoutCommendableTypeNestedInput, {nullable:true})
    news?: NewsUncheckedUpdateManyWithoutCommendableTypeNestedInput;
}