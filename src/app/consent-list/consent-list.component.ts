import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { IActor } from '../shared/actor.model';

@Component({
  selector: 'ns-consent-list',
  templateUrl: './consent-list.component.html',
  styleUrls: ['./consent-list.component.css']
})
export class ConsentListComponent implements OnInit {
  actors: FirebaseListObservable<IActor[]>;

  constructor(private af: AngularFire) { }

  ngOnInit() {
    this.actors = this.af.database.list('/actors');
  }

}
