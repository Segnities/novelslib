import { NovelService } from './novel.service';
import { Novel, NovelFormat, NovelStatus, NovelTranslationStatus, Prisma } from '@prisma/client';
export declare class NovelController {
    private readonly novelService;
    constructor(novelService: NovelService);
    getDiscoverNovels(): Promise<{
        country: {
            title: string;
        };
        id: number;
        img: string;
        title: string;
        slug: string;
    }[]>;
    getTimeRatingNovels(): Promise<{
        weeklyTop: any[];
        monthlyTop: any[];
        allTimeTop: {
            country: {
                title: string;
            };
            id: number;
            createdAt: Date;
            img: string;
            title: string;
            slug: string;
        }[];
    }>;
    getTopRatingNovels(data: {
        limit: number;
        select: Prisma.NovelSelect;
    }): Promise<{
        novelSubscription: {
            id: number;
            createdAt: Date;
            userId: number;
            novelId: number;
        }[];
        continueReading: {
            id: number;
            userId: number;
            novelId: number;
            progressPercentage: number;
            lastChapterId: number;
        }[];
        commendableType: {
            name: string;
            id: number;
        };
        country: {
            id: number;
            title: string;
        };
        author: {
            name: string;
            id: number;
            img: string;
        };
        id: number;
        createdAt: Date;
        authorId: number;
        img: string;
        notifications: {
            id: number;
            createdAt: Date;
            userId: number;
            authorId: number | null;
            img: string;
            title: string;
            updatedAt: Date;
            message: string;
            relatedEntityType: import(".prisma/client").$Enums.NotificationRelatedEntity;
            relatedEntityId: number;
            notificationStatus: import(".prisma/client").$Enums.NotificationMessageStatus;
            metadata: Prisma.JsonValue | null;
            typeId: number;
            novelId: number | null;
            commentId: number | null;
            reviewId: number | null;
            notificationGroupId: number | null;
        }[];
        _count: {
            country: number;
            author: number;
            commendableType: number;
            tags: number;
            genres: number;
            alternativeTitles: number;
            chapters: number;
            reviews: number;
            usersRatings: number;
            continueReading: number;
            novelSubscription: number;
            notifications: number;
            collectionItems: number;
        };
        title: string;
        original_title: string;
        description: string;
        slug: string;
        likes: number;
        dislikes: number;
        isAdult: boolean;
        releaseYear: number;
        coverImg: string;
        updatedAt: Date;
        views: number;
        status: import(".prisma/client").$Enums.NovelStatus;
        translationStatus: import(".prisma/client").$Enums.NovelTranslationStatus;
        format: import(".prisma/client").$Enums.NovelFormat;
        tags: {
            id: number;
            title: string;
        }[];
        genres: {
            id: number;
            title: string;
        }[];
        alternativeTitles: {
            id: number;
            title: string;
            novelId: number;
        }[];
        chapters: {
            id: number;
            createdAt: Date;
            title: string;
            slug: string;
            likes: number;
            updatedAt: Date;
            views: number;
            commendableTypeId: number;
            novelId: number;
            content: string;
            chapterNumber: number;
        }[];
        reviews: {
            id: number;
            createdAt: Date;
            userId: number;
            title: string;
            likes: number;
            updatedAt: Date;
            views: number;
            commendableTypeId: number;
            novelId: number;
            body: string;
        }[];
        usersRatings: {
            id: number;
            createdAt: Date;
            userId: number;
            updatedAt: Date;
            novelId: number;
            isLiked: boolean;
        }[];
        collectionItems: {
            id: number;
            createdAt: Date;
            userId: number;
            updatedAt: Date;
            novelId: number;
            collectionId: number;
        }[];
        countryId: number;
        commendableTypeId: number;
    }[]>;
    findOneById(id: number): Promise<Novel>;
    findAll(args: Prisma.NovelFindManyArgs): Promise<Novel[]>;
    createOne(data: Prisma.NovelCreateInput): Promise<Novel>;
    createMany(data: Prisma.NovelCreateManyInput[]): Promise<Novel[]>;
    updateOne(id: number, data: Prisma.NovelUpdateInput): Promise<Novel>;
    deleteOne(id: number): Promise<Novel>;
    findByAuthor(authorId: number): Promise<Novel[]>;
    findByStatus(status: NovelStatus): Promise<Novel[]>;
    findByFormat(format: NovelFormat): Promise<Novel[]>;
    findByTranslationStatus(status: NovelTranslationStatus): Promise<Novel[]>;
    findByTag(tagId: number): Promise<Novel[]>;
    findByTags(tagIds: number[]): Promise<Novel[]>;
    findByGenre(genreId: number): Promise<Novel[]>;
    findByGenres(genreIds: number[]): Promise<Novel[]>;
    findByCountry(countryId: number): Promise<Novel[]>;
    findByCountries(countryIds: number[]): Promise<Novel[]>;
    getTopRatedNovels(limit?: number): Promise<Novel[]>;
    getMostViewedNovels(limit?: number): Promise<Novel[]>;
    getRecentlyUpdatedNovels(limit?: number): Promise<Novel[]>;
    searchNovels(searchTerm: string): Promise<Novel[]>;
    getNovelWithChapters(id: number): Promise<Novel & {
        chapters: any[];
    }>;
    updateNovelViews(id: number): Promise<Novel>;
    getNovelStats(id: number): Promise<any>;
    getRelatedNovels(id: number, limit?: number): Promise<Novel[]>;
    getNovelsByReleaseYear(year: number): Promise<Novel[]>;
    getAdultNovels(): Promise<Novel[]>;
    getNonAdultNovels(): Promise<Novel[]>;
    getNovelsByAuthorName(name: string): Promise<Novel[]>;
    getNovelsByAlternativeTitle(title: string): Promise<Novel[]>;
}
