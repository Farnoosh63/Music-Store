System.register(['angular2/core', './album.component', './album.model', './edit-album-details.component', './new-album.component', './done.pipe'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, album_component_1, album_model_1, edit_album_details_component_1, new_album_component_1, done_pipe_1;
    var AlbumListComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (album_component_1_1) {
                album_component_1 = album_component_1_1;
            },
            function (album_model_1_1) {
                album_model_1 = album_model_1_1;
            },
            function (edit_album_details_component_1_1) {
                edit_album_details_component_1 = edit_album_details_component_1_1;
            },
            function (new_album_component_1_1) {
                new_album_component_1 = new_album_component_1_1;
            },
            function (done_pipe_1_1) {
                done_pipe_1 = done_pipe_1_1;
            }],
        execute: function() {
            AlbumListComponent = (function () {
                function AlbumListComponent() {
                    this.filterDone = "notDone";
                    this.onAlbumSelect = new core_1.EventEmitter();
                }
                AlbumListComponent.prototype.albumClicked = function (clickedAlbum) {
                    console.log('child', clickedAlbum);
                    this.selectedAlbum = clickedAlbum;
                    this.onAlbumSelect.emit(clickedAlbum);
                };
                AlbumListComponent.prototype.createAlbum = function (name) {
                    this.albumList.push(new album_model_1.Album(name, this.albumList.length));
                };
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
                AlbumListComponent.prototype.onChange = function (filterOption) {
                    this.filterDone = filterOption;
                    console.log(this.filterDone);
                };
                AlbumListComponent = __decorate([
                    core_1.Component({
                        selector: 'album-list',
                        inputs: ['albumList'],
                        outputs: ['onAlbumSelect'],
                        directives: [album_component_1.AlbumComponent, edit_album_details_component_1.EditAlbumDetailsComponent, new_album_component_1.NewAlbumComponent],
                        pipes: [done_pipe_1.DonePipe],
                        template: "\n  <select (change)=\"onChange($event.target.value)\" class=\"filter\">\n    <option value=\"all\">Show All</option>\n    <option value=\"done\" selected=\"selected\">Show Cart</option>\n  </select>\n  <select>\n    <option *ngFor=\"#album of albumList\"(click)=\"albumClicked(currentAlbum)\" [value]=\"album.name\">{{album.name}}</option>\n  </select>\n  <album-display *ngFor=\"#currentAlbum of albumList | done:filterDone\"\n    (click)=\"albumClicked(currentAlbum)\"\n    [class.selected]=\"currentAlbum === selectedAlbum\"\n    [album]=\"currentAlbum\">\n  </album-display>\n  <edit-album-details *ngIf=\"selectedAlbum\" [album]=\"selectedAlbum\">\n  </edit-album-details>\n\n  <new-album (onSubmitNewAlbum)=\"createAlbum($event)\"></new-album>\n  "
                    }), 
                    __metadata('design:paramtypes', [])
                ], AlbumListComponent);
                return AlbumListComponent;
            }());
            exports_1("AlbumListComponent", AlbumListComponent);
        }
    }
});
//# sourceMappingURL=album-list.component.js.map