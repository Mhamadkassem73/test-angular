import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './angular-test/login-page/login-page.component';
import { ArtistComponent } from './angular-test/artist/artist.component';
import { RouterModule, Routes } from '@angular/router';
import { ArtistSearchComponent } from './angular-test/artist-search/artist-search.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DropDownModule } from './angular-test/component/drop-down/dropdown-field.module';
import { InputFieldModule } from './angular-test/component/input-field/input-field.module';
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { MatCardModule } from '@angular/material/card';
import { FiveStarModule } from './angular-test/component/five-star/five-star.module';
import { MenuComponent } from './angular-test/menu/menu.component';
import { AddArtistComponent } from './angular-test/add-artist/add-artist.component';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { AlbumsComponent } from './angular-test/artist/albums/albums.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTableModule } from '@angular/material/table';
import { AuthGuard } from './angular-test/auth.guard';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './angular-test/auth.interceptor';
import { NgxsModule } from '@ngxs/store';

const routes: Routes = [
  { path: '',  component: LoginPageComponent },
  // { path: 'artists/:search', component: ArtistComponent },
  { path: 'artists/:q/:market', component: ArtistComponent },
  { path: 'artist-search', component: ArtistSearchComponent },
  { path: 'add-artist',canActivate: [AuthGuard], component: AddArtistComponent },
];
@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    ArtistComponent,
    ArtistSearchComponent,
    MenuComponent,
    AddArtistComponent,
    AlbumsComponent
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
    MatCardModule, 
    MatCheckboxModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    MatButtonToggleModule,
    MatDatepickerModule,
    MatDialogModule,
    MatTableModule,
    
    
    
    
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
