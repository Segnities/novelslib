import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthorSubscriptionModule } from './author-subscription/author-subscription.module';
import { AuthorModule } from './author/author.module';
import { CountryService } from './country/country.service';
import { GenreService } from './genre/genre.service';
import { NotificationModule } from './notification/notification.module';
import { NovelModule } from './novel/novel.module';
import { PrismaService } from './prisma/prisma.service';
import { StatusService } from './status/status.service';
import { TagService } from './tag/tag.service';
import { UserModule } from './user/user.module';
import { TagModule } from './tag/tag.module';
import { GenreModule } from './genre/genre.module';
import { AlternativeTitleModule } from './alternative-title/alternative-title.module';
import { CountryModule } from './country/country.module';
import { UserRatingModule } from './user-rating/user-rating.module';
import { NovelSubscriptionModule } from './novel-subscription/novel-subscription.module';
import { UserNotificationSettingsModule } from './user-notification-settings/user-notification-settings.module';
import { RoleModule } from './role/role.module';

@Module({
  imports: [
    AuthorModule,
    NovelModule,
    NotificationModule,
    AuthorSubscriptionModule,
    UserModule,
    TagModule,
    GenreModule,
    AlternativeTitleModule,
    CountryModule,
    UserRatingModule,
    NovelSubscriptionModule,
    UserNotificationSettingsModule,
    RoleModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    PrismaService,
    TagService,
    GenreService,
    CountryService,
    StatusService,
  ],
})
export class AppModule {}
