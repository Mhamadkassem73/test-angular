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

    public login(form:{username:string,password:string})
    {
        // console.log(form); 
        // console.log(api.doLogin); 
        // return this._customHttpClient.postWithoutHeaders(api.doLogin,form);
    }

    public setToken(token: string)
    {
        sessionStorage.setItem('Authorization',"bearer "+token);
    }

    public removeToken(token: string)
    {
        sessionStorage.removeItem('Authorization');
    }

    public logout()
    {
        sessionStorage.clear();
        this._router.navigateByUrl('/sign-in');
    }

    public getToken()
    {
        return sessionStorage.getItem('Authorization');
    }
}