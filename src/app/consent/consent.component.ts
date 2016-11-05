import { Component, OnInit } from '@angular/core';
import { AngularFire } from 'angularfire2';
import { IActor } from '../shared/actor.model';

@Component({
  selector: 'ns-consent',
  templateUrl: './consent.component.html',
  styleUrls: ['./consent.component.css']
})
export class ConsentComponent implements OnInit {
  actor: IActor = {fullName: '', email: ''};
  episodes: string[] = ['Devils on Horseback', "Bartelby"]
  constructor(private af: AngularFire) { }

  ngOnInit() {
  }

  // Methods

  add(actor) {
    this.af.database.list('/actors').push(actor);
    this.actor = {fullName: '', email: ''};
  }

}
