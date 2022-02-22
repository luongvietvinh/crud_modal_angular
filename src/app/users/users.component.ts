import { Component, OnInit } from '@angular/core';
class Users {
  id : number = 0;
  name : string = "";
  img : string = "";

  constructor(id: number, name: string, img: string) {
    this.id = id;
    this.name = name;
    this.img = img;
  }
}
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: Users[] = [];
  id : number = 0;
  name : string = "";
  img : string = "";

  constructor() {
    this.users.push(new Users(1, "vinh", "https://img.nhandan.com.vn/Files/Images/2020/07/26/nhat_cay-1595747664059.jpg"))
    this.users.push(new Users(2, "tai", "https://previews.123rf.com/images/thefinalmiracle/thefinalmiracle1110/thefinalmiracle111000056/11065574-a-portrait-of-a-young-indian-man-.jpg"))
  }
create () :void {
  this.users.push(new Users(this.id, this.name, this.img));
  this.id = 0;
  this.name = "";
  this.img = "";
}
showedit(id : number){
  for (let i = 0; i < this.users.length; i++) {
    if (this.users[i].id === id){
      this.id = this.users[i].id;
      this.name = this.users[i].name;
      this.img = this.users[i].img;
      return;
    }
  }
}
 submitEdit(id:number) {
   for (let i = 0; i < this.users.length; i++) {
     if (this.users[i].id === id) {
       this.users[i] = new Users(this.id, this.name, this.img);
       this.id = 0;
       this.name = "";
       this.img = "";
       return;
     }
   }
 }
  delete(id: number): void {
    for (let i = 0; i < this.users.length; i++) {
      if (this.users[i].id === id) {
        this.users.splice(i, 1)
        return;
      }
    }
  }

  ngOnInit(): void {
  }

}
