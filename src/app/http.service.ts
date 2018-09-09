import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {User} from './user';

@Injectable()
export class HttpService{

    constructor(private http: HttpClient){ }

    getData(){
        return this.http.get('users.json');
    }

    postData(user: User){

       const myHeaders = new HttpHeaders().set('Authorization', 'my-auth-token');

       return this.http.post('http://localhost:8080/create', user, {headers:myHeaders});
   }
}
