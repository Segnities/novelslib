import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';

@InputType()
export class ComplaintReasonScalarWhereInput {

    @Field(() => [ComplaintReasonScalarWhereInput], {nullable:true})
    AND?: Array<ComplaintReasonScalarWhereInput>;

    @Field(() => [ComplaintReasonScalarWhereInput], {nullable:true})
    OR?: Array<ComplaintReasonScalarWhereInput>;

    @Field(() => [ComplaintReasonScalarWhereInput], {nullable:true})
    NOT?: Array<ComplaintReasonScalarWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    title?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    description?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    userId?: IntNullableFilter;
}