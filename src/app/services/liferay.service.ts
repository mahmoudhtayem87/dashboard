import { Injectable } from '@angular/core';
import {from, map, Observable} from "rxjs";
import {HttpClient, HttpParams} from "@angular/common/http";

declare const Liferay: any;

@Injectable({
  providedIn: 'root'
})
export class LiferayService
{
  constructor(private http: HttpClient)
  {

  }
  public getFormById(formId:number)
  {
    var prom  =
      new Promise((resolve,reject)=>{
        this.http.get(`/o/headless-form/v1.0/forms/${formId}?p_auth=${this.AuthToken}`).subscribe(result=>{
          resolve(result);
        }, error=>{
          reject(error);
        })
      });
    return prom;
  }
  public getFormRecordsCountById(formId:number)
  {
    var prom  =
      new Promise((resolve,reject)=>{
        this.http.get(`/o/headless-form/v1.0/forms/${formId}/form-records?p_auth=${this.AuthToken}`).subscribe(result=>{
          resolve(result);
        }, error=>{
          reject(error);
        })
      });
    return prom;
  }
  public getFormRecordsById(formId:number,pageSize:number)
  {
    var prom  =
      new Promise((resolve,reject)=>{
        this.http.get(`/o/headless-form/v1.0/forms/${formId}/form-records?pageSize=${pageSize}&p_auth=${this.AuthToken}`).subscribe(result=>{
          resolve(result);
        }, error=>{
          reject(error);
        })
      });
    return prom;
  }
  public get AuthToken()
  {
    return Liferay.authToken;
  }
}
