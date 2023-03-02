import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { dadJoke } from 'src/models/DadJokes';
import { DadJokeService } from 'src/services/DadJokeService';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [
    DadJokeService
  ],
})
export class AppComponent {
  public forecasts!: dadJoke;
  public image:string='';
  public timeStamp:number=0;
  public linkPicture:string = "https://picsum.photos/200/100"
  public jokeCount:number =0;
  constructor(private serviceDadJoke:DadJokeService) {
    this.getNextJoke();
    this.getJokeCount();
  }
  getLinkPicture() {
    if(this.timeStamp) {
      return this.linkPicture + '?' + this.timeStamp;
   }
   return this.linkPicture;
  }
  getJokeCount(){
    this.serviceDadJoke.getCount().subscribe(result => {
     this.jokeCount = result;
    });

  }
  getNextJoke(){
    this.forecasts = new dadJoke();
    this.image='';
    this.serviceDadJoke.getDadJoke().subscribe(result => {
      this.linkPicture = "https://picsum.photos/200/100";
      this.timeStamp = (new Date()).getTime();
      debugger;
      Object.assign(this.forecasts, result, this.forecasts);
    });
    

  }
  title = 'DadJokeUI';
}
