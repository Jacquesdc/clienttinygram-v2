import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { Post, UserModel } from "./models";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class PostService {
  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.get("https://model-zoo-290312.ew.r.appspot.com/timeline");
  }
}
