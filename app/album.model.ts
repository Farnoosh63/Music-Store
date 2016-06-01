export class Album {
  public done: boolean = false;
  public artist: string = "";
  public price: number = 0;
  public genre: string = "";
  constructor(public name: string, public id: number) {
  }
}
