import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class PostServicesService {

  public baseUrl: string = 'http://localhost3001/post';

  constructor(private http: HttpClient, private snackBar: MatSnackBar) { }

  getpost(){
    return this.http.get(this.baseUrl);
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
