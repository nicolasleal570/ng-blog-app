import { Injectable } from '@angular/core';
import { Post } from '../models/post';

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  posts: Array<Post> = [
    {
      id: '1',
      title: 'UX Design',
      summary: 'Soy el summary',
      body: 'Soy el body',
      category: 'UX and UI Design',
      photo:
        'https://images.unsplash.com/photo-1472437774355-71ab6752b434?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1267&q=80',
    },
    {
      id: '2',
      title: 'Learn React and develop UIs',
      summary: 'Soy el summary',
      body: 'Soy el body',
      category: 'JS and React',
      photo:
        'https://images.unsplash.com/photo-1472437774355-71ab6752b434?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1267&q=80',
    },
    {
      id: '3',
      title: 'Learn Javascript from 0 to expert',
      summary: 'Soy el summary',
      body: 'Soy el body',
      category: 'HTML, CSS and JS',
      photo:
        'https://images.unsplash.com/photo-1472437774355-71ab6752b434?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1267&q=80',
    },
    {
      id: '4',
      title: 'UX Design',
      summary: 'Soy el summary',
      body: 'Soy el body',
      category: 'UX and UI Design',
      photo:
        'https://images.unsplash.com/photo-1472437774355-71ab6752b434?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1267&q=80',
    },
    {
      id: '5',
      title: 'Learn React and develop UIs',
      summary: 'Soy el summary',
      body: 'Soy el body',
      category: 'JS and React',
      photo:
        'https://images.unsplash.com/photo-1472437774355-71ab6752b434?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1267&q=80',
    },
    {
      id: '6',
      title: 'Learn Javascript from 0 to expert',
      summary: 'Soy el summary',
      body: 'Soy el body',
      category: 'HTML, CSS and JS',
      photo:
        'https://images.unsplash.com/photo-1472437774355-71ab6752b434?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1267&q=80',
    },
  ];

  constructor() {}

  getAllPosts(): Array<Post> {
    return this.posts;
  }

  getPostById(id: string): Post {
    return this.posts.find((item) => item.id === id);
  }
}
