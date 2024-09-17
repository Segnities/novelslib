import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { NovelUpdateOneRequiredWithoutChaptersNestedInput } from '../novel/novel-update-one-required-without-chapters-nested.input';
import { CommendableTypeUpdateOneRequiredWithoutChaptersNestedInput } from '../commendable-type/commendable-type-update-one-required-without-chapters-nested.input';
import { BookmarkUpdateManyWithoutChapterNestedInput } from '../bookmark/bookmark-update-many-without-chapter-nested.input';
import { ContinueReadingUpdateManyWithoutLastChapterNestedInput } from '../continue-reading/continue-reading-update-many-without-last-chapter-nested.input';

@InputType()
export class ChapterUpdateWithoutComplainTargetTypeInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    title?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    content?: StringFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    likes?: IntFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    complaitTypeId?: IntFieldUpdateOperationsInput;

    @Field(() => NovelUpdateOneRequiredWithoutChaptersNestedInput, {nullable:true})
    novel?: NovelUpdateOneRequiredWithoutChaptersNestedInput;

    @Field(() => CommendableTypeUpdateOneRequiredWithoutChaptersNestedInput, {nullable:true})
    commendableType?: CommendableTypeUpdateOneRequiredWithoutChaptersNestedInput;

    @Field(() => BookmarkUpdateManyWithoutChapterNestedInput, {nullable:true})
    bookmarks?: BookmarkUpdateManyWithoutChapterNestedInput;

    @Field(() => ContinueReadingUpdateManyWithoutLastChapterNestedInput, {nullable:true})
    continueNovel?: ContinueReadingUpdateManyWithoutLastChapterNestedInput;
}