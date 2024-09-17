import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { UserNotificationSettingsCountAggregate } from './user-notification-settings-count-aggregate.output';
import { UserNotificationSettingsAvgAggregate } from './user-notification-settings-avg-aggregate.output';
import { UserNotificationSettingsSumAggregate } from './user-notification-settings-sum-aggregate.output';
import { UserNotificationSettingsMinAggregate } from './user-notification-settings-min-aggregate.output';
import { UserNotificationSettingsMaxAggregate } from './user-notification-settings-max-aggregate.output';

@ObjectType()
export class AggregateUserNotificationSettings {

    @Field(() => UserNotificationSettingsCountAggregate, {nullable:true})
    _count?: UserNotificationSettingsCountAggregate;

    @Field(() => UserNotificationSettingsAvgAggregate, {nullable:true})
    _avg?: UserNotificationSettingsAvgAggregate;

    @Field(() => UserNotificationSettingsSumAggregate, {nullable:true})
    _sum?: UserNotificationSettingsSumAggregate;

    @Field(() => UserNotificationSettingsMinAggregate, {nullable:true})
    _min?: UserNotificationSettingsMinAggregate;

    @Field(() => UserNotificationSettingsMaxAggregate, {nullable:true})
    _max?: UserNotificationSettingsMaxAggregate;
}