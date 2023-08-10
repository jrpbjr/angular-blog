import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Post } from '../components/template/new-post-form/post-form.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostServicesService {

  public baseUrl: string = 'http://localhost3001/post';

  constructor(private http: HttpClient, private snackBar: MatSnackBar) { }

 getPosts(): Observable<Post[]>{
    return this.http.get<Post[]>(this.baseUrl);
  }

  newPost(post: Post) : Observable<Post> {
    return this.http.post<Post>(this.baseUrl,post);
  }

  showMessage(msg: string, isError: boolean = false) : void{
    this.snackBar.open(msg, 'close', {
      duration: 5000,
      horizontalPosition: 'right',
      verticalPosition:'top',
      panelClass: isError ? ['msg-error']:['msg-success']
    })
  }


}
