import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class ContentComplaintSumOrderByAggregateInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    contentId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    reasonId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    complaintTargetId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    issuedBy?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    resolvedBy?: keyof typeof SortOrder;
}