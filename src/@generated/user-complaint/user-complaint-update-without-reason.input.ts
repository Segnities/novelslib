import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EnumApprovalStatusFieldUpdateOperationsInput } from '../prisma/enum-approval-status-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { UserUpdateOneRequiredWithoutUserComplaintsNestedInput } from '../user/user-update-one-required-without-user-complaints-nested.input';
import { ComplaintTargetTypeUpdateOneRequiredWithoutUsersComplaintsNestedInput } from '../complaint-target-type/complaint-target-type-update-one-required-without-users-complaints-nested.input';

@InputType()
export class UserComplaintUpdateWithoutReasonInput {

    @Field(() => EnumApprovalStatusFieldUpdateOperationsInput, {nullable:true})
    status?: EnumApprovalStatusFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => UserUpdateOneRequiredWithoutUserComplaintsNestedInput, {nullable:true})
    user?: UserUpdateOneRequiredWithoutUserComplaintsNestedInput;

    @Field(() => ComplaintTargetTypeUpdateOneRequiredWithoutUsersComplaintsNestedInput, {nullable:true})
    complaintTargetType?: ComplaintTargetTypeUpdateOneRequiredWithoutUsersComplaintsNestedInput;
}