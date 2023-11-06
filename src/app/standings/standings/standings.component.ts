import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Standings } from 'src/app/models/standings';
import { StandingsService } from 'src/app/services/standings.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-standings',
  templateUrl: './standings.component.html',
  styleUrls: ['./standings.component.css']
})
export class StandingsComponent implements OnInit, OnDestroy {


  standings: Standings[];
  subsscription: Subscription;
  currLeagueCode: number;


  constructor(private servstanding: StandingsService,
    private route: ActivatedRoute) {

  }

  ngOnInit(): void {
    this.subsscription = this.route.params.subscribe((params: { league: number }) => {
      this.currLeagueCode = +params.league;
      this.standings = this.servstanding.getStandingsLocally(+params.league);

    });

  }




  ngOnDestroy(): void {
    this.subsscription.unsubscribe();
  }


}
