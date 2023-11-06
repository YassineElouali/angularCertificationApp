import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { country } from './constants/country';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angularCertificationApp';

  constructor(private router: Router) {

  }


  ngOnInit() {
    localStorage.clear();
    this.router.navigateByUrl('/standings/' + country['england']);
  }
}
