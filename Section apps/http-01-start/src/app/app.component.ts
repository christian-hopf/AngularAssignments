import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { map } from 'rxjs/operators';
import { Post } from './post.model';
import { PostsService } from './posts.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, OnDestroy {
  loadedPosts: Post[] = [];
  isLoading = false;
  error = null;
  private errorSub: Subscription;

  constructor(private http: HttpClient, private postsService: PostsService) {}

  ngOnInit() {
    this.errorSub = this.postsService.error.subscribe((errorMessage) => {
      this.error = errorMessage;
    });

    this.isLoading = true;
    this.postsService.fetchPosts().subscribe(
      (posts) => {
        this.isLoading = false;
        this.loadedPosts = posts;
      },
      (error) => {
        this.error = error.message;
        console.log(error);
      }
    );
  }

  ngOnDestroy(): void {
    this.errorSub.unsubscribe();
  }

  onCreatePost(postData: Post) {
    // Send Http request
    this.postsService.createPost(postData);
  }

  onFetchPosts() {
    this.isLoading = true;
    this.postsService.fetchPosts().subscribe(
      (posts) => {
        this.isLoading = false;
        this.loadedPosts = posts;
      },
      (error) => {
        this.isLoading = false;
        this.error = error.message;
      }
    );
  }

  onClearPosts() {
    // Send Http request
    this.postsService.deletePosts().subscribe(() => {
      this.loadedPosts = [];
    });
  }

  onHandleError() {
    this.error = null;
  }
}
