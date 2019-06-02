// to show up the details for current movie

import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {MoviedbService} from '../../../models/moviedb.service';
import {Movies} from '../../../models/Movies';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  id: string;
  movie: Movies;


  constructor( private route: ActivatedRoute, private moviedb: MoviedbService) {
    this.id = this.route.snapshot.paramMap.get('id');
  }

  ngOnInit() {

    this.showUp();

  }
  // to show uo the details
  showUp(): void {
    this.moviedb.fetchMovieById(this.id).subscribe((results) => {
      this.movie = new Movies (results );
      });

  }

}
