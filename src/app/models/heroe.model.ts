export class Heroe {
  public name: string;
  public description: string;
  public thumbnail: string;

  constructor(data?: Heroe) {
    this.name = (data && data.name) || null;
    this.description = (data && data.description) || null;
    this.thumbnail = (data && data.thumbnail) || null;
  }
}
