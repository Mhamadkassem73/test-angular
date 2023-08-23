import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl, FormArray } from '@angular/forms';


@Component({
  selector: 'app-add-artist',
  templateUrl: './add-artist.component.html',
  styleUrls: ['./add-artist.component.css']
})
export class AddArtistComponent implements OnInit {
  addArtistForm!: FormGroup;
  constructor(private _formBuilder: FormBuilder,
    ) { }
  ngOnInit(): void {
    this.addArtistForm = this._formBuilder.group({
      firstName: ['', [Validators.required, Validators.minLength(3)]],
      lastName: ['', [Validators.required, Validators.minLength(3)]],
      dateOfBirth: ['', [Validators.required, this.minAgeValidator(25)]],
      email: ['', [Validators.required, Validators.email]],
      phoneNumber: ['', [Validators.required, Validators.pattern(/^(03|70|71|76|78|79|80|81)\d{6}$/)]],
      profilePicture: ['', Validators.required],
      stageName: [''],
      artistBackstory: [''],
      startingDate: [''],
      albums: this._formBuilder.array([])
    });
  }



  minAgeValidator(minAge: number) {
    return (control: FormControl) => {
      const birthDate = new Date(control.value);
      const today = new Date();
      const age = today.getFullYear() - birthDate.getFullYear();
      if (age < minAge) {
        return { minAge: true };
      }
      return null;
    };
  }




  submitForm() {
    if (this.addArtistForm.invalid) {
      this.addArtistForm.markAllAsTouched();
      return; 
    }
    else{
      console.log(this.addArtistForm.value);
      // this._artistState.dispatch(new addArtist(this.addArtistForm.value));
      // console.log(this._artistState.getAlbums());
    }
  }



  get albums(): FormArray {
    return this.addArtistForm.get('albums') as FormArray;
  }

  songs(albumIndex: number): FormArray {
    return this.albums.at(albumIndex).get('songs') as FormArray;
  }

  addAlbum() {
    const albumArray = this.addArtistForm.get('albums') as FormArray;
    albumArray.push(this._formBuilder.group({
      name: [''],
      date: [''],
      songs: this._formBuilder.array([])
    }));
  }

  removeAlbum(index: number) {
    const albumArray = this.addArtistForm.get('albums') as FormArray;
    albumArray.removeAt(index);
  }

  addSong(albumIndex: number) {
    const albumArray = this.addArtistForm.get('albums') as FormArray;
    const albumControl = albumArray.at(albumIndex) as FormGroup;
    const songsArray = albumControl.get('songs') as FormArray;
    songsArray.push(this._formBuilder.group({
      name: [''],
      duration: ['']
    }));
  }

  removeSong(albumIndex: number, songIndex: number) {
    const albumArray = this.addArtistForm.get('albums') as FormArray;
    const albumControl = albumArray.at(albumIndex) as FormGroup;
    const songsArray = albumControl.get('songs') as FormArray;
    songsArray.removeAt(songIndex);
  }
}