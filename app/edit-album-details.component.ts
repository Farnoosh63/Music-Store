import {Component} from 'angular2/core';
import {Album} from './album.model';

@Component({
  selector: 'edit-album-details',
  inputs: ['album'],
  template: `
  <div class="album-form">
    <h3>Edit Name: </h3>
    <input [(ngModel)]="album.name" class="col-lg-8 input-lg album-form">
  </div>
  `
})
export class EditAlbumDetailsComponent {
  public album: Album;
}
