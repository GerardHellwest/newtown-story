import { Component, OnInit } from '@angular/core';
import { AngularFire } from 'angularfire2';
import { IActor } from '../shared/actor.model';

@Component({
  selector: 'ns-consent',
  templateUrl: './consent.component.html',
  styleUrls: ['./consent.component.css']
})
export class ConsentComponent implements OnInit {
  actor: IActor = { fullName: '', email: '', episode: '', createdDate: '', imageUrl: '' };
  episodes: string[] = ['Devils on Horseback', 'Bartelby'];
  imageUploading: boolean;
  file: File;

  constructor(private af: AngularFire) {
    this.actor.episode = this.episodes[0];
  };

  ngOnInit() {
  }

  // Methods


  saveImage(event) {
    this.file = event.srcElement.files[0];
    // if (this.file) {
    //   this.imageUploading = true;
    //   let storage = firebase.storage();
    //   let storageRef = storage.ref();
    //   let actorImagesRef = storageRef.child(`/actors/${this.actor.$key}`);
    //   let uploadTask;
    //   // if (this.actor.$key == null) {
    //   firebase.database().ref().child('actors').push({}).then(
    //     (value) => {
    //       this.imageUploading = false;
    //       this.actor.$key = value.key;
    //       uploadTask = actorImagesRef.put(this.file).then(
    //         image => this.actor.imageUrl = image.downloadURL);
    //     });
    //   // } else {
    //   //   uploadTask = actorImagesRef.put(this.file).then(
    //   //     image => {
    //   //       this.actor.imageUrl = image.downloadURL;
    //   //       this.imageUploading = false;
    //   //     });
    //   // }
    // }
  }


  add(actor) {
    this.actor.createdDate = new Date().getTime().toString();
    this.af.database.list('/actors').push(actor).then(
      (value) => {
        let storage = firebase.storage();
        let storageRef = storage.ref();
        let actorImagesRef = storageRef.child(`/actors/${value.key}`);
         return actorImagesRef.put(this.file).then(
          image => {
            this.actor.imageUrl = image.downloadURL;
            return this.af.database.object(`/actors/${value.key}`).update(this.actor);
          }
        );
      }).then(
      () => { this.actor = { fullName: '', email: '', episode: '', createdDate: '', imageUrl: '' } }
      );
  }

}
