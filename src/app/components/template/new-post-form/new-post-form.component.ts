import { Component, OnInit } from '@angular/core';
import { Post } from './post-form.model';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { PostServicesService } from 'src/app/services/post-services.service';
import { NewPostActionsComponent } from '../new-post-actions/new-post-actions.component';

@Component({
  selector: 'app-new-post-form',
  templateUrl: './new-post-form.component.html',
  styleUrls: ['./new-post-form.component.css']
})
export class NewPostFormComponent implements OnInit {

  disabled = true;
  post: Post ={
    user: '',
    title: '',
    postContent: ''

  }

  constructor(
    private dialog: MatDialog,
    private dialogRef: MatDialogRef<NewPostFormComponent>,
    private postService: PostServicesService
  ) { }

  ngOnInit(): void {
  }

  publish(): void {
    this.postService.newPost(this.post).subscribe(() => {
      this.dialog.closeAll();
      this.postService.showMessage('New post added!', true);
      setTimeout(() => {
        window.location.reload();
      }, 1000);
    });
  }


  cancel() {
    if (this.post.postContent != '') {
      this.dialog.open(NewPostActionsComponent);
    } else {
      this.dialogRef.close();
    }
  }
}
