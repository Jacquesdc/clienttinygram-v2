import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";

import { Post, UserModel } from "../../../models";
import { PostService } from "../../../post.service";
import { UsersService } from "../../../users.service";

var _ = require("lodash");

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  //public posts$: Observable<Post[]>;
  public posts: Post[];

  public users: UserModel[];

  public friends = [
    { id: 1, name: "Nom1", surname: "Surname1" },
    { id: 2, name: "Nom1", surname: "Surname1" }
  ];

  private usersService: UsersService;

  //on définit notre constructeur du service :
  constructor(private postService: PostService) {}

  ngOnInit(): void {
    this.postService.getAll().subscribe(response => {
      const inversedPosts = _.map(response["list_users"], postResponse => {
        return {
          id: postResponse.key.id,
          description: postResponse.propertyMap.description,
          id_user: postResponse.propertyMap.id_user,
          url_image: postResponse.propertyMap.url_image
        };
      });
      this.posts = inversedPosts.reverse();
    });

    this.usersService.getAll().subscribe(
      response =>
        (this.users = _.map(response["list_users"], usersResponse => {
          return {
            description: usersResponse.propertyMap.description,
            id_user: usersResponse.propertyMap.id_user,
            url_image: usersResponse.propertyMap.url_image
          };
        }))
    );
  }
}
