import {Component, EventEmitter} from 'angular2/core';
import {Album} from './album.model';

@Component({
  selector: 'new-album',
  outputs: ['onSubmitNewAlbum'],
  template: `
  <div class="album-form">
    <h3>Create Album:</h3>
    <input placeholder="Name" class="col-lg-8 input-lg" #newName>
    <button (click)="addAlbum(newName)" class="btn-success btn-lg add-button">Add</button>
  </div>
  `
})
export class NewAlbumComponent {
  public onSubmitNewAlbum: EventEmitter<String>;
  constructor(){
    this.onSubmitNewAlbum = new EventEmitter();
  }
  addAlbum(userName: HTMLInputElement){
    this.onSubmitNewAlbum.emit(userName.value);
    userName.value = "";
  }

}
