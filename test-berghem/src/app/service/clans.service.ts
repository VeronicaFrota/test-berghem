import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Ranking } from '../model/rankings.model';

@Injectable({
	providedIn: 'root'
})

export class ClansService {

    constructor(private httpClient: HttpClient) {}

    findClans(): Observable<any> {
        return this.httpClient.get<any>(`http://localhost:3000/clans/%23VJYULPC2`)
    }

}