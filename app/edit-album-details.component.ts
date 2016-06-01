import {Component} from 'angular2/core';
import {Album} from './album.model';

@Component({
  selector: 'edit-album-details',
  inputs: ['album'],
  template: `
  <div class="album-form">
    <h3>Edit Name: </h3>
    <p>{{album.name}}</p>
    <p>{{album.artist}}</p>
    <p>{{album.price}}</p>
    <p>{{album.genre}}</p>
    <input [(ngModel)]="album.name" class="col-lg-8 input-lg album-form">
    <input [(ngModel)]="album.artist" placeholder="Artist" class="col-lg-8 input-lg album-form">
    <input [(ngModel)]="album.price" placeholder="Price" Type="number" class="col-lg-8 input-lg album-form">
    <input [(ngModel)]="album.genre" placeholder="Genre" class="col-lg-8 input-lg album-form">
  </div>
  `
})
export class EditAlbumDetailsComponent {
  public album: Album;
}
