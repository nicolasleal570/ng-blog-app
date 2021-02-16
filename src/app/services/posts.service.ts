import { Injectable } from '@angular/core';
import { AngularFireList } from '@angular/fire/database';
import {
  AngularFirestore,
  AngularFirestoreCollection,
  DocumentReference,
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Post } from '../models/post';

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  private postsCollection: AngularFirestoreCollection<Post>;

  constructor(private firestore: AngularFirestore) {
    this.postsCollection = this.firestore.collection<Post>('posts');
  }

  /**
   * GET ALL POSTS
   */
  getAllPosts(): Observable<Post[]> {
    return this.postsCollection.snapshotChanges().pipe(
      map((changes) => {
        return changes.map((post) => ({
          id: post.payload.doc.id,
          ...post.payload.doc.data(),
        }));
      })
    );
  }

  /**
   * GET POST BY ID
   * @param postId
   */
  getPostById(postId: string): Observable<Post> {
    return this.postsCollection
      .doc<Post>(postId)
      .snapshotChanges()
      .pipe(
        map((post) => {
          return {
            id: post.payload.id,
            ...post.payload.data(),
          };
        })
      );
  }

  /**
   * CREATE NEW POST
   * @param newPost
   */
  createNewPost(newPost: Post): Promise<DocumentReference> {
    return this.postsCollection.add(newPost);
  }

  /**
   * UPDATE POST BY ID
   * @param postId
   * @param postData
   */
  updatePost(postId: string, postData: Post): Promise<void> {
    return this.postsCollection.doc<Post>(postId).update(postData);
  }

  /**
   * DELETE POST BY ID
   * @param postId
   */
  deletePost(postId: string): Promise<void> {
    return this.postsCollection.doc<Post>(postId).delete();
  }
}
