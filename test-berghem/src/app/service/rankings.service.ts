import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class RankingsService {

	constructor(private httpClient: HttpClient) { }

	findRankings(): Observable<any> {
		return this.httpClient.get<any>(`http://localhost:3000/locations/32000009/rankings/clans`)
	}

}
