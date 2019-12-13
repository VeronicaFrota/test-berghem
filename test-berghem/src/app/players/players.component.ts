import { Component, OnInit } from '@angular/core';
import { PlayersService } from '../service/players.service';
import { Player } from '../model/player.model';
import { MatTableDataSource } from '@angular/material/table';

@Component({
	selector: 'app-players',
	templateUrl: './players.component.html',
	styleUrls: ['./players.component.css']
})
export class PlayersComponent implements OnInit {

	// Para a exibição da tabela
	displayedColumnsHeroes = ['name', 'level', 'maxLevel', 'village'];
	dataSourceHeroes = new MatTableDataSource<any>();

	displayedColumnsTroops = ['name', 'level', 'maxLevel', 'village'];
	dataSourceTroops = new MatTableDataSource<any>();

	player: Player

	constructor(private service: PlayersService) { }

	ngOnInit() {
		this.service.findPlayers().subscribe( 
			(retorno) => {
			this.player = retorno
			this.dataSourceHeroes.data = this.player.heroes
			this.dataSourceTroops.data = this.player.troops
		})
	}

}
