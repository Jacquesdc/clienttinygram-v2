import { Component, OnInit } from "@angular/core";
import { UsersService } from "../../../users.service";

@Component({
  selector: "app-contact",
  templateUrl: "./contact.component.html",
  styleUrls: ["./contact.component.css"]
})
export class ContactComponent implements OnInit {
  connected: boolean;
  ownFollowers = [
    {
      id: 1,
      name: "Name1",
      surname: "Surname1",
      followIds: [2, 3],
      followerIds: [2, 3, 4, 5]
    },
    {
      id: 2,
      name: "Name2",
      surname: "Surname2",
      followIds: [1, 4, 5],
      followerIds: [1]
    },
    {
      id: 3,
      name: "Name3",
      surname: "Surname3",
      followIds: [1],
      followerIds: [1]
    },
    {
      id: 4,
      name: "Name4",
      surname: "Surname4",
      followIds: [1, 5],
      followerIds: [2, 5]
    },
    {
      id: 5,
      name: "Name5",
      surname: "Surname5",
      followIds: [1, 4],
      followerIds: [2, 4]
    }
  ];

  constructor(private usersService: UsersService) {}

  ngOnInit(): void {
    this.connected = this.usersService.getCurrentUser()?.id !== undefined;
  }
}
