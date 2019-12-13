import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { ROUTES } from './app.routes';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MainNavComponent } from './main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { PlayersComponent } from './players/players.component';
import { ClansComponent } from './clans/clans.component';
import { AuthInterceptorProvider } from './interception/auth-interceptor';
import { HttpClientModule } from '@angular/common/http';
import {MatTableModule} from '@angular/material/table';
import {MatFormFieldModule} from '@angular/material/form-field';
import { RankingsComponent } from './rankings/rankings.component';
import { MatPaginatorModule } from '@angular/material';
/* import { ErrorInterceptor } from './interception/error-intercptior'; */

@NgModule({
	declarations: [
		AppComponent,
		PlayersComponent,
		MainNavComponent,
		ClansComponent,
		RankingsComponent,
	],
	imports: [
		BrowserModule,
		RouterModule.forRoot(ROUTES),
		BrowserAnimationsModule,
		MatInputModule,
		MatButtonModule,
		LayoutModule,
		MatToolbarModule,
		MatSidenavModule,
		MatIconModule,
		MatListModule,
		MatMenuModule,
		MatTableModule,
		MatFormFieldModule,
		MatPaginatorModule,
		HttpClientModule
	],
	providers: [
		AuthInterceptorProvider,
		/* {
			provide: HTTP_INTERCEPTORS,
			useClass: ErrorInterceptor,
			multi: true
		} */
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
