import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, OnDestroy } from '@angular/core';
import { Environment } from '../environment/environment';
import { Observable, map } from 'rxjs';
import { Fixtures } from '../models/fixtures';

@Injectable({
  providedIn: 'root'
})
export class FixturesService {

  private apiUrl: string = "https://v3.football.api-sports.io/fixtures";
  private headers = new HttpHeaders({
    'x-rapidapi-key': Environment.apiKey
  });

  constructor(private http: HttpClient) { }


  getFixtures(id: string, league: string): Observable<Fixtures[]> {
    return this.http.get<Fixtures[]>(this.apiUrl + '?league=' + league + '&team=' + id + '&status=ft&last=10', { headers: this.headers })
      .pipe(
        map(data => {
          localStorage.setItem('last' + id, JSON.stringify(data['response']));
          return data['response'];
        })
      );
  }

}
