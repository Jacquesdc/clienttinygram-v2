import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { UserModel } from "./models";

@Injectable({
  providedIn: "root"
})
export class UsersService {
  currentUser: UserModel;

  getCurrentUser(): UserModel {
    return this.currentUser;
  }

  constructor(private http: HttpClient) {
    const userLocalStorage = localStorage.getItem("user");

    if (userLocalStorage) {
      this.currentUser = JSON.parse(userLocalStorage);
    }
  }

  getAll() {
    return this.http.get("https://model-zoo-290312.ew.r.appspot.com/AllPosts");
  }

  login(user: UserModel): void {
    this.currentUser = user;
    localStorage.setItem("user", JSON.stringify(user));
  }

  signout(): void {
    console.log("user service signout");
    this.currentUser = undefined;
  }
}
