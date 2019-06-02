// to search result for  current request form user
import { Component, OnInit } from '@angular/core';
import {MoviedbService} from '../../../models/moviedb.service';
import {Movies} from '../../../models/Movies';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  // query = 'Synecdoche+New+York';
  query: string;
  resultSearch: Movies [];
  id: number;
  title: string;

  constructor(private moviedb: MoviedbService) {
  }

  ngOnInit() {
    // this.moviedb.movieSearch(this.query).subscribe( results => {
    //   console.log(results);
    //   this.resultSearch = results;
  }
   // to search by query
  onSearch() {
    this.moviedb.movieSearch(this.query).subscribe(results => {
      console.log(results);
      if (results [0]) {
        this.resultSearch = [];
        results.forEach((item) => {
          item = new Movies(item);
          this.resultSearch.push(item);

        });

      }
    });
  }
}  
