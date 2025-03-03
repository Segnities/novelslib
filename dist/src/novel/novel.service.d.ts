import { CloudinaryService } from '@/cloudinary/cloudinary.service';
import { PrismaService } from '@/prisma/prisma.service';
import { Prisma, Novel, NovelStatus, NovelFormat, NovelTranslationStatus } from '@prisma/client';
import { SearchResponse } from 'global_types/search';
export declare class NovelService {
    private prisma;
    private cloudinaryService;
    constructor(prisma: PrismaService, cloudinaryService: CloudinaryService);
    findChaptersStatsByChapterSlug(slug: string): Promise<{
        title: string;
        slug: string;
        img: string;
        isAdult: boolean;
        chapters: {
            title: string;
            slug: string;
            chapterNumber: number;
        }[];
    }>;
    searchByAuthor(authorName: string, page?: number, limit?: number): Promise<SearchResponse>;
    searchByYear(year: number, page?: number, limit?: number): Promise<SearchResponse>;
    searchByTitle(searchTerm: string, page?: number, limit?: number): Promise<{
        data: {
            id: number;
            title: string;
            slug: string;
            img: string;
            author: {
                name: string;
            };
            alternativeTitles: {
                title: string;
            }[];
        }[];
        pagination: {
            total: number;
            page: number;
            limit: number;
            totalPages: number;
        };
    }>;
    getDownloadData(slug: string): Promise<{
        download_data: {
            id: number;
            title: string;
            description: string;
            slug: string;
            img: string;
            isAdult: boolean;
            releaseYear: number;
            coverImg: string;
            createdAt: Date;
            updatedAt: Date;
            status: import(".prisma/client").$Enums.NovelStatus;
            translationStatus: import(".prisma/client").$Enums.NovelTranslationStatus;
            format: import(".prisma/client").$Enums.NovelFormat;
            country: {
                title: string;
            };
            author: {
                name: string;
            };
            genres: {
                id: number;
                title: string;
            }[];
            chapters: {
                id: number;
                title: string;
                slug: string;
                createdAt: Date;
                updatedAt: Date;
                content: string;
                chapterNumber: number;
            }[];
        };
        chapters_stats: {
            chapters: {
                id: number;
                title: string;
                slug: string;
                createdAt: Date;
                updatedAt: Date;
                chapterNumber: number;
            }[];
        };
    }>;
    findOneById(id: number): Promise<Novel>;
    createOne(data: Prisma.NovelCreateInput): Promise<Novel>;
    createMany(data: Prisma.NovelCreateManyInput[]): Promise<Novel[]>;
    findOneBySlug(slug: string): Promise<Novel>;
    findOneByTitle(title: string): Promise<Novel>;
    findOneByOriginalTitle(original_title: string): Promise<Novel>;
    findAll(args: Prisma.NovelFindManyArgs): Promise<Novel[]>;
    likeNovel(novelId: number): Promise<Novel>;
    dislikeNovel(novelId: number): Promise<Novel>;
    updateOne(id: number, data: Prisma.NovelUpdateInput): Promise<Novel>;
    deleteOne(id: number): Promise<Novel>;
    findByAuthor(authorId: number): Promise<Novel[]>;
    findByStatus(status: NovelStatus): Promise<Novel[]>;
    findByFormat(format: NovelFormat): Promise<Novel[]>;
    findByTranslationStatus(translationStatus: NovelTranslationStatus): Promise<Novel[]>;
    findByTag(tagId: number): Promise<Novel[]>;
    findByTags(tagIds: number[]): Promise<Novel[]>;
    findByGenre(genreId: number): Promise<Novel[]>;
    findByGenres(genreIds: number[]): Promise<Novel[]>;
    findByCountry(countryId: number): Promise<Novel[]>;
    findByCountries(countryIds: number[]): Promise<Novel[]>;
    getTopRatedNovels(limit?: number): Promise<Novel[]>;
    getMostViewedNovels(limit?: number): Promise<Novel[]>;
    getRecentlyUpdatedNovels(limit?: number): Promise<Novel[]>;
    findRecentlyCreatedNovels(limit?: number): Promise<{
        id: number;
        title: string;
        slug: string;
        img: string;
        createdAt: Date;
        country: {
            title: string;
        };
    }[]>;
    getNovelWithChapters(novelId: number): Promise<Novel & {
        chapters: any[];
    }>;
    updateNovelViews(novelId: number): Promise<Novel>;
    getNovelStats(novelId: number): Promise<any>;
    getRelatedNovels(novelId: number, limit?: number): Promise<Novel[]>;
    getNovelsByReleaseYear(year: number): Promise<Novel[]>;
    getAdultNovels(): Promise<Novel[]>;
    getNonAdultNovels(): Promise<Novel[]>;
    getNovelsByAuthorName(authorName: string): Promise<Novel[]>;
    getNovelsByAlternativeTitle(title: string): Promise<Novel[]>;
    getDiscoverNovels(): Promise<{
        id: number;
        title: string;
        slug: string;
        img: string;
        country: {
            title: string;
        };
    }[]>;
    getTimeRatingNovels(): Promise<{
        weeklyTop: {
            id: number;
            title: string;
            slug: string;
            img: string;
            createdAt: Date;
            country: {
                title: string;
            };
        }[];
        monthlyTop: any[];
        allTimeTop: {
            id: number;
            title: string;
            slug: string;
            img: string;
            createdAt: Date;
            country: {
                title: string;
            };
        }[];
    }>;
    getTopRatingNovels({ limit, select, }: {
        limit: number;
        select: Prisma.NovelSelect;
    }): Promise<{
        id: number;
        title: string;
        original_title: string;
        description: string;
        slug: string;
        img: string;
        likes: number;
        dislikes: number;
        isAdult: boolean;
        releaseYear: number;
        coverImg: string;
        createdAt: Date;
        updatedAt: Date;
        views: number;
        countryId: number;
        status: import(".prisma/client").$Enums.NovelStatus;
        authorId: number;
        translationStatus: import(".prisma/client").$Enums.NovelTranslationStatus;
        format: import(".prisma/client").$Enums.NovelFormat;
        commendableTypeId: number;
        country: {
            id: number;
            title: string;
        };
        author: {
            id: number;
            img: string;
            name: string;
        };
        commendableType: {
            id: number;
            name: string;
        };
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
            title: string;
            slug: string;
            likes: number;
            createdAt: Date;
            updatedAt: Date;
            views: number;
            commendableTypeId: number;
            content: string;
            chapterNumber: number;
            novelId: number;
        }[];
        reviews: {
            id: number;
            title: string;
            likes: number;
            createdAt: Date;
            updatedAt: Date;
            views: number;
            commendableTypeId: number;
            novelId: number;
            body: string;
            userId: number;
        }[];
        usersRatings: {
            id: number;
            createdAt: Date;
            updatedAt: Date;
            novelId: number;
            userId: number;
            isLiked: boolean;
        }[];
        novelSubscription: {
            id: number;
            createdAt: Date;
            novelId: number;
            userId: number;
        }[];
        notifications: {
            id: number;
            title: string;
            img: string;
            createdAt: Date;
            updatedAt: Date;
            authorId: number | null;
            novelId: number | null;
            userId: number;
            message: string;
            typeId: number;
            relatedEntityType: import(".prisma/client").$Enums.NotificationRelatedEntity;
            relatedEntityId: number;
            notificationStatus: import(".prisma/client").$Enums.NotificationMessageStatus;
            commentId: number | null;
            reviewId: number | null;
            metadata: Prisma.JsonValue | null;
            notificationGroupId: number | null;
        }[];
        collectionItems: {
            id: number;
            createdAt: Date;
            updatedAt: Date;
            novelId: number;
            userId: number;
            collectionId: number;
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
            novelSubscription: number;
            notifications: number;
            collectionItems: number;
        };
    }[]>;
    findLastUpdatedChaptersToday(): Promise<{
        id: number;
        title: string;
        slug: string;
        img: string;
        releaseYear: number;
        country: {
            title: string;
        };
        chapters: {
            id: number;
            title: string;
            slug: string;
            chapterNumber: number;
        }[];
    }[]>;
}
