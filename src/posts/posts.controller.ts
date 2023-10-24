import { Controller, Get, NotFoundException, Param } from '@nestjs/common';
import { PostsService } from './posts.service';
interface PostModel {
  id:number;
  author: string;
  title: string;
  content: string;
  likeCount: number;
  commentCount: number;
}

let posts : PostModel[] = [
  {
    id:1,
    author:'dks',
    title:'asd',
    content:'woo',
    likeCount:2,
    commentCount:4,
  },
  {
    id:2,
    author:'asd',
    title:'sd',
    content:'we',
    likeCount:22,
    commentCount:43,
  },
  {
    id:3,
    author:'gge',
    title:'afw',
    content:'hh',
    likeCount:22,
    commentCount:42,
  }
];
@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

@Get()
getPosts(){
  return posts;
}

@Get(':id')
getPost(@Param('id') id:string){
  const post = posts.find((post)=>post.id === +id);

  if(!post){
    throw new NotFoundException();
  }

  return post;
}
}
