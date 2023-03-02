import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { dadJoke } from "src/models/DadJokes";
import { environment } from '../environment/environment.development'
@Injectable()
export class DadJokeService {
    private heroes: dadJoke[] = [];
    constructor(
        private http: HttpClient) { }
  
    getDadJoke() {
        return this.http.get<dadJoke>(environment.apiUrl + "/DadJoke");
    }
    getCount() {
        return this.http.get<number>(environment.apiUrl + "/JokeCount");
    }
  }