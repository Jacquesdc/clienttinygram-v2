import { Component, OnInit } from "@angular/core";

import { HttpClient } from "@angular/common/http";
import { UserModel } from "./models";
import { UsersService } from "./users.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "Tinygram";
  version = "social network";
}
export class BookSearchComponent implements OnInit {
  bookCount: number;
  bookList: UserModel[];
  totalItems: number;

  private _bookListUrl =
    "https://www.googleapis.com/books/v1/volumes?q=extreme%20programming";

  constructor(
    private _httpClient: HttpClient,
    private usersService: UsersService
  ) {}

  signout() {
    console.log("app component sign out");
    this.usersService.signout();
    this.reload();
  }

  reload() {}
  ngOnInit() {
    this._httpClient
      .get(this._bookListUrl)
      .subscribe(googleVolumeListResponse => {
        //this.bookCount = googleVolumeListResponse.totalItems;
        // @TODO: this.bookList = ...
      });
  }
}
