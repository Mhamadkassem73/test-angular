import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Album } from '../../models/album.model';
import { ArtistService } from '../../service/artist.service';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {
  displayedAlbums: any[] = [];
  pageSize = 5;
  artistId: string = '';
  previousUrl: string = '';
  nextUrl: string = '';
  constructor(


    @Inject(MAT_DIALOG_DATA) private _data: any,
    private _artistService: ArtistService,
    private dialogRef: MatDialogRef<AlbumsComponent>
  ) {
    this.artistId = _data.artistId;
  }
  ngOnInit(): void {
    this.getAlbums();
  }


  getAlbums() {
    this._artistService.getAlbums(this.artistId).subscribe(response => {
      if (response) {
        console.log(response);
        this.previousUrl = response.previous;
        this.nextUrl = response.next;
        this.displayedAlbums = response.items;

          console.log(this.displayedAlbums);
      }
    }, error => {
      this.closePopup();
    });
  }


  private updateDisplayedAlbums(url: string) {
    if (url) {
      this._artistService.searchArtistsuRL(url).subscribe(response => {
        if (response) {
          console.log(response);
          this.previousUrl = response.previous;
          this.nextUrl = response.next;
           this.displayedAlbums = response.items;
        }

      }, error => {
        this.closePopup();
      });
    }
  }

  goToNextPage() {
    if (this.nextUrl)
      this.updateDisplayedAlbums(this.nextUrl);
  }

  goToPreviousPage() {
    if (this.previousUrl)
      this.updateDisplayedAlbums(this.previousUrl);
  }

  closePopup() {
    this.dialogRef.close();
  }
}