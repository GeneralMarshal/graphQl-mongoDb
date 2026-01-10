import { Resolver, Query } from '@nestjs/graphql';
import { LessonType } from './lesson.type';

@Resolver(() => LessonType)
export class LessonResolver {
  @Query(() => LessonType)
  lesson() {
    return {
      id: 'placeholderId',
      name: 'placeholderName',
      startDate: new Date().toISOString(),
      endDate: new Date().toISOString(),
    };
  }
}
