import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ClansService } from '../service/clans.service';
import { Clan } from '../model/clan.model';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material';

@Component({
	selector: 'app-clans',
	templateUrl: './clans.component.html',
	styleUrls: ['./clans.component.css']
})
export class ClansComponent implements OnInit {

	// Para a exibição das tabelas
	displayedColumnsMemberList = ['tag', 'name', 'expLevel', 'leagueName', 'trophies'];
	dataSourceMemberList = new MatTableDataSource<any>();

	clan: Clan

	constructor(
		private service: ClansService
	) { }

	ngOnInit() {

		this.service.findClans().subscribe(
			(retorno) => {
				this.clan = retorno
				this.dataSourceMemberList.data = this.clan.memberList
			})
	}

	applyFilter(filterValue: string) {
		this.dataSourceMemberList.filter = filterValue.trim().toLowerCase();

		if (this.dataSourceMemberList.paginator) {
			this.dataSourceMemberList.paginator.firstPage();
		}
	}

}
