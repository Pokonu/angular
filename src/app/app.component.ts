import { Component, OnInit} from '@angular/core';
import { HttpService} from './http.service';
import {User} from './user';

@Component({
    selector: 'app-root',
    //templateUrl: './app.component.html',
    //templateUrl: './app.users.html',
    //styleUrls: ['./app.component.css'],
    template: `<div><ul>
                <li *ngFor="let user of users">
                <p>Имя пользователя: {{user?.name}}</p>
                <p>email: {{user?.email}}</p>
                <p>password: {{user?.password}}</p>
                <p>password: {{user?.verify_password}}</p>
                </li>
            </ul>
            <div>`,
    providers: [HttpService]
})
export class AppComponent {

    user: User=new User(); // данные вводимого пользователя
    users: User[]=[];

    receivedUser: User; // полученный пользователь
    done: boolean = false;
    constructor(private httpService: HttpService){}

    ngOnInit(){
        this.httpService.getData().subscribe(data => this.users=data["userList"]);
    }

    submit(user: User){
        this.httpService.postData(user)
                .subscribe(
                    (data: User) => {this.receivedUser=data; this.done=true;},
                    error => console.log(error)
                );
    }
}
