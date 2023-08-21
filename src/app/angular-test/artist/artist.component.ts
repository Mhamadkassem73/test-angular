import { Component, OnInit } from '@angular/core';
import { ArtistService } from '../service/artist.service';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css']
})
export class ArtistComponent implements OnInit {
  market: any = '';
  total: number = 0;
  artists: any;
  q: any = '';
  search: any = '';

  nextUrl: string = '';
  previousUrl: string = '';
  constructor(
    private _artistService: ArtistService,
    private _route: ActivatedRoute,
    private _router: Router,
  ) { }


  ngOnInit() {
    this._route.params.subscribe(params => {
      // this.search = params['search'];
      this.q = params['q'];
      this.market = params['market'];
      // console.log(this.search);
      console.log(this.q);
      console.log(this.market);

      this.fetchFirstArtists();
    });
  }
  fetchFirstArtists() {
    var search: any = {};
    if (this.q != null && this.q != '') {
      search.q = this.q;
    }

    search.type = 'artist';

    if (this.market != null && this.market != '') {
      search.market = this.market;
    }
    search.limit = '8';
    search.offset = '0';
    search.includeExternal = 'audio';
    this._artistService.searchArtists(search).subscribe(response => {

      if (response) {
        console.log(response);
        //this.images=response.artists.items[0].images;
        console.log(response.artists.previous);
        console.log(response.artists.next);
        this.previousUrl = response.artists.previous;
        this.nextUrl = response.artists.next;
        this.total = response.artists.total;
        this.artists = response.artists.items
      }

    }, error => {
      console.log(error);
      this._router.navigate(['/artist-search']);
    });
  }

  getArtsits(url: string) {


    if (url) {
      this._artistService.searchArtistsuRL(url).subscribe(response => {
        if (response) {
          this.previousUrl = response.artists.previous;
          this.nextUrl = response.artists.next;
          this.total = response.artists.total;
          this.artists = response.artists.items
        }
      }, error => {
        this._router.navigate(['/artist-search']);
      });
    }
  }

  getAlbums(cleintId: string) {
    this._artistService.getAlbums(cleintId).subscribe(response => {
      if (response) {
        console.log(response);
      }
    }, error => {
      this._router.navigate(['/artist-search']);
    });
    console.log(cleintId);

  }




}
