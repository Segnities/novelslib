import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { AppealWhereUniqueInput } from './appeal-where-unique.input';
import { Type } from 'class-transformer';
import { AppealCreateWithoutBansInput } from './appeal-create-without-bans.input';

@InputType()
export class AppealCreateOrConnectWithoutBansInput {

    @Field(() => AppealWhereUniqueInput, {nullable:false})
    @Type(() => AppealWhereUniqueInput)
    where!: Prisma.AtLeast<AppealWhereUniqueInput, 'id'>;

    @Field(() => AppealCreateWithoutBansInput, {nullable:false})
    @Type(() => AppealCreateWithoutBansInput)
    create!: AppealCreateWithoutBansInput;
}