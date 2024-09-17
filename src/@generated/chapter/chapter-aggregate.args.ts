import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ChapterWhereInput } from './chapter-where.input';
import { Type } from 'class-transformer';
import { ChapterOrderByWithRelationInput } from './chapter-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { ChapterWhereUniqueInput } from './chapter-where-unique.input';
import { Int } from '@nestjs/graphql';
import { ChapterCountAggregateInput } from './chapter-count-aggregate.input';
import { ChapterAvgAggregateInput } from './chapter-avg-aggregate.input';
import { ChapterSumAggregateInput } from './chapter-sum-aggregate.input';
import { ChapterMinAggregateInput } from './chapter-min-aggregate.input';
import { ChapterMaxAggregateInput } from './chapter-max-aggregate.input';

@ArgsType()
export class ChapterAggregateArgs {

    @Field(() => ChapterWhereInput, {nullable:true})
    @Type(() => ChapterWhereInput)
    where?: ChapterWhereInput;

    @Field(() => [ChapterOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<ChapterOrderByWithRelationInput>;

    @Field(() => ChapterWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<ChapterWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => ChapterCountAggregateInput, {nullable:true})
    _count?: ChapterCountAggregateInput;

    @Field(() => ChapterAvgAggregateInput, {nullable:true})
    _avg?: ChapterAvgAggregateInput;

    @Field(() => ChapterSumAggregateInput, {nullable:true})
    _sum?: ChapterSumAggregateInput;

    @Field(() => ChapterMinAggregateInput, {nullable:true})
    _min?: ChapterMinAggregateInput;

    @Field(() => ChapterMaxAggregateInput, {nullable:true})
    _max?: ChapterMaxAggregateInput;
}