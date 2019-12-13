import { Routes } from '@angular/router';
import { PlayersComponent } from './players/players.component';
import { ClansComponent } from './clans/clans.component';
import { RankingsComponent } from './rankings/rankings.component';

export const ROUTES: Routes = [
    { path: 'players', component: PlayersComponent },
    { path: 'clans'  , component: ClansComponent },
    { path: 'clans/:tag'  , component: ClansComponent },
    { path: 'rankings', component: RankingsComponent },
]
