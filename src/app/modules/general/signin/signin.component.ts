import { Component, OnInit, AfterViewInit, ElementRef, Output, EventEmitter } from "@angular/core";
import { UsersService } from "../../../users.service";

declare const gapi: any;


@Component({
  selector: "google-signin",
  template: '<button id="googleBtn">Google Sign-In</button>'
})
export class GoogleSigninComponent implements AfterViewInit {
  @Output() login = new EventEmitter<void>(); 

  private clientId: string =
    "1069647428965-9thvcne1a170p6nvp1ri22b6vn6gf9qk.apps.googleusercontent.com";

  private scope = [
    "profile",
    "email",
    "https://www.googleapis.com/auth/plus.me",
    "https://www.googleapis.com/auth/contacts.readonly",
    "https://www.googleapis.com/auth/admin.directory.user.readonly"
  ].join(" ");

  public auth2: any;
  public googleInit() {
    let that = this;
    gapi.load("auth2", function() {
      that.auth2 = gapi.auth2.init({
        client_id: that.clientId,
        cookiepolicy: "single_host_origin",
        scope: that.scope
      });
      that.attachSignin(that.element.nativeElement.firstChild);
    });
  }
  public attachSignin(element) {
    let that = this;
    this.auth2.attachClickHandler(
      element,
      {},
      googleUser => {
        let profile = googleUser.getBasicProfile();
        console.log("Token || " + googleUser.getAuthResponse().id_token);
        console.log("ID: " + profile.getId());
        console.log("Name: " + profile.getName());
        console.log("Image URL: " + profile.getImageUrl());
        console.log("Email: " + profile.getEmail());
        this.usersService.login({
          id_token: googleUser.getAuthResponse().id_token,
          id: profile.getId(),
          name: profile.getName(),
          imageUrl: profile.getImageUrl(),
          email: profile.getEmail()
        });
        this.login.emit();
      },
      function(error) {
        console.log(JSON.stringify(error, undefined, 2));
      }
    );
  }

  constructor(private element: ElementRef, private usersService: UsersService) {
    console.log("ElementRef: ", this.element);
  }

  ngAfterViewInit() {
    this.googleInit();
  }
}

@Component({
  selector: "app-signin",
  templateUrl: "./signin.component.html",
  styleUrls: ["./signin.component.css"]
})
export class SigninComponent implements OnInit {
  connected: boolean;
  // https://stackoverflow.com/questions/38846232/how-to-implement-signin-with-google-in-angular-2-using-typescript/39770500

  constructor(private usersService: UsersService) {}

  ngOnInit(): void {
    this.loadCurrentUser();
  }
  loadCurrentUser(): void {
    this.connected = this.usersService.getCurrentUser()?.id !== undefined;
  }
}
