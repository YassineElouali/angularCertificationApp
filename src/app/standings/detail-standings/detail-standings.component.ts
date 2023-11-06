import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { FixturesService } from './../../services/fixtures.service';
import { Fixtures } from 'src/app/models/fixtures';

@Component({
  selector: 'app-detail-standings',
  templateUrl: './detail-standings.component.html',
  styleUrls: ['./detail-standings.component.css']
})
export class DetailStandingsComponent implements OnInit, OnDestroy {

  subscriptionParams: Subscription;
  subscriptionDetail: Subscription;
  currrentLeagueId: string;
  listLastMatchs: Fixtures[] = [];
  constructor(private srvFixtures: FixturesService,
    private route: ActivatedRoute) {

  }

  ngOnInit(): void {
    this.subscriptionParams = this.route.params.subscribe((params: { id: string, league: string }) => {
      this.currrentLeagueId = params.league;
      this.listLastMatchs = [];
      if (localStorage.getItem('last' + params.id)) {
        JSON.parse(localStorage.getItem('last' + params.id)).map(item => {
          this.listLastMatchs.push(item);
        })
      } else {
        this.subscriptionDetail = this.srvFixtures.getFixtures(params.id, this.currrentLeagueId)
          .subscribe((response: Fixtures[]) => {
            response.map(item => {
              this.listLastMatchs.push(item);
            })
          });
      }

    });
  }



  ngOnDestroy(): void {
    this.subscriptionParams.unsubscribe();
    this.subscriptionDetail.unsubscribe();
  }
}
