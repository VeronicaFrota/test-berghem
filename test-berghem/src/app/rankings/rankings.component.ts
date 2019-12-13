import { Component, OnInit, ViewChild } from '@angular/core';
import { Ranking } from '../model/rankings.model';
import { RankingsService } from '../service/rankings.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

@Component({
	selector: 'app-rankings',
	templateUrl: './rankings.component.html',
	styleUrls: ['./rankings.component.css']
})
export class RankingsComponent implements OnInit {

	/* Para exibição das tabelas */
	displayedColumnsRanking = ['tag', 'name', 'location', 'clanLevel', 'members', 'clanPoints'];
	dataSourceRanking = new MatTableDataSource<any>();

	@ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;		// Paginador

	rankings: Ranking

	constructor(
		private service: RankingsService,
	) { }

	ngOnInit() {
		this.dataSourceRanking.paginator = this.paginator					// atribui os dados do pafinador para o datasource da table

		this.service.findRankings().subscribe(
			(retorno) => {
				this.rankings = retorno
				this.dataSourceRanking.data = this.rankings.items
			}
		)
	}

	applyFilter(filterValue: string) {
		this.dataSourceRanking.filter = filterValue.trim().toLowerCase();

		if (this.dataSourceRanking.paginator) {
			this.dataSourceRanking.paginator.firstPage();
		}
	}

}












// Paginador
/* pageNumber = 0
pageSize2 = 10
pageSizeOptions: number[] = [5, 10, 25, 100] */

// Paginador
/* pageEvent(evento : PageEvent){
	this.pageNumber = evento.pageIndex
	this.pageSize2 = evento.pageSize;

	console.log(evento)
} */