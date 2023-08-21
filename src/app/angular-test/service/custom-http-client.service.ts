import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient, HttpHeaders, HttpParams  } from '@angular/common/http';

@Injectable({
    providedIn: 'root',
  })

export class CustomHttpClient
{
   api="https://api.spotify.com/v1/";
    constructor(private _httpClient: HttpClient)
    {

    }

    public get(url: string, form?: any): Observable<any> {
        const authorizationToken: string | null = sessionStorage.getItem('Authorization');
        
        let headers = new HttpHeaders();
        if (authorizationToken) {
          headers = headers.set('Authorization', authorizationToken);
        }
        let params = new HttpParams();
        for (const key in form) {
          if (form.hasOwnProperty(key)) {
            params = params.append(key, form[key]);
          }
        }
        console.log(this._httpClient.get(this.api+url, { headers: headers, params: params }));
        return this._httpClient.get(this.api+url, { headers: headers, params: params });
      }


      public getDirectUrl(url: string): Observable<any> {
        const authorizationToken: string | null = sessionStorage.getItem('Authorization');
        
        let headers = new HttpHeaders();
        if (authorizationToken) {
          headers = headers.set('Authorization', authorizationToken);
        }

        return this._httpClient.get(url, { headers: headers});
      }




    public post(url:any,body:any): Observable<any>
    {
        const authorizationToken: string | null = sessionStorage.getItem('Authorization');
        let headers = new HttpHeaders();
        if(authorizationToken)
        headers = headers.set('Authorization',authorizationToken);
        return this._httpClient.post(this.api+url,body,{headers : headers});
    }



    public put(url:any,body:any): Observable<any>
    {
        const authorizationToken: string | null = sessionStorage.getItem('Authorization');
        let headers = new HttpHeaders();
        if(authorizationToken)
        headers = headers.set('Authorization',authorizationToken);
        return this._httpClient.put(this.api+url,body,{headers : headers});
    }

    public delete(url:any): Observable<any>
    {
        const authorizationToken: string | null = sessionStorage.getItem('Authorization');
        let headers = new HttpHeaders();
        if(authorizationToken)
        headers = headers.set('Authorization',authorizationToken);
        return this._httpClient.delete(this.api+url,{headers : headers});
    }


}

