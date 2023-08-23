

import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { AuthenticationService } from './angular-test/service/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  isLoginPage!: boolean;
  title = 'angular-test-mohamad-kassem';
  constructor(private _router: Router,
    private _authenticationService:AuthenticationService) {}

  ngOnInit() {
    this._router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        console.log(event.url);
        this.isLoginPage = event.url === '/'; 
      }
    });
  }

  goTo(url:string)
  {
    if(url=="login")
    {
      this._authenticationService.removeToken();
      this._router.navigate(['']);
    }
    if(url=="addArtist")
    {
      this._router.navigate(['/add-artist']);
    }
    if(url=="searchArtist")
    {
      this._router.navigate(['/artist-search']);
    }

  }
}
