import { Injectable } from "@angular/core";
import { ValidatorFn, AbstractControl } from "@angular/forms";
import { Router } from "@angular/router";
import { map, Observable, pluck } from "rxjs";
import { CustomHttpClient } from "./custom-http-client.service";

@Injectable({
    'providedIn': 'root'
})

export class ArtistService {
    constructor(private _customHttpClient: CustomHttpClient, private _router: Router) {

    }

    public searchArtists(form: any): Observable<any> {
        return this._customHttpClient.get("search", form);
    }
    public searchArtistsuRL(url: String): Observable<any> {
        return this._customHttpClient.getDirectUrl(url.toString());
    }
    public getAlbums(artistId: String): Observable<any> {
        return this._customHttpClient.getDirectUrl(this._customHttpClient.api + "artists/" + artistId + "/albums");
    }
}