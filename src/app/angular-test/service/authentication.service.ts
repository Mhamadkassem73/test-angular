import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { CustomHttpClient } from "./custom-http-client.service";

@Injectable({
    'providedIn' : 'root'
})

export class AuthenticationService
{
    constructor(private _customHttpClient: CustomHttpClient,private _router: Router)
    {

    }



    public setToken(token: string)
    {
        sessionStorage.setItem('Authorization',"bearer "+token);
    }

    public removeToken()
    {
        sessionStorage.removeItem('Authorization');
    }
    public getToken()
    {
        return sessionStorage.getItem('Authorization');
    }
}