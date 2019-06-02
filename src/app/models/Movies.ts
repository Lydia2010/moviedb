export class Movies {
  id: number;
  title: string;
  originalTitle: string;
  overview: string;
  popularity: string;
  posterPath: string;

  constructor(arg?) {

    const pathImg = 'https://image.tmdb.org/t/p/w500';

    if (arg) {
      this.id = arg.id;
      this.title = arg.title;
      this.originalTitle = arg.original_title;
      this.overview = arg.overview;
      this.popularity = arg.popularity;
      this.posterPath = (arg.poster_path) ? (pathImg + arg.poster_path) : null;

    }
  }




}
