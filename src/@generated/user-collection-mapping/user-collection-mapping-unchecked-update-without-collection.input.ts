import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { NovelCollectionMappingUncheckedUpdateManyWithoutUserCollectionMappingNestedInput } from '../novel-collection-mapping/novel-collection-mapping-unchecked-update-many-without-user-collection-mapping-nested.input';

@InputType()
export class UserCollectionMappingUncheckedUpdateWithoutCollectionInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: IntFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    userId?: IntFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => NovelCollectionMappingUncheckedUpdateManyWithoutUserCollectionMappingNestedInput, {nullable:true})
    novelCollectionMapping?: NovelCollectionMappingUncheckedUpdateManyWithoutUserCollectionMappingNestedInput;
}