import { Module } from '@nestjs/common';
import { PostsService } from './posts.service';
import { PostsController } from './posts.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostsModel } from './entities/post.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      PostsModel,
    ])
  ],
  controllers: [PostsController],
  providers: [PostsService, PostsModel],
})
export class PostsModule {}
