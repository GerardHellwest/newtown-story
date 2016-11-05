import { Component } from '@angular/core';
import { AngularFire } from 'angularfire2';

@Component({
  selector: 'ns-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ns works!';
  constructor(private af: AngularFire) {
    this.af.database.object('/connected').subscribe(data => console.log(data));
  }
}
