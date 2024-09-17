import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { UserListRelationFilter } from '../user/user-list-relation-filter.input';

@InputType()
export class TeamWhereInput {

    @Field(() => [TeamWhereInput], {nullable:true})
    AND?: Array<TeamWhereInput>;

    @Field(() => [TeamWhereInput], {nullable:true})
    OR?: Array<TeamWhereInput>;

    @Field(() => [TeamWhereInput], {nullable:true})
    NOT?: Array<TeamWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => IntFilter, {nullable:true})
    chapters_count?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    books_count?: IntFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => UserListRelationFilter, {nullable:true})
    users?: UserListRelationFilter;
}