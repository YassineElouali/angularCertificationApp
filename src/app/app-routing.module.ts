import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailStandingsComponent } from './standings/detail-standings/detail-standings.component';
import { StandingsComponent } from './standings/standings/standings.component';

const routes: Routes = [
  { path: "", redirectTo: "/standings", pathMatch: 'full' },
  { path: "standings/:league", component: StandingsComponent },
  { path: "detail/:id/:league", component: DetailStandingsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
