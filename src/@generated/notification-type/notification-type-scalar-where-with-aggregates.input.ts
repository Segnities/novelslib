import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { StringNullableWithAggregatesFilter } from '../prisma/string-nullable-with-aggregates-filter.input';

@InputType()
export class NotificationTypeScalarWhereWithAggregatesInput {

    @Field(() => [NotificationTypeScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<NotificationTypeScalarWhereWithAggregatesInput>;

    @Field(() => [NotificationTypeScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<NotificationTypeScalarWhereWithAggregatesInput>;

    @Field(() => [NotificationTypeScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<NotificationTypeScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: IntWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    name?: StringWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    description?: StringNullableWithAggregatesFilter;
}