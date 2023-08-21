import { Component } from '@angular/core';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {
  // Your Spotify client ID from the Spotify Developer Dashboard
  private clientId = 'c8053149b9c24b93b2d9132d97cbb533';
  private redirectUri = 'http://localhost:4200/artist-search'; // The URI where Spotify will redirect after authentication

  constructor() { }


  loginWithSpotify() {
    // Spotify authentication URL
    const authUrl = `https://accounts.spotify.com/authorize?client_id=${this.clientId}&response_type=token&redirect_uri=${this.redirectUri}&scope=user-read-private`;

    // Redirect the user to the Spotify authentication page
    window.location.href = authUrl;
  }

}
