import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './angular-test/login-page/login-page.component';
import { ArtistComponent } from './angular-test/artist/artist.component';
import { RouterModule, Routes } from '@angular/router';
import { ArtistSearchComponent } from './angular-test/artist-search/artist-search.component';
import { DropDownComponent } from './angular-test/component/drop-down/drop-down.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DropDownModule } from './angular-test/component/drop-down/dropdown-field.module';
import { InputFieldModule } from './angular-test/component/input-field/input-field.module';
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { HttpClientModule } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';
import { FiveStarModule } from './angular-test/component/five-star/five-star.module';
import { MenuComponent } from './angular-test/menu/menu.component';
const routes: Routes = [
  { path: '', component: LoginPageComponent },
  // { path: 'artists/:search', component: ArtistComponent },
  { path: 'artists/:q/:market', component: ArtistComponent },
  { path: 'artist-search', component: ArtistSearchComponent },
];
@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    ArtistComponent,
    ArtistSearchComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    DropDownModule,
    ReactiveFormsModule,
    InputFieldModule,
    MatButtonModule,
    MatIconModule,
    HttpClientModule,
    FiveStarModule,
    MatCardModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
