import { Component, EventEmitter } from 'angular2/core';
import { AlbumComponent } from './album.component';
import { Album } from './album.model';
import {EditAlbumDetailsComponent} from './edit-album-details.component';
import { NewAlbumComponent } from './new-album.component';
import {DonePipe} from './done.pipe';

@Component({
  selector: 'album-list',
  inputs: ['albumList'],
  outputs: ['onAlbumSelect'],
  directives: [AlbumComponent, EditAlbumDetailsComponent, NewAlbumComponent],
  pipes: [DonePipe],
  template: `
  <select (change)="onChange($event.target.value)" class="filter">
    <option value="all">Show All</option>
    <option value="done" selected="selected">Show Cart</option>
  </select>
  <select>
    <option *ngFor="#album of albumList"(click)="albumClicked(currentAlbum)" [value]="album.name">{{album.name}}</option>
  </select>
  <album-display *ngFor="#currentAlbum of albumList | done:filterDone"
    (click)="albumClicked(currentAlbum)"
    [class.selected]="currentAlbum === selectedAlbum"
    [album]="currentAlbum">
  </album-display>
  <edit-album-details *ngIf="selectedAlbum" [album]="selectedAlbum">
  </edit-album-details>

  <new-album (onSubmitNewAlbum)="createAlbum($event)"></new-album>
  `
})

export class AlbumListComponent {
  public albumList: Album[];
  public onAlbumSelect: EventEmitter<Album>;
  public selectedAlbum: Album;
  public filterDone: string = "notDone";
  constructor() {
    this.onAlbumSelect = new EventEmitter();
  }
  albumClicked(clickedAlbum: Album): void {
    console.log('child', clickedAlbum);
    this.selectedAlbum = clickedAlbum;
    this.onAlbumSelect.emit(clickedAlbum);
  }
  createAlbum(name: string): void {
  this.albumList.push(
    new Album(name, this.albumList.length)
  );
  }
// new code block for including additional parameters, not complete. we need this to send information to each album component.
  // createcompleteAlbum(name: string, artist: string, price: number, genre: string): void {
  // this.currentAlbum.push(
  //   new Album(name, this.albumList.length)
  //   new Album(artist, this.albumList.length),
  //   new Album(price, this.albumList.length),
  //   new Album(genre, this.albumList.length)
  // );
  // }
  // end code block
  onChange(filterOption) {
    this.filterDone = filterOption;
    console.log(this.filterDone);
  }
}
