import { Injectable } from '@angular/core';
import { IAutenticate } from './../model/IAutenticate.model';
import { HttpClient } from '@angular/common/http';
 import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AutenticateService {
  private URL_TESTE: string = 'https://testes.card.limbersoftware.com.br/api/auth';
  constructor(private http: HttpClient) {}

  public getAllUsers(): Observable<IAutenticate[]> {
    return this.http.get<IAutenticate[]>(this.URL_TESTE);
  }
}
