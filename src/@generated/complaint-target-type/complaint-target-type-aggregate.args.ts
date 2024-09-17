import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ComplaintTargetTypeWhereInput } from './complaint-target-type-where.input';
import { Type } from 'class-transformer';
import { ComplaintTargetTypeOrderByWithRelationInput } from './complaint-target-type-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { ComplaintTargetTypeWhereUniqueInput } from './complaint-target-type-where-unique.input';
import { Int } from '@nestjs/graphql';
import { ComplaintTargetTypeCountAggregateInput } from './complaint-target-type-count-aggregate.input';
import { ComplaintTargetTypeAvgAggregateInput } from './complaint-target-type-avg-aggregate.input';
import { ComplaintTargetTypeSumAggregateInput } from './complaint-target-type-sum-aggregate.input';
import { ComplaintTargetTypeMinAggregateInput } from './complaint-target-type-min-aggregate.input';
import { ComplaintTargetTypeMaxAggregateInput } from './complaint-target-type-max-aggregate.input';

@ArgsType()
export class ComplaintTargetTypeAggregateArgs {

    @Field(() => ComplaintTargetTypeWhereInput, {nullable:true})
    @Type(() => ComplaintTargetTypeWhereInput)
    where?: ComplaintTargetTypeWhereInput;

    @Field(() => [ComplaintTargetTypeOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<ComplaintTargetTypeOrderByWithRelationInput>;

    @Field(() => ComplaintTargetTypeWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<ComplaintTargetTypeWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => ComplaintTargetTypeCountAggregateInput, {nullable:true})
    _count?: ComplaintTargetTypeCountAggregateInput;

    @Field(() => ComplaintTargetTypeAvgAggregateInput, {nullable:true})
    _avg?: ComplaintTargetTypeAvgAggregateInput;

    @Field(() => ComplaintTargetTypeSumAggregateInput, {nullable:true})
    _sum?: ComplaintTargetTypeSumAggregateInput;

    @Field(() => ComplaintTargetTypeMinAggregateInput, {nullable:true})
    _min?: ComplaintTargetTypeMinAggregateInput;

    @Field(() => ComplaintTargetTypeMaxAggregateInput, {nullable:true})
    _max?: ComplaintTargetTypeMaxAggregateInput;
}