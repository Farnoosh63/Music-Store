import {Pipe, PipeTransform} from 'angular2/core';
import {Album} from './album.model';

@Pipe({
  name: "album",
  pure: false
})
export class DonePipe implements PipeTransform {
  transform(input: Album[], args) {
    var desiredDoneState = args[0];
    if(desiredDoneState === "done") {
      return input.filter((album) => {
        return album.done;
      });
    } else {
      return input;
    }
  }
}
