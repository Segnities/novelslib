import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ContinueReadingWhereUniqueInput } from './continue-reading-where-unique.input';
import { Type } from 'class-transformer';
import { ContinueReadingUpdateWithoutLastChapterInput } from './continue-reading-update-without-last-chapter.input';
import { ContinueReadingCreateWithoutLastChapterInput } from './continue-reading-create-without-last-chapter.input';

@InputType()
export class ContinueReadingUpsertWithWhereUniqueWithoutLastChapterInput {

    @Field(() => ContinueReadingWhereUniqueInput, {nullable:false})
    @Type(() => ContinueReadingWhereUniqueInput)
    where!: Prisma.AtLeast<ContinueReadingWhereUniqueInput, 'id'>;

    @Field(() => ContinueReadingUpdateWithoutLastChapterInput, {nullable:false})
    @Type(() => ContinueReadingUpdateWithoutLastChapterInput)
    update!: ContinueReadingUpdateWithoutLastChapterInput;

    @Field(() => ContinueReadingCreateWithoutLastChapterInput, {nullable:false})
    @Type(() => ContinueReadingCreateWithoutLastChapterInput)
    create!: ContinueReadingCreateWithoutLastChapterInput;
}