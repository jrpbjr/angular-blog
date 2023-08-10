import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Post } from 'src/app/components/template/new-post-form/post-form.model';
import { PostServicesService } from 'src/app/services/post-services.service';
import { EditPostFormComponent } from './edit-post-form/edit-post-form.component';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts!: Post[];

  constructor(private postService: PostServicesService, private dialog: MatDialog) {}

  ngOnInit(): void {
    this.postService.getPosts().subscribe((post) => {
      this.posts = post;
    });
  }
  delete(post: Post) {
    this.postService.deletePost(`${post.id}`).subscribe(() => {
      this.postService.showMessage('Post deleted!', true);
      this.ngOnInit();
    });
  }

  update(post: Post) {
    this.postService.setPost(post);
    this.dialog.open(EditPostFormComponent);
  }
}
