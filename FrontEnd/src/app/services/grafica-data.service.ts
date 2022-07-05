import { Injectable } from '@angular/core';
// import { Datos } from 'src/app/models/datos';
import { HttpClient, HttpRequest, HttpEvent, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GraficaDataService {
  myapiURL!:string;
  myapiMesUrl!:string;
  myapiDataUrl!:string;

  constructor(private httpClient: HttpClient) { 
    this.myapiURL = 'https://localhost:44383/api/Grafica';
    this.myapiMesUrl = this.myapiURL + '/getMeses';
    this.myapiDataUrl = this.myapiURL + '/getData';
  }

  public getMeses(): Observable<string[]> {

    return this.httpClient.get<string[]>(this.myapiMesUrl);
 
  }

  // public getVentas():Observable<Datos[]>
  // {
  //   return this.httpClient.get<Datos[]>(this.myapiDataUrl);;
  // }
}
