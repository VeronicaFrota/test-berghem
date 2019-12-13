import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class PlayersService {

	constructor(private httpClient: HttpClient) { }

	findPlayers(): Observable<any> {
		return this.httpClient.get<any>(`http://localhost:3000/players/%238J89R2QY`)
	}

}
