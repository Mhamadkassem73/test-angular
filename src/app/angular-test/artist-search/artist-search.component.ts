import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ArtistService } from '../service/artist.service';
import { HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-artist-search',
  templateUrl: './artist-search.component.html',
  styleUrls: ['./artist-search.component.css']
})
export class ArtistSearchComponent implements OnInit {
  artistSearchForm!: FormGroup;
  includeExternal = [{ "name": "audio" }]
  constructor(
    private _router: Router,
    private _formBuilder: FormBuilder,
    private _artistService: ArtistService
  ) { }

  ngOnInit() {


    this.artistSearchForm = this._formBuilder.group({
      q: [''],
      market: ['',Validators.required],
    });


    // Check if the URL contains an access token after redirection
    const accessToken = this.getAccessTokenFromUrl();

    if (accessToken) {
      sessionStorage.setItem('Authorization', "Bearer " + accessToken);
    }
  }

  private getAccessTokenFromUrl(): string | null {
    const tokenRegex = /access_token=([^&]+)/;
    const match = window.location.hash.match(tokenRegex);

    return match ? match[1] : null;
  }


  search() {
    if (this.artistSearchForm.invalid) {
      this.artistSearchForm.markAllAsTouched();
      return;
    }

    const market = this.artistSearchForm.get('market')?.value;
    const q = this.artistSearchForm.get('q')?.value;
    this._router.navigate(['/artists',q ,market]);
  
  }
}
