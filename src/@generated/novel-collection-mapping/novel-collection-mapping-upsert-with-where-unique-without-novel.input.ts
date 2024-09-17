import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { NovelCollectionMappingWhereUniqueInput } from './novel-collection-mapping-where-unique.input';
import { Type } from 'class-transformer';
import { NovelCollectionMappingUpdateWithoutNovelInput } from './novel-collection-mapping-update-without-novel.input';
import { NovelCollectionMappingCreateWithoutNovelInput } from './novel-collection-mapping-create-without-novel.input';

@InputType()
export class NovelCollectionMappingUpsertWithWhereUniqueWithoutNovelInput {

    @Field(() => NovelCollectionMappingWhereUniqueInput, {nullable:false})
    @Type(() => NovelCollectionMappingWhereUniqueInput)
    where!: Prisma.AtLeast<NovelCollectionMappingWhereUniqueInput, 'id' | 'novelId_userCollectionId'>;

    @Field(() => NovelCollectionMappingUpdateWithoutNovelInput, {nullable:false})
    @Type(() => NovelCollectionMappingUpdateWithoutNovelInput)
    update!: NovelCollectionMappingUpdateWithoutNovelInput;

    @Field(() => NovelCollectionMappingCreateWithoutNovelInput, {nullable:false})
    @Type(() => NovelCollectionMappingCreateWithoutNovelInput)
    create!: NovelCollectionMappingCreateWithoutNovelInput;
}