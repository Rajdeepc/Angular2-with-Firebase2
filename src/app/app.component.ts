import { Component } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'app works!';
  //retrieving data

  //getting data with real time data ,
  items: FirebaseListObservable <any[]>;

  constructor(private af: AngularFire)//passing angular fire with DI
  {
      this.items = af.database.list('/items');
  }


}
