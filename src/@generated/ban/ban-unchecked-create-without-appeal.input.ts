import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@InputType()
export class BanUncheckedCreateWithoutAppealInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => Date, {nullable:true})
    banStart?: Date | string;

    @Field(() => Date, {nullable:false})
    banEnd!: Date | string;

    @Field(() => Int, {nullable:false})
    duration!: number;

    @Field(() => Boolean, {nullable:true})
    appealed?: boolean;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => Int, {nullable:false})
    issuedBy!: number;

    @Field(() => Int, {nullable:false})
    userId!: number;

    @Field(() => Int, {nullable:false})
    complaintTargetId!: number;
}