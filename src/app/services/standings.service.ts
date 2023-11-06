import { Injectable, OnDestroy } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Environment } from './../environment/environment';
import { Observable, Subscription, map } from 'rxjs';
import { Standings } from '../models/standings';
import { country } from '../constants/country';

@Injectable({
  providedIn: 'root'
})
export class StandingsService implements OnDestroy {
  /*private responseSpain = {
    "get": "standings",
    "parameters": {
      "season": "2023",
      "league": "140"
    },
    "errors": [],
    "results": 1,
    "paging": {
      "current": 1,
      "total": 1
    },
    "response": [
      {
        "league": {
          "id": 140,
          "name": "La Liga",
          "country": "Spain",
          "logo": "https:\/\/media-4.api-sports.io\/football\/leagues\/140.png",
          "flag": "https:\/\/media-4.api-sports.io\/flags\/es.svg",
          "season": 2023,
          "standings": [
            [
              {
                "rank": 1,
                "team": {
                  "id": 541,
                  "name": "Real Madrid",
                  "logo": "https:\/\/media-4.api-sports.io\/football\/teams\/541.png"
                },
                "points": 28,
                "goalsDiff": 15,
                "group": "Primera División",
                "form": "WDWWW",
                "status": "same",
                "description": "Promotion - Champions League (Group Stage: )",
                "all": {
                  "played": 11,
                  "win": 9,
                  "draw": 1,
                  "lose": 1,
                  "goals": {
                    "for": 23,
                    "against": 8
                  }
                },
                "home": {
                  "played": 4,
                  "win": 4,
                  "draw": 0,
                  "lose": 0,
                  "goals": {
                    "for": 10,
                    "against": 2
                  }
                },
                "away": {
                  "played": 7,
                  "win": 5,
                  "draw": 1,
                  "lose": 1,
                  "goals": {
                    "for": 13,
                    "against": 6
                  }
                },
                "update": "2023-10-31T00:00:00+00:00"
              },
              {
                "rank": 2,
                "team": {
                  "id": 547,
                  "name": "Girona",
                  "logo": "https:\/\/media-4.api-sports.io\/football\/teams\/547.png"
                },
                "points": 28,
                "goalsDiff": 12,
                "group": "Primera División",
                "form": "WWWLW",
                "status": "same",
                "description": "Promotion - Champions League (Group Stage: )",
                "all": {
                  "played": 11,
                  "win": 9,
                  "draw": 1,
                  "lose": 1,
                  "goals": {
                    "for": 25,
                    "against": 13
                  }
                },
                "home": {
                  "played": 6,
                  "win": 5,
                  "draw": 0,
                  "lose": 1,
                  "goals": {
                    "for": 15,
                    "against": 8
                  }
                },
                "away": {
                  "played": 5,
                  "win": 4,
                  "draw": 1,
                  "lose": 0,
                  "goals": {
                    "for": 10,
                    "against": 5
                  }
                },
                "update": "2023-10-31T00:00:00+00:00"
              },
              {
                "rank": 3,
                "team": {
                  "id": 530,
                  "name": "Atletico Madrid",
                  "logo": "https:\/\/media-4.api-sports.io\/football\/teams\/530.png"
                },
                "points": 25,
                "goalsDiff": 16,
                "group": "Primera División",
                "form": "WWWWW",
                "status": "same",
                "description": "Promotion - Champions League (Group Stage: )",
                "all": {
                  "played": 10,
                  "win": 8,
                  "draw": 1,
                  "lose": 1,
                  "goals": {
                    "for": 25,
                    "against": 9
                  }
                },
                "home": {
                  "played": 5,
                  "win": 5,
                  "draw": 0,
                  "lose": 0,
                  "goals": {
                    "for": 13,
                    "against": 6
                  }
                },
                "away": {
                  "played": 5,
                  "win": 3,
                  "draw": 1,
                  "lose": 1,
                  "goals": {
                    "for": 12,
                    "against": 3
                  }
                },
                "update": "2023-10-31T00:00:00+00:00"
              },
              {
                "rank": 4,
                "team": {
                  "id": 529,
                  "name": "Barcelona",
                  "logo": "https:\/\/media-4.api-sports.io\/football\/teams\/529.png"
                },
                "points": 24,
                "goalsDiff": 11,
                "group": "Primera División",
                "form": "LWDWD",
                "status": "same",
                "description": "Promotion - Champions League (Group Stage: )",
                "all": {
                  "played": 11,
                  "win": 7,
                  "draw": 3,
                  "lose": 1,
                  "goals": {
                    "for": 23,
                    "against": 12
                  }
                },
                "home": {
                  "played": 6,
                  "win": 5,
                  "draw": 0,
                  "lose": 1,
                  "goals": {
                    "for": 13,
                    "against": 4
                  }
                },
                "away": {
                  "played": 5,
                  "win": 2,
                  "draw": 3,
                  "lose": 0,
                  "goals": {
                    "for": 10,
                    "against": 8
                  }
                },
                "update": "2023-10-31T00:00:00+00:00"
              },
              {
                "rank": 5,
                "team": {
                  "id": 548,
                  "name": "Real Sociedad",
                  "logo": "https:\/\/media-4.api-sports.io\/football\/teams\/548.png"
                },
                "points": 19,
                "goalsDiff": 6,
                "group": "Primera División",
                "form": "DWLWW",
                "status": "same",
                "description": "Promotion - Europa League (Group Stage: )",
                "all": {
                  "played": 11,
                  "win": 5,
                  "draw": 4,
                  "lose": 2,
                  "goals": {
                    "for": 20,
                    "against": 14
                  }
                },
                "home": {
                  "played": 6,
                  "win": 4,
                  "draw": 2,
                  "lose": 0,
                  "goals": {
                    "for": 15,
                    "against": 8
                  }
                },
                "away": {
                  "played": 5,
                  "win": 1,
                  "draw": 2,
                  "lose": 2,
                  "goals": {
                    "for": 5,
                    "against": 6
                  }
                },
                "update": "2023-10-31T00:00:00+00:00"
              },
              {
                "rank": 6,
                "team": {
                  "id": 531,
                  "name": "Athletic Club",
                  "logo": "https:\/\/media-4.api-sports.io\/football\/teams\/531.png"
                },
                "points": 18,
                "goalsDiff": 6,
                "group": "Primera División",
                "form": "DLWLD",
                "status": "same",
                "description": "Promotion - Europa Conference League (Qualification: )",
                "all": {
                  "played": 11,
                  "win": 5,
                  "draw": 3,
                  "lose": 3,
                  "goals": {
                    "for": 18,
                    "against": 12
                  }
                },
                "home": {
                  "played": 6,
                  "win": 3,
                  "draw": 2,
                  "lose": 1,
                  "goals": {
                    "for": 14,
                    "against": 8
                  }
                },
                "away": {
                  "played": 5,
                  "win": 2,
                  "draw": 1,
                  "lose": 2,
                  "goals": {
                    "for": 4,
                    "against": 4
                  }
                },
                "update": "2023-10-31T00:00:00+00:00"
              },
              {
                "rank": 7,
                "team": {
                  "id": 728,
                  "name": "Rayo Vallecano",
                  "logo": "https:\/\/media-4.api-sports.io\/football\/teams\/728.png"
                },
                "points": 17,
                "goalsDiff": -1,
                "group": "Primera División",
                "form": "DWDDD",
                "status": "same",
                "description": null,
                "all": {
                  "played": 11,
                  "win": 4,
                  "draw": 5,
                  "lose": 2,
                  "goals": {
                    "for": 14,
                    "against": 15
                  }
                },
                "home": {
                  "played": 5,
                  "win": 1,
                  "draw": 3,
                  "lose": 1,
                  "goals": {
                    "for": 7,
                    "against": 12
                  }
                },
                "away": {
                  "played": 6,
                  "win": 3,
                  "draw": 2,
                  "lose": 1,
                  "goals": {
                    "for": 7,
                    "against": 3
                  }
                },
                "update": "2023-10-31T00:00:00+00:00"
              },
              {
                "rank": 8,
                "team": {
                  "id": 543,
                  "name": "Real Betis",
                  "logo": "https:\/\/media-4.api-sports.io\/football\/teams\/543.png"
                },
                "points": 17,
                "goalsDiff": -1,
                "group": "Primera División",
                "form": "WDDWD",
                "status": "same",
                "description": null,
                "all": {
                  "played": 11,
                  "win": 4,
                  "draw": 5,
                  "lose": 2,
                  "goals": {
                    "for": 14,
                    "against": 15
                  }
                },
                "home": {
                  "played": 5,
                  "win": 3,
                  "draw": 2,
                  "lose": 0,
                  "goals": {
                    "for": 7,
                    "against": 2
                  }
                },
                "away": {
                  "played": 6,
                  "win": 1,
                  "draw": 3,
                  "lose": 2,
                  "goals": {
                    "for": 7,
                    "against": 13
                  }
                },
                "update": "2023-10-31T00:00:00+00:00"
              },
              {
                "rank": 9,
                "team": {
                  "id": 532,
                  "name": "Valencia",
                  "logo": "https:\/\/media-4.api-sports.io\/football\/teams\/532.png"
                },
                "points": 15,
                "goalsDiff": 1,
                "group": "Primera División",
                "form": "DWDLL",
                "status": "same",
                "description": null,
                "all": {
                  "played": 11,
                  "win": 4,
                  "draw": 3,
                  "lose": 4,
                  "goals": {
                    "for": 14,
                    "against": 13
                  }
                },
                "home": {
                  "played": 5,
                  "win": 3,
                  "draw": 0,
                  "lose": 2,
                  "goals": {
                    "for": 7,
                    "against": 3
                  }
                },
                "away": {
                  "played": 6,
                  "win": 1,
                  "draw": 3,
                  "lose": 2,
                  "goals": {
                    "for": 7,
                    "against": 10
                  }
                },
                "update": "2023-10-31T00:00:00+00:00"
              },
              {
                "rank": 10,
                "team": {
                  "id": 534,
                  "name": "Las Palmas",
                  "logo": "https:\/\/media-4.api-sports.io\/football\/teams\/534.png"
                },
                "points": 14,
                "goalsDiff": -2,
                "group": "Primera División",
                "form": "WLWWL",
                "status": "same",
                "description": null,
                "all": {
                  "played": 11,
                  "win": 4,
                  "draw": 2,
                  "lose": 5,
                  "goals": {
                    "for": 8,
                    "against": 10
                  }
                },
                "home": {
                  "played": 5,
                  "win": 2,
                  "draw": 2,
                  "lose": 1,
                  "goals": {
                    "for": 4,
                    "against": 3
                  }
                },
                "away": {
                  "played": 6,
                  "win": 2,
                  "draw": 0,
                  "lose": 4,
                  "goals": {
                    "for": 4,
                    "against": 7
                  }
                },
                "update": "2023-10-31T00:00:00+00:00"
              },
              {
                "rank": 11,
                "team": {
                  "id": 727,
                  "name": "Osasuna",
                  "logo": "https:\/\/media-4.api-sports.io\/football\/teams\/727.png"
                },
                "points": 13,
                "goalsDiff": -4,
                "group": "Primera División",
                "form": "LWLWL",
                "status": "same",
                "description": null,
                "all": {
                  "played": 11,
                  "win": 4,
                  "draw": 1,
                  "lose": 6,
                  "goals": {
                    "for": 12,
                    "against": 16
                  }
                },
                "home": {
                  "played": 5,
                  "win": 1,
                  "draw": 1,
                  "lose": 3,
                  "goals": {
                    "for": 3,
                    "against": 6
                  }
                },
                "away": {
                  "played": 6,
                  "win": 3,
                  "draw": 0,
                  "lose": 3,
                  "goals": {
                    "for": 9,
                    "against": 10
                  }
                },
                "update": "2023-10-31T00:00:00+00:00"
              },
              {
                "rank": 12,
                "team": {
                  "id": 533,
                  "name": "Villarreal",
                  "logo": "https:\/\/media-4.api-sports.io\/football\/teams\/533.png"
                },
                "points": 12,
                "goalsDiff": -3,
                "group": "Primera División",
                "form": "WDLDL",
                "status": "same",
                "description": null,
                "all": {
                  "played": 11,
                  "win": 3,
                  "draw": 3,
                  "lose": 5,
                  "goals": {
                    "for": 15,
                    "against": 18
                  }
                },
                "home": {
                  "played": 6,
                  "win": 1,
                  "draw": 1,
                  "lose": 4,
                  "goals": {
                    "for": 9,
                    "against": 12
                  }
                },
                "away": {
                  "played": 5,
                  "win": 2,
                  "draw": 2,
                  "lose": 1,
                  "goals": {
                    "for": 6,
                    "against": 6
                  }
                },
                "update": "2023-10-31T00:00:00+00:00"
              },
              {
                "rank": 13,
                "team": {
                  "id": 546,
                  "name": "Getafe",
                  "logo": "https:\/\/media-4.api-sports.io\/football\/teams\/546.png"
                },
                "points": 12,
                "goalsDiff": -3,
                "group": "Primera División",
                "form": "DDDDD",
                "status": "same",
                "description": null,
                "all": {
                  "played": 11,
                  "win": 2,
                  "draw": 6,
                  "lose": 3,
                  "goals": {
                    "for": 13,
                    "against": 16
                  }
                },
                "home": {
                  "played": 5,
                  "win": 2,
                  "draw": 3,
                  "lose": 0,
                  "goals": {
                    "for": 5,
                    "against": 3
                  }
                },
                "away": {
                  "played": 6,
                  "win": 0,
                  "draw": 3,
                  "lose": 3,
                  "goals": {
                    "for": 8,
                    "against": 13
                  }
                },
                "update": "2023-10-31T00:00:00+00:00"
              },
              {
                "rank": 14,
                "team": {
                  "id": 536,
                  "name": "Sevilla",
                  "logo": "https:\/\/media-4.api-sports.io\/football\/teams\/536.png"
                },
                "points": 10,
                "goalsDiff": 1,
                "group": "Primera División",
                "form": "DDDLW",
                "status": "same",
                "description": null,
                "all": {
                  "played": 10,
                  "win": 2,
                  "draw": 4,
                  "lose": 4,
                  "goals": {
                    "for": 16,
                    "against": 15
                  }
                },
                "home": {
                  "played": 6,
                  "win": 2,
                  "draw": 2,
                  "lose": 2,
                  "goals": {
                    "for": 11,
                    "against": 8
                  }
                },
                "away": {
                  "played": 4,
                  "win": 0,
                  "draw": 2,
                  "lose": 2,
                  "goals": {
                    "for": 5,
                    "against": 7
                  }
                },
                "update": "2023-10-31T00:00:00+00:00"
              },
              {
                "rank": 15,
                "team": {
                  "id": 724,
                  "name": "Cadiz",
                  "logo": "https:\/\/media-4.api-sports.io\/football\/teams\/724.png"
                },
                "points": 10,
                "goalsDiff": -6,
                "group": "Primera División",
                "form": "DLLLD",
                "status": "same",
                "description": null,
                "all": {
                  "played": 11,
                  "win": 2,
                  "draw": 4,
                  "lose": 5,
                  "goals": {
                    "for": 10,
                    "against": 16
                  }
                },
                "home": {
                  "played": 6,
                  "win": 2,
                  "draw": 3,
                  "lose": 1,
                  "goals": {
                    "for": 7,
                    "against": 5
                  }
                },
                "away": {
                  "played": 5,
                  "win": 0,
                  "draw": 1,
                  "lose": 4,
                  "goals": {
                    "for": 3,
                    "against": 11
                  }
                },
                "update": "2023-10-31T00:00:00+00:00"
              },
              {
                "rank": 16,
                "team": {
                  "id": 798,
                  "name": "Mallorca",
                  "logo": "https:\/\/media-4.api-sports.io\/football\/teams\/798.png"
                },
                "points": 9,
                "goalsDiff": -4,
                "group": "Primera División",
                "form": "DLDDD",
                "status": "same",
                "description": null,
                "all": {
                  "played": 11,
                  "win": 1,
                  "draw": 6,
                  "lose": 4,
                  "goals": {
                    "for": 12,
                    "against": 16
                  }
                },
                "home": {
                  "played": 5,
                  "win": 0,
                  "draw": 4,
                  "lose": 1,
                  "goals": {
                    "for": 3,
                    "against": 4
                  }
                },
                "away": {
                  "played": 6,
                  "win": 1,
                  "draw": 2,
                  "lose": 3,
                  "goals": {
                    "for": 9,
                    "against": 12
                  }
                },
                "update": "2023-10-31T00:00:00+00:00"
              },
              {
                "rank": 17,
                "team": {
                  "id": 542,
                  "name": "Alaves",
                  "logo": "https:\/\/media-4.api-sports.io\/football\/teams\/542.png"
                },
                "points": 9,
                "goalsDiff": -7,
                "group": "Primera División",
                "form": "LDDLD",
                "status": "same",
                "description": null,
                "all": {
                  "played": 11,
                  "win": 2,
                  "draw": 3,
                  "lose": 6,
                  "goals": {
                    "for": 9,
                    "against": 16
                  }
                },
                "home": {
                  "played": 5,
                  "win": 2,
                  "draw": 1,
                  "lose": 2,
                  "goals": {
                    "for": 6,
                    "against": 8
                  }
                },
                "away": {
                  "played": 6,
                  "win": 0,
                  "draw": 2,
                  "lose": 4,
                  "goals": {
                    "for": 3,
                    "against": 8
                  }
                },
                "update": "2023-10-31T00:00:00+00:00"
              },
              {
                "rank": 18,
                "team": {
                  "id": 538,
                  "name": "Celta Vigo",
                  "logo": "https:\/\/media-4.api-sports.io\/football\/teams\/538.png"
                },
                "points": 6,
                "goalsDiff": -9,
                "group": "Primera División",
                "form": "LLDLD",
                "status": "same",
                "description": "Relegation - LaLiga2",
                "all": {
                  "played": 11,
                  "win": 1,
                  "draw": 3,
                  "lose": 7,
                  "goals": {
                    "for": 10,
                    "against": 19
                  }
                },
                "home": {
                  "played": 6,
                  "win": 0,
                  "draw": 2,
                  "lose": 4,
                  "goals": {
                    "for": 3,
                    "against": 10
                  }
                },
                "away": {
                  "played": 5,
                  "win": 1,
                  "draw": 1,
                  "lose": 3,
                  "goals": {
                    "for": 7,
                    "against": 9
                  }
                },
                "update": "2023-10-31T00:00:00+00:00"
              },
              {
                "rank": 19,
                "team": {
                  "id": 715,
                  "name": "Granada CF",
                  "logo": "https:\/\/media-4.api-sports.io\/football\/teams\/715.png"
                },
                "points": 6,
                "goalsDiff": -11,
                "group": "Primera División",
                "form": "LLDDD",
                "status": "same",
                "description": "Relegation - LaLiga2",
                "all": {
                  "played": 11,
                  "win": 1,
                  "draw": 3,
                  "lose": 7,
                  "goals": {
                    "for": 17,
                    "against": 28
                  }
                },
                "home": {
                  "played": 6,
                  "win": 1,
                  "draw": 2,
                  "lose": 3,
                  "goals": {
                    "for": 10,
                    "against": 14
                  }
                },
                "away": {
                  "played": 5,
                  "win": 0,
                  "draw": 1,
                  "lose": 4,
                  "goals": {
                    "for": 7,
                    "against": 14
                  }
                },
                "update": "2023-10-31T00:00:00+00:00"
              },
              {
                "rank": 20,
                "team": {
                  "id": 723,
                  "name": "Almeria",
                  "logo": "https:\/\/media-4.api-sports.io\/football\/teams\/723.png"
                },
                "points": 3,
                "goalsDiff": -17,
                "group": "Primera División",
                "form": "LLLDL",
                "status": "same",
                "description": "Relegation - LaLiga2",
                "all": {
                  "played": 11,
                  "win": 0,
                  "draw": 3,
                  "lose": 8,
                  "goals": {
                    "for": 14,
                    "against": 31
                  }
                },
                "home": {
                  "played": 6,
                  "win": 0,
                  "draw": 2,
                  "lose": 4,
                  "goals": {
                    "for": 9,
                    "against": 15
                  }
                },
                "away": {
                  "played": 5,
                  "win": 0,
                  "draw": 1,
                  "lose": 4,
                  "goals": {
                    "for": 5,
                    "against": 16
                  }
                },
                "update": "2023-10-31T00:00:00+00:00"
              }
            ]
          ]
        }
      }
    ]
  };
  private responseEngland = {
    "get": "standings",
    "parameters": {
      "season": "2023",
      "league": "39"
    },
    "errors": [],
    "results": 1,
    "paging": {
      "current": 1,
      "total": 1
    },
    "response": [
      {
        "league": {
          "id": 39,
          "name": "Premier League",
          "country": "England",
          "logo": "https:\/\/media-4.api-sports.io\/football\/leagues\/39.png",
          "flag": "https:\/\/media-4.api-sports.io\/flags\/gb.svg",
          "season": 2023,
          "standings": [
            [
              {
                "rank": 1,
                "team": {
                  "id": 47,
                  "name": "Tottenham",
                  "logo": "https:\/\/media-4.api-sports.io\/football\/teams\/47.png"
                },
                "points": 26,
                "goalsDiff": 13,
                "group": "Premier League",
                "form": "WWWWD",
                "status": "same",
                "description": "Promotion - Champions League (Group Stage: )",
                "all": {
                  "played": 10,
                  "win": 8,
                  "draw": 2,
                  "lose": 0,
                  "goals": {
                    "for": 22,
                    "against": 9
                  }
                },
                "home": {
                  "played": 4,
                  "win": 4,
                  "draw": 0,
                  "lose": 0,
                  "goals": {
                    "for": 8,
                    "against": 2
                  }
                },
                "away": {
                  "played": 6,
                  "win": 4,
                  "draw": 2,
                  "lose": 0,
                  "goals": {
                    "for": 14,
                    "against": 7
                  }
                },
                "update": "2023-11-01T00:00:00+00:00"
              },
              {
                "rank": 2,
                "team": {
                  "id": 42,
                  "name": "Arsenal",
                  "logo": "https:\/\/media-4.api-sports.io\/football\/teams\/42.png"
                },
                "points": 24,
                "goalsDiff": 15,
                "group": "Premier League",
                "form": "WDWWD",
                "status": "same",
                "description": "Promotion - Champions League (Group Stage: )",
                "all": {
                  "played": 10,
                  "win": 7,
                  "draw": 3,
                  "lose": 0,
                  "goals": {
                    "for": 23,
                    "against": 8
                  }
                },
                "home": {
                  "played": 6,
                  "win": 4,
                  "draw": 2,
                  "lose": 0,
                  "goals": {
                    "for": 15,
                    "against": 6
                  }
                },
                "away": {
                  "played": 4,
                  "win": 3,
                  "draw": 1,
                  "lose": 0,
                  "goals": {
                    "for": 8,
                    "against": 2
                  }
                },
                "update": "2023-11-01T00:00:00+00:00"
              },
              {
                "rank": 3,
                "team": {
                  "id": 50,
                  "name": "Manchester City",
                  "logo": "https:\/\/media-4.api-sports.io\/football\/teams\/50.png"
                },
                "points": 24,
                "goalsDiff": 15,
                "group": "Premier League",
                "form": "WWLLW",
                "status": "same",
                "description": "Promotion - Champions League (Group Stage: )",
                "all": {
                  "played": 10,
                  "win": 8,
                  "draw": 0,
                  "lose": 2,
                  "goals": {
                    "for": 22,
                    "against": 7
                  }
                },
                "home": {
                  "played": 4,
                  "win": 4,
                  "draw": 0,
                  "lose": 0,
                  "goals": {
                    "for": 10,
                    "against": 2
                  }
                },
                "away": {
                  "played": 6,
                  "win": 4,
                  "draw": 0,
                  "lose": 2,
                  "goals": {
                    "for": 12,
                    "against": 5
                  }
                },
                "update": "2023-11-01T00:00:00+00:00"
              },
              {
                "rank": 4,
                "team": {
                  "id": 40,
                  "name": "Liverpool",
                  "logo": "https:\/\/media-4.api-sports.io\/football\/teams\/40.png"
                },
                "points": 23,
                "goalsDiff": 14,
                "group": "Premier League",
                "form": "WWDLW",
                "status": "same",
                "description": "Promotion - Champions League (Group Stage: )",
                "all": {
                  "played": 10,
                  "win": 7,
                  "draw": 2,
                  "lose": 1,
                  "goals": {
                    "for": 23,
                    "against": 9
                  }
                },
                "home": {
                  "played": 5,
                  "win": 5,
                  "draw": 0,
                  "lose": 0,
                  "goals": {
                    "for": 14,
                    "against": 2
                  }
                },
                "away": {
                  "played": 5,
                  "win": 2,
                  "draw": 2,
                  "lose": 1,
                  "goals": {
                    "for": 9,
                    "against": 7
                  }
                },
                "update": "2023-11-01T00:00:00+00:00"
              },
              {
                "rank": 5,
                "team": {
                  "id": 66,
                  "name": "Aston Villa",
                  "logo": "https:\/\/media-4.api-sports.io\/football\/teams\/66.png"
                },
                "points": 22,
                "goalsDiff": 12,
                "group": "Premier League",
                "form": "WWDWW",
                "status": "same",
                "description": "Promotion - Europa League (Group Stage: )",
                "all": {
                  "played": 10,
                  "win": 7,
                  "draw": 1,
                  "lose": 2,
                  "goals": {
                    "for": 26,
                    "against": 14
                  }
                },
                "home": {
                  "played": 5,
                  "win": 5,
                  "draw": 0,
                  "lose": 0,
                  "goals": {
                    "for": 20,
                    "against": 4
                  }
                },
                "away": {
                  "played": 5,
                  "win": 2,
                  "draw": 1,
                  "lose": 2,
                  "goals": {
                    "for": 6,
                    "against": 10
                  }
                },
                "update": "2023-11-01T00:00:00+00:00"
              },
              {
                "rank": 6,
                "team": {
                  "id": 34,
                  "name": "Newcastle",
                  "logo": "https:\/\/media-4.api-sports.io\/football\/teams\/34.png"
                },
                "points": 17,
                "goalsDiff": 15,
                "group": "Premier League",
                "form": "DWDWW",
                "status": "same",
                "description": null,
                "all": {
                  "played": 10,
                  "win": 5,
                  "draw": 2,
                  "lose": 3,
                  "goals": {
                    "for": 26,
                    "against": 11
                  }
                },
                "home": {
                  "played": 5,
                  "win": 4,
                  "draw": 0,
                  "lose": 1,
                  "goals": {
                    "for": 13,
                    "against": 3
                  }
                },
                "away": {
                  "played": 5,
                  "win": 1,
                  "draw": 2,
                  "lose": 2,
                  "goals": {
                    "for": 13,
                    "against": 8
                  }
                },
                "update": "2023-11-01T00:00:00+00:00"
              },
              {
                "rank": 7,
                "team": {
                  "id": 51,
                  "name": "Brighton",
                  "logo": "https:\/\/media-4.api-sports.io\/football\/teams\/51.png"
                },
                "points": 17,
                "goalsDiff": 4,
                "group": "Premier League",
                "form": "DLDLW",
                "status": "same",
                "description": null,
                "all": {
                  "played": 10,
                  "win": 5,
                  "draw": 2,
                  "lose": 3,
                  "goals": {
                    "for": 23,
                    "against": 19
                  }
                },
                "home": {
                  "played": 6,
                  "win": 3,
                  "draw": 2,
                  "lose": 1,
                  "goals": {
                    "for": 14,
                    "against": 9
                  }
                },
                "away": {
                  "played": 4,
                  "win": 2,
                  "draw": 0,
                  "lose": 2,
                  "goals": {
                    "for": 9,
                    "against": 10
                  }
                },
                "update": "2023-11-01T00:00:00+00:00"
              },
              {
                "rank": 8,
                "team": {
                  "id": 33,
                  "name": "Manchester United",
                  "logo": "https:\/\/media-4.api-sports.io\/football\/teams\/33.png"
                },
                "points": 15,
                "goalsDiff": -5,
                "group": "Premier League",
                "form": "LWWLW",
                "status": "same",
                "description": null,
                "all": {
                  "played": 10,
                  "win": 5,
                  "draw": 0,
                  "lose": 5,
                  "goals": {
                    "for": 11,
                    "against": 16
                  }
                },
                "home": {
                  "played": 6,
                  "win": 3,
                  "draw": 0,
                  "lose": 3,
                  "goals": {
                    "for": 7,
                    "against": 10
                  }
                },
                "away": {
                  "played": 4,
                  "win": 2,
                  "draw": 0,
                  "lose": 2,
                  "goals": {
                    "for": 4,
                    "against": 6
                  }
                },
                "update": "2023-11-01T00:00:00+00:00"
              },
              {
                "rank": 9,
                "team": {
                  "id": 48,
                  "name": "West Ham",
                  "logo": "https:\/\/media-4.api-sports.io\/football\/teams\/48.png"
                },
                "points": 14,
                "goalsDiff": -1,
                "group": "Premier League",
                "form": "LLDWL",
                "status": "same",
                "description": null,
                "all": {
                  "played": 10,
                  "win": 4,
                  "draw": 2,
                  "lose": 4,
                  "goals": {
                    "for": 16,
                    "against": 17
                  }
                },
                "home": {
                  "played": 5,
                  "win": 2,
                  "draw": 1,
                  "lose": 2,
                  "goals": {
                    "for": 8,
                    "against": 7
                  }
                },
                "away": {
                  "played": 5,
                  "win": 2,
                  "draw": 1,
                  "lose": 2,
                  "goals": {
                    "for": 8,
                    "against": 10
                  }
                },
                "update": "2023-11-01T00:00:00+00:00"
              },
              {
                "rank": 10,
                "team": {
                  "id": 55,
                  "name": "Brentford",
                  "logo": "https:\/\/media-4.api-sports.io\/football\/teams\/55.png"
                },
                "points": 13,
                "goalsDiff": 4,
                "group": "Premier League",
                "form": "WWLDL",
                "status": "same",
                "description": null,
                "all": {
                  "played": 10,
                  "win": 3,
                  "draw": 4,
                  "lose": 3,
                  "goals": {
                    "for": 16,
                    "against": 12
                  }
                },
                "home": {
                  "played": 5,
                  "win": 1,
                  "draw": 3,
                  "lose": 1,
                  "goals": {
                    "for": 9,
                    "against": 8
                  }
                },
                "away": {
                  "played": 5,
                  "win": 2,
                  "draw": 1,
                  "lose": 2,
                  "goals": {
                    "for": 7,
                    "against": 4
                  }
                },
                "update": "2023-11-01T00:00:00+00:00"
              },
              {
                "rank": 11,
                "team": {
                  "id": 49,
                  "name": "Chelsea",
                  "logo": "https:\/\/media-4.api-sports.io\/football\/teams\/49.png"
                },
                "points": 12,
                "goalsDiff": 2,
                "group": "Premier League",
                "form": "LDWWL",
                "status": "same",
                "description": null,
                "all": {
                  "played": 10,
                  "win": 3,
                  "draw": 3,
                  "lose": 4,
                  "goals": {
                    "for": 13,
                    "against": 11
                  }
                },
                "home": {
                  "played": 6,
                  "win": 1,
                  "draw": 2,
                  "lose": 3,
                  "goals": {
                    "for": 6,
                    "against": 7
                  }
                },
                "away": {
                  "played": 4,
                  "win": 2,
                  "draw": 1,
                  "lose": 1,
                  "goals": {
                    "for": 7,
                    "against": 4
                  }
                },
                "update": "2023-11-01T00:00:00+00:00"
              },
              {
                "rank": 12,
                "team": {
                  "id": 39,
                  "name": "Wolves",
                  "logo": "https:\/\/media-4.api-sports.io\/football\/teams\/39.png"
                },
                "points": 12,
                "goalsDiff": -4,
                "group": "Premier League",
                "form": "DWDWD",
                "status": "same",
                "description": null,
                "all": {
                  "played": 10,
                  "win": 3,
                  "draw": 3,
                  "lose": 4,
                  "goals": {
                    "for": 13,
                    "against": 17
                  }
                },
                "home": {
                  "played": 5,
                  "win": 1,
                  "draw": 2,
                  "lose": 2,
                  "goals": {
                    "for": 7,
                    "against": 11
                  }
                },
                "away": {
                  "played": 5,
                  "win": 2,
                  "draw": 1,
                  "lose": 2,
                  "goals": {
                    "for": 6,
                    "against": 6
                  }
                },
                "update": "2023-11-01T00:00:00+00:00"
              },
              {
                "rank": 13,
                "team": {
                  "id": 52,
                  "name": "Crystal Palace",
                  "logo": "https:\/\/media-4.api-sports.io\/football\/teams\/52.png"
                },
                "points": 12,
                "goalsDiff": -5,
                "group": "Premier League",
                "form": "LLDWD",
                "status": "same",
                "description": null,
                "all": {
                  "played": 10,
                  "win": 3,
                  "draw": 3,
                  "lose": 4,
                  "goals": {
                    "for": 8,
                    "against": 13
                  }
                },
                "home": {
                  "played": 5,
                  "win": 1,
                  "draw": 2,
                  "lose": 2,
                  "goals": {
                    "for": 4,
                    "against": 5
                  }
                },
                "away": {
                  "played": 5,
                  "win": 2,
                  "draw": 1,
                  "lose": 2,
                  "goals": {
                    "for": 4,
                    "against": 8
                  }
                },
                "update": "2023-11-01T00:00:00+00:00"
              },
              {
                "rank": 14,
                "team": {
                  "id": 36,
                  "name": "Fulham",
                  "logo": "https:\/\/media-4.api-sports.io\/football\/teams\/36.png"
                },
                "points": 12,
                "goalsDiff": -7,
                "group": "Premier League",
                "form": "DLWLD",
                "status": "same",
                "description": null,
                "all": {
                  "played": 10,
                  "win": 3,
                  "draw": 3,
                  "lose": 4,
                  "goals": {
                    "for": 9,
                    "against": 16
                  }
                },
                "home": {
                  "played": 4,
                  "win": 2,
                  "draw": 0,
                  "lose": 2,
                  "goals": {
                    "for": 4,
                    "against": 6
                  }
                },
                "away": {
                  "played": 6,
                  "win": 1,
                  "draw": 3,
                  "lose": 2,
                  "goals": {
                    "for": 5,
                    "against": 10
                  }
                },
                "update": "2023-11-01T00:00:00+00:00"
              },
              {
                "rank": 15,
                "team": {
                  "id": 45,
                  "name": "Everton",
                  "logo": "https:\/\/media-4.api-sports.io\/football\/teams\/45.png"
                },
                "points": 10,
                "goalsDiff": -4,
                "group": "Premier League",
                "form": "WLWLW",
                "status": "same",
                "description": null,
                "all": {
                  "played": 10,
                  "win": 3,
                  "draw": 1,
                  "lose": 6,
                  "goals": {
                    "for": 10,
                    "against": 14
                  }
                },
                "home": {
                  "played": 5,
                  "win": 1,
                  "draw": 0,
                  "lose": 4,
                  "goals": {
                    "for": 4,
                    "against": 5
                  }
                },
                "away": {
                  "played": 5,
                  "win": 2,
                  "draw": 1,
                  "lose": 2,
                  "goals": {
                    "for": 6,
                    "against": 9
                  }
                },
                "update": "2023-11-01T00:00:00+00:00"
              },
              {
                "rank": 16,
                "team": {
                  "id": 65,
                  "name": "Nottingham Forest",
                  "logo": "https:\/\/media-4.api-sports.io\/football\/teams\/65.png"
                },
                "points": 10,
                "goalsDiff": -5,
                "group": "Premier League",
                "form": "LDDDL",
                "status": "same",
                "description": null,
                "all": {
                  "played": 10,
                  "win": 2,
                  "draw": 4,
                  "lose": 4,
                  "goals": {
                    "for": 10,
                    "against": 15
                  }
                },
                "home": {
                  "played": 4,
                  "win": 1,
                  "draw": 3,
                  "lose": 0,
                  "goals": {
                    "for": 6,
                    "against": 5
                  }
                },
                "away": {
                  "played": 6,
                  "win": 1,
                  "draw": 1,
                  "lose": 4,
                  "goals": {
                    "for": 4,
                    "against": 10
                  }
                },
                "update": "2023-11-01T00:00:00+00:00"
              },
              {
                "rank": 17,
                "team": {
                  "id": 35,
                  "name": "Bournemouth",
                  "logo": "https:\/\/media-4.api-sports.io\/football\/teams\/35.png"
                },
                "points": 6,
                "goalsDiff": -13,
                "group": "Premier League",
                "form": "WLLLL",
                "status": "same",
                "description": null,
                "all": {
                  "played": 10,
                  "win": 1,
                  "draw": 3,
                  "lose": 6,
                  "goals": {
                    "for": 8,
                    "against": 21
                  }
                },
                "home": {
                  "played": 6,
                  "win": 1,
                  "draw": 2,
                  "lose": 3,
                  "goals": {
                    "for": 4,
                    "against": 10
                  }
                },
                "away": {
                  "played": 4,
                  "win": 0,
                  "draw": 1,
                  "lose": 3,
                  "goals": {
                    "for": 4,
                    "against": 11
                  }
                },
                "update": "2023-11-01T00:00:00+00:00"
              },
              {
                "rank": 18,
                "team": {
                  "id": 1359,
                  "name": "Luton",
                  "logo": "https:\/\/media-4.api-sports.io\/football\/teams\/1359.png"
                },
                "points": 5,
                "goalsDiff": -11,
                "group": "Premier League",
                "form": "LDLLW",
                "status": "same",
                "description": "Relegation - Championship",
                "all": {
                  "played": 10,
                  "win": 1,
                  "draw": 2,
                  "lose": 7,
                  "goals": {
                    "for": 9,
                    "against": 20
                  }
                },
                "home": {
                  "played": 4,
                  "win": 0,
                  "draw": 1,
                  "lose": 3,
                  "goals": {
                    "for": 3,
                    "against": 6
                  }
                },
                "away": {
                  "played": 6,
                  "win": 1,
                  "draw": 1,
                  "lose": 4,
                  "goals": {
                    "for": 6,
                    "against": 14
                  }
                },
                "update": "2023-11-01T00:00:00+00:00"
              },
              {
                "rank": 19,
                "team": {
                  "id": 44,
                  "name": "Burnley",
                  "logo": "https:\/\/media-4.api-sports.io\/football\/teams\/44.png"
                },
                "points": 4,
                "goalsDiff": -17,
                "group": "Premier League",
                "form": "LLLWL",
                "status": "same",
                "description": "Relegation - Championship",
                "all": {
                  "played": 10,
                  "win": 1,
                  "draw": 1,
                  "lose": 8,
                  "goals": {
                    "for": 8,
                    "against": 25
                  }
                },
                "home": {
                  "played": 5,
                  "win": 0,
                  "draw": 0,
                  "lose": 5,
                  "goals": {
                    "for": 4,
                    "against": 16
                  }
                },
                "away": {
                  "played": 5,
                  "win": 1,
                  "draw": 1,
                  "lose": 3,
                  "goals": {
                    "for": 4,
                    "against": 9
                  }
                },
                "update": "2023-11-01T00:00:00+00:00"
              },
              {
                "rank": 20,
                "team": {
                  "id": 62,
                  "name": "Sheffield Utd",
                  "logo": "https:\/\/media-4.api-sports.io\/football\/teams\/62.png"
                },
                "points": 1,
                "goalsDiff": -22,
                "group": "Premier League",
                "form": "LLLLL",
                "status": "same",
                "description": "Relegation - Championship",
                "all": {
                  "played": 10,
                  "win": 0,
                  "draw": 1,
                  "lose": 9,
                  "goals": {
                    "for": 7,
                    "against": 29
                  }
                },
                "home": {
                  "played": 5,
                  "win": 0,
                  "draw": 1,
                  "lose": 4,
                  "goals": {
                    "for": 4,
                    "against": 15
                  }
                },
                "away": {
                  "played": 5,
                  "win": 0,
                  "draw": 0,
                  "lose": 5,
                  "goals": {
                    "for": 3,
                    "against": 14
                  }
                },
                "update": "2023-11-01T00:00:00+00:00"
              }
            ]
          ]
        }
      }
    ]
  };
  private responseGermany={
    "get": "standings",
    "parameters": {
      "season": "2023",
      "league": "78"
    },
    "errors": [],
    "results": 1,
    "paging": {
      "current": 1,
      "total": 1
    },
    "response": [
      {
        "league": {
          "id": 78,
          "name": "Bundesliga",
          "country": "Germany",
          "logo": "https:\/\/media-4.api-sports.io\/football\/leagues\/78.png",
          "flag": "https:\/\/media-4.api-sports.io\/flags\/de.svg",
          "season": 2023,
          "standings": [
            [
              {
                "rank": 1,
                "team": {
                  "id": 168,
                  "name": "Bayer Leverkusen",
                  "logo": "https:\/\/media-4.api-sports.io\/football\/teams\/168.png"
                },
                "points": 25,
                "goalsDiff": 19,
                "group": "Bundesliga",
                "form": "WWWWW",
                "status": "same",
                "description": "Promotion - Champions League (Group Stage: )",
                "all": {
                  "played": 9,
                  "win": 8,
                  "draw": 1,
                  "lose": 0,
                  "goals": {
                    "for": 27,
                    "against": 8
                  }
                },
                "home": {
                  "played": 5,
                  "win": 5,
                  "draw": 0,
                  "lose": 0,
                  "goals": {
                    "for": 17,
                    "against": 5
                  }
                },
                "away": {
                  "played": 4,
                  "win": 3,
                  "draw": 1,
                  "lose": 0,
                  "goals": {
                    "for": 10,
                    "against": 3
                  }
                },
                "update": "2023-11-01T00:00:00+00:00"
              },
              {
                "rank": 2,
                "team": {
                  "id": 157,
                  "name": "Bayern Munich",
                  "logo": "https:\/\/media-4.api-sports.io\/football\/teams\/157.png"
                },
                "points": 23,
                "goalsDiff": 27,
                "group": "Bundesliga",
                "form": "WWWDW",
                "status": "same",
                "description": "Promotion - Champions League (Group Stage: )",
                "all": {
                  "played": 9,
                  "win": 7,
                  "draw": 2,
                  "lose": 0,
                  "goals": {
                    "for": 34,
                    "against": 7
                  }
                },
                "home": {
                  "played": 5,
                  "win": 4,
                  "draw": 1,
                  "lose": 0,
                  "goals": {
                    "for": 23,
                    "against": 3
                  }
                },
                "away": {
                  "played": 4,
                  "win": 3,
                  "draw": 1,
                  "lose": 0,
                  "goals": {
                    "for": 11,
                    "against": 4
                  }
                },
                "update": "2023-11-01T00:00:00+00:00"
              },
              {
                "rank": 3,
                "team": {
                  "id": 172,
                  "name": "VfB Stuttgart",
                  "logo": "https:\/\/media-4.api-sports.io\/football\/teams\/172.png"
                },
                "points": 21,
                "goalsDiff": 16,
                "group": "Bundesliga",
                "form": "LWWWW",
                "status": "same",
                "description": "Promotion - Champions League (Group Stage: )",
                "all": {
                  "played": 9,
                  "win": 7,
                  "draw": 0,
                  "lose": 2,
                  "goals": {
                    "for": 27,
                    "against": 11
                  }
                },
                "home": {
                  "played": 5,
                  "win": 4,
                  "draw": 0,
                  "lose": 1,
                  "goals": {
                    "for": 18,
                    "against": 5
                  }
                },
                "away": {
                  "played": 4,
                  "win": 3,
                  "draw": 0,
                  "lose": 1,
                  "goals": {
                    "for": 9,
                    "against": 6
                  }
                },
                "update": "2023-11-01T00:00:00+00:00"
              },
              {
                "rank": 4,
                "team": {
                  "id": 165,
                  "name": "Borussia Dortmund",
                  "logo": "https:\/\/media-4.api-sports.io\/football\/teams\/165.png"
                },
                "points": 21,
                "goalsDiff": 9,
                "group": "Bundesliga",
                "form": "DWWWW",
                "status": "same",
                "description": "Promotion - Champions League (Group Stage: )",
                "all": {
                  "played": 9,
                  "win": 6,
                  "draw": 3,
                  "lose": 0,
                  "goals": {
                    "for": 20,
                    "against": 11
                  }
                },
                "home": {
                  "played": 5,
                  "win": 4,
                  "draw": 1,
                  "lose": 0,
                  "goals": {
                    "for": 9,
                    "against": 4
                  }
                },
                "away": {
                  "played": 4,
                  "win": 2,
                  "draw": 2,
                  "lose": 0,
                  "goals": {
                    "for": 11,
                    "against": 7
                  }
                },
                "update": "2023-11-01T00:00:00+00:00"
              },
              {
                "rank": 5,
                "team": {
                  "id": 173,
                  "name": "RB Leipzig",
                  "logo": "https:\/\/media-4.api-sports.io\/football\/teams\/173.png"
                },
                "points": 20,
                "goalsDiff": 18,
                "group": "Bundesliga",
                "form": "WWDDW",
                "status": "same",
                "description": "Promotion - Europa League (Group Stage: )",
                "all": {
                  "played": 9,
                  "win": 6,
                  "draw": 2,
                  "lose": 1,
                  "goals": {
                    "for": 25,
                    "against": 7
                  }
                },
                "home": {
                  "played": 5,
                  "win": 3,
                  "draw": 2,
                  "lose": 0,
                  "goals": {
                    "for": 16,
                    "against": 3
                  }
                },
                "away": {
                  "played": 4,
                  "win": 3,
                  "draw": 0,
                  "lose": 1,
                  "goals": {
                    "for": 9,
                    "against": 4
                  }
                },
                "update": "2023-11-01T00:00:00+00:00"
              },
              {
                "rank": 6,
                "team": {
                  "id": 167,
                  "name": "1899 Hoffenheim",
                  "logo": "https:\/\/media-4.api-sports.io\/football\/teams\/167.png"
                },
                "points": 18,
                "goalsDiff": 4,
                "group": "Bundesliga",
                "form": "WLWLW",
                "status": "same",
                "description": "Promotion - Europa Conference League (Qualification: )",
                "all": {
                  "played": 9,
                  "win": 6,
                  "draw": 0,
                  "lose": 3,
                  "goals": {
                    "for": 20,
                    "against": 16
                  }
                },
                "home": {
                  "played": 4,
                  "win": 1,
                  "draw": 0,
                  "lose": 3,
                  "goals": {
                    "for": 6,
                    "against": 9
                  }
                },
                "away": {
                  "played": 5,
                  "win": 5,
                  "draw": 0,
                  "lose": 0,
                  "goals": {
                    "for": 14,
                    "against": 7
                  }
                },
                "update": "2023-11-01T00:00:00+00:00"
              },
              {
                "rank": 7,
                "team": {
                  "id": 169,
                  "name": "Eintracht Frankfurt",
                  "logo": "https:\/\/media-4.api-sports.io\/football\/teams\/169.png"
                },
                "points": 14,
                "goalsDiff": 3,
                "group": "Bundesliga",
                "form": "DWWLD",
                "status": "same",
                "description": null,
                "all": {
                  "played": 9,
                  "win": 3,
                  "draw": 5,
                  "lose": 1,
                  "goals": {
                    "for": 12,
                    "against": 9
                  }
                },
                "home": {
                  "played": 5,
                  "win": 2,
                  "draw": 3,
                  "lose": 0,
                  "goals": {
                    "for": 7,
                    "against": 4
                  }
                },
                "away": {
                  "played": 4,
                  "win": 1,
                  "draw": 2,
                  "lose": 1,
                  "goals": {
                    "for": 5,
                    "against": 5
                  }
                },
                "update": "2023-11-01T00:00:00+00:00"
              },
              {
                "rank": 8,
                "team": {
                  "id": 160,
                  "name": "SC Freiburg",
                  "logo": "https:\/\/media-4.api-sports.io\/football\/teams\/160.png"
                },
                "points": 13,
                "goalsDiff": -6,
                "group": "Bundesliga",
                "form": "LWLWD",
                "status": "same",
                "description": null,
                "all": {
                  "played": 9,
                  "win": 4,
                  "draw": 1,
                  "lose": 4,
                  "goals": {
                    "for": 10,
                    "against": 16
                  }
                },
                "home": {
                  "played": 4,
                  "win": 3,
                  "draw": 0,
                  "lose": 1,
                  "goals": {
                    "for": 7,
                    "against": 5
                  }
                },
                "away": {
                  "played": 5,
                  "win": 1,
                  "draw": 1,
                  "lose": 3,
                  "goals": {
                    "for": 3,
                    "against": 11
                  }
                },
                "update": "2023-11-01T00:00:00+00:00"
              },
              {
                "rank": 9,
                "team": {
                  "id": 161,
                  "name": "VfL Wolfsburg",
                  "logo": "https:\/\/media-4.api-sports.io\/football\/teams\/161.png"
                },
                "points": 12,
                "goalsDiff": -1,
                "group": "Bundesliga",
                "form": "LLLWL",
                "status": "same",
                "description": null,
                "all": {
                  "played": 9,
                  "win": 4,
                  "draw": 0,
                  "lose": 5,
                  "goals": {
                    "for": 13,
                    "against": 14
                  }
                },
                "home": {
                  "played": 4,
                  "win": 3,
                  "draw": 0,
                  "lose": 1,
                  "goals": {
                    "for": 7,
                    "against": 3
                  }
                },
                "away": {
                  "played": 5,
                  "win": 1,
                  "draw": 0,
                  "lose": 4,
                  "goals": {
                    "for": 6,
                    "against": 11
                  }
                },
                "update": "2023-11-01T00:00:00+00:00"
              },
              {
                "rank": 10,
                "team": {
                  "id": 170,
                  "name": "FC Augsburg",
                  "logo": "https:\/\/media-4.api-sports.io\/football\/teams\/170.png"
                },
                "points": 11,
                "goalsDiff": -3,
                "group": "Bundesliga",
                "form": "WWLLW",
                "status": "same",
                "description": null,
                "all": {
                  "played": 9,
                  "win": 3,
                  "draw": 2,
                  "lose": 4,
                  "goals": {
                    "for": 18,
                    "against": 21
                  }
                },
                "home": {
                  "played": 5,
                  "win": 2,
                  "draw": 2,
                  "lose": 1,
                  "goals": {
                    "for": 12,
                    "against": 11
                  }
                },
                "away": {
                  "played": 4,
                  "win": 1,
                  "draw": 0,
                  "lose": 3,
                  "goals": {
                    "for": 6,
                    "against": 10
                  }
                },
                "update": "2023-11-01T00:00:00+00:00"
              },
              {
                "rank": 11,
                "team": {
                  "id": 163,
                  "name": "Borussia Monchengladbach",
                  "logo": "https:\/\/media-4.api-sports.io\/football\/teams\/163.png"
                },
                "points": 9,
                "goalsDiff": -4,
                "group": "Bundesliga",
                "form": "WLDWL",
                "status": "same",
                "description": null,
                "all": {
                  "played": 9,
                  "win": 2,
                  "draw": 3,
                  "lose": 4,
                  "goals": {
                    "for": 16,
                    "against": 20
                  }
                },
                "home": {
                  "played": 5,
                  "win": 1,
                  "draw": 1,
                  "lose": 3,
                  "goals": {
                    "for": 5,
                    "against": 9
                  }
                },
                "away": {
                  "played": 4,
                  "win": 1,
                  "draw": 2,
                  "lose": 1,
                  "goals": {
                    "for": 11,
                    "against": 11
                  }
                },
                "update": "2023-11-01T00:00:00+00:00"
              },
              {
                "rank": 12,
                "team": {
                  "id": 162,
                  "name": "Werder Bremen",
                  "logo": "https:\/\/media-4.api-sports.io\/football\/teams\/162.png"
                },
                "points": 9,
                "goalsDiff": -4,
                "group": "Bundesliga",
                "form": "WLLLW",
                "status": "same",
                "description": null,
                "all": {
                  "played": 9,
                  "win": 3,
                  "draw": 0,
                  "lose": 6,
                  "goals": {
                    "for": 14,
                    "against": 18
                  }
                },
                "home": {
                  "played": 5,
                  "win": 3,
                  "draw": 0,
                  "lose": 2,
                  "goals": {
                    "for": 10,
                    "against": 8
                  }
                },
                "away": {
                  "played": 4,
                  "win": 0,
                  "draw": 0,
                  "lose": 4,
                  "goals": {
                    "for": 4,
                    "against": 10
                  }
                },
                "update": "2023-11-01T00:00:00+00:00"
              },
              {
                "rank": 13,
                "team": {
                  "id": 180,
                  "name": "FC Heidenheim",
                  "logo": "https:\/\/media-4.api-sports.io\/football\/teams\/180.png"
                },
                "points": 7,
                "goalsDiff": -9,
                "group": "Bundesliga",
                "form": "LLLWL",
                "status": "same",
                "description": null,
                "all": {
                  "played": 9,
                  "win": 2,
                  "draw": 1,
                  "lose": 6,
                  "goals": {
                    "for": 13,
                    "against": 22
                  }
                },
                "home": {
                  "played": 4,
                  "win": 2,
                  "draw": 0,
                  "lose": 2,
                  "goals": {
                    "for": 9,
                    "against": 10
                  }
                },
                "away": {
                  "played": 5,
                  "win": 0,
                  "draw": 1,
                  "lose": 4,
                  "goals": {
                    "for": 4,
                    "against": 12
                  }
                },
                "update": "2023-11-01T00:00:00+00:00"
              },
              {
                "rank": 14,
                "team": {
                  "id": 181,
                  "name": "SV Darmstadt 98",
                  "logo": "https:\/\/media-4.api-sports.io\/football\/teams\/181.png"
                },
                "points": 7,
                "goalsDiff": -17,
                "group": "Bundesliga",
                "form": "LLWWL",
                "status": "same",
                "description": null,
                "all": {
                  "played": 9,
                  "win": 2,
                  "draw": 1,
                  "lose": 6,
                  "goals": {
                    "for": 13,
                    "against": 30
                  }
                },
                "home": {
                  "played": 4,
                  "win": 1,
                  "draw": 1,
                  "lose": 2,
                  "goals": {
                    "for": 9,
                    "against": 12
                  }
                },
                "away": {
                  "played": 5,
                  "win": 1,
                  "draw": 0,
                  "lose": 4,
                  "goals": {
                    "for": 4,
                    "against": 18
                  }
                },
                "update": "2023-11-01T00:00:00+00:00"
              },
              {
                "rank": 15,
                "team": {
                  "id": 182,
                  "name": "Union Berlin",
                  "logo": "https:\/\/media-4.api-sports.io\/football\/teams\/182.png"
                },
                "points": 6,
                "goalsDiff": -8,
                "group": "Bundesliga",
                "form": "LLLLL",
                "status": "same",
                "description": null,
                "all": {
                  "played": 9,
                  "win": 2,
                  "draw": 0,
                  "lose": 7,
                  "goals": {
                    "for": 11,
                    "against": 19
                  }
                },
                "home": {
                  "played": 4,
                  "win": 1,
                  "draw": 0,
                  "lose": 3,
                  "goals": {
                    "for": 4,
                    "against": 9
                  }
                },
                "away": {
                  "played": 5,
                  "win": 1,
                  "draw": 0,
                  "lose": 4,
                  "goals": {
                    "for": 7,
                    "against": 10
                  }
                },
                "update": "2023-11-01T00:00:00+00:00"
              },
              {
                "rank": 16,
                "team": {
                  "id": 176,
                  "name": "VfL BOCHUM",
                  "logo": "https:\/\/media-4.api-sports.io\/football\/teams\/176.png"
                },
                "points": 5,
                "goalsDiff": -15,
                "group": "Bundesliga",
                "form": "DLDLL",
                "status": "same",
                "description": "Bundesliga (Relegation)",
                "all": {
                  "played": 9,
                  "win": 0,
                  "draw": 5,
                  "lose": 4,
                  "goals": {
                    "for": 8,
                    "against": 23
                  }
                },
                "home": {
                  "played": 4,
                  "win": 0,
                  "draw": 3,
                  "lose": 1,
                  "goals": {
                    "for": 5,
                    "against": 7
                  }
                },
                "away": {
                  "played": 5,
                  "win": 0,
                  "draw": 2,
                  "lose": 3,
                  "goals": {
                    "for": 3,
                    "against": 16
                  }
                },
                "update": "2023-11-01T00:00:00+00:00"
              },
              {
                "rank": 17,
                "team": {
                  "id": 192,
                  "name": "FC Koln",
                  "logo": "https:\/\/media-4.api-sports.io\/football\/teams\/192.png"
                },
                "points": 4,
                "goalsDiff": -14,
                "group": "Bundesliga",
                "form": "LWLLL",
                "status": "same",
                "description": "Relegation - 2. Bundesliga",
                "all": {
                  "played": 9,
                  "win": 1,
                  "draw": 1,
                  "lose": 7,
                  "goals": {
                    "for": 7,
                    "against": 21
                  }
                },
                "home": {
                  "played": 4,
                  "win": 1,
                  "draw": 0,
                  "lose": 3,
                  "goals": {
                    "for": 5,
                    "against": 8
                  }
                },
                "away": {
                  "played": 5,
                  "win": 0,
                  "draw": 1,
                  "lose": 4,
                  "goals": {
                    "for": 2,
                    "against": 13
                  }
                },
                "update": "2023-11-01T00:00:00+00:00"
              },
              {
                "rank": 18,
                "team": {
                  "id": 164,
                  "name": "FSV Mainz 05",
                  "logo": "https:\/\/media-4.api-sports.io\/football\/teams\/164.png"
                },
                "points": 3,
                "goalsDiff": -15,
                "group": "Bundesliga",
                "form": "DLDLL",
                "status": "same",
                "description": "Relegation - 2. Bundesliga",
                "all": {
                  "played": 9,
                  "win": 0,
                  "draw": 3,
                  "lose": 6,
                  "goals": {
                    "for": 9,
                    "against": 24
                  }
                },
                "home": {
                  "played": 4,
                  "win": 0,
                  "draw": 1,
                  "lose": 3,
                  "goals": {
                    "for": 3,
                    "against": 10
                  }
                },
                "away": {
                  "played": 5,
                  "win": 0,
                  "draw": 2,
                  "lose": 3,
                  "goals": {
                    "for": 6,
                    "against": 14
                  }
                },
                "update": "2023-11-01T00:00:00+00:00"
              }
            ]
          ]
        }
      }
    ]
  };
  private responseFrance = {
    "get": "standings",
    "parameters": {
      "season": "2023",
      "league": "61"
    },
    "errors": [],
    "results": 1,
    "paging": {
      "current": 1,
      "total": 1
    },
    "response": [
      {
        "league": {
          "id": 61,
          "name": "Ligue 1",
          "country": "France",
          "logo": "https:\/\/media-4.api-sports.io\/football\/leagues\/61.png",
          "flag": "https:\/\/media-4.api-sports.io\/flags\/fr.svg",
          "season": 2023,
          "standings": [
            [
              {
                "rank": 1,
                "team": {
                  "id": 84,
                  "name": "Nice",
                  "logo": "https:\/\/media-4.api-sports.io\/football\/teams\/84.png"
                },
                "points": 22,
                "goalsDiff": 7,
                "group": "Ligue 1",
                "form": "WWWDW",
                "status": "same",
                "description": "Promotion - Champions League (Group Stage: )",
                "all": {
                  "played": 10,
                  "win": 6,
                  "draw": 4,
                  "lose": 0,
                  "goals": {
                    "for": 11,
                    "against": 4
                  }
                },
                "home": {
                  "played": 5,
                  "win": 2,
                  "draw": 3,
                  "lose": 0,
                  "goals": {
                    "for": 4,
                    "against": 1
                  }
                },
                "away": {
                  "played": 5,
                  "win": 4,
                  "draw": 1,
                  "lose": 0,
                  "goals": {
                    "for": 7,
                    "against": 3
                  }
                },
                "update": "2023-11-01T00:00:00+00:00"
              },
              {
                "rank": 2,
                "team": {
                  "id": 85,
                  "name": "Paris Saint Germain",
                  "logo": "https:\/\/media-4.api-sports.io\/football\/teams\/85.png"
                },
                "points": 21,
                "goalsDiff": 14,
                "group": "Ligue 1",
                "form": "WWWDW",
                "status": "same",
                "description": "Promotion - Champions League (Group Stage: )",
                "all": {
                  "played": 10,
                  "win": 6,
                  "draw": 3,
                  "lose": 1,
                  "goals": {
                    "for": 23,
                    "against": 9
                  }
                },
                "home": {
                  "played": 5,
                  "win": 3,
                  "draw": 1,
                  "lose": 1,
                  "goals": {
                    "for": 12,
                    "against": 4
                  }
                },
                "away": {
                  "played": 5,
                  "win": 3,
                  "draw": 2,
                  "lose": 0,
                  "goals": {
                    "for": 11,
                    "against": 5
                  }
                },
                "update": "2023-11-01T00:00:00+00:00"
              },
              {
                "rank": 3,
                "team": {
                  "id": 91,
                  "name": "Monaco",
                  "logo": "https:\/\/media-4.api-sports.io\/football\/teams\/91.png"
                },
                "points": 20,
                "goalsDiff": 9,
                "group": "Ligue 1",
                "form": "LWWWL",
                "status": "same",
                "description": "Promotion - Champions League (Group Stage: )",
                "all": {
                  "played": 10,
                  "win": 6,
                  "draw": 2,
                  "lose": 2,
                  "goals": {
                    "for": 23,
                    "against": 14
                  }
                },
                "home": {
                  "played": 5,
                  "win": 4,
                  "draw": 0,
                  "lose": 1,
                  "goals": {
                    "for": 11,
                    "against": 4
                  }
                },
                "away": {
                  "played": 5,
                  "win": 2,
                  "draw": 2,
                  "lose": 1,
                  "goals": {
                    "for": 12,
                    "against": 10
                  }
                },
                "update": "2023-11-01T00:00:00+00:00"
              },
              {
                "rank": 4,
                "team": {
                  "id": 79,
                  "name": "Lille",
                  "logo": "https:\/\/media-4.api-sports.io\/football\/teams\/79.png"
                },
                "points": 18,
                "goalsDiff": 4,
                "group": "Ligue 1",
                "form": "WWDWL",
                "status": "same",
                "description": "Promotion - Champions League (Qualification: )",
                "all": {
                  "played": 10,
                  "win": 5,
                  "draw": 3,
                  "lose": 2,
                  "goals": {
                    "for": 14,
                    "against": 10
                  }
                },
                "home": {
                  "played": 5,
                  "win": 4,
                  "draw": 0,
                  "lose": 1,
                  "goals": {
                    "for": 7,
                    "against": 2
                  }
                },
                "away": {
                  "played": 5,
                  "win": 1,
                  "draw": 3,
                  "lose": 1,
                  "goals": {
                    "for": 7,
                    "against": 8
                  }
                },
                "update": "2023-11-01T00:00:00+00:00"
              },
              {
                "rank": 5,
                "team": {
                  "id": 93,
                  "name": "Reims",
                  "logo": "https:\/\/media-4.api-sports.io\/football\/teams\/93.png"
                },
                "points": 17,
                "goalsDiff": 4,
                "group": "Ligue 1",
                "form": "WDLWW",
                "status": "same",
                "description": "Promotion - Europa League (Group Stage: )",
                "all": {
                  "played": 10,
                  "win": 5,
                  "draw": 2,
                  "lose": 3,
                  "goals": {
                    "for": 16,
                    "against": 12
                  }
                },
                "home": {
                  "played": 5,
                  "win": 3,
                  "draw": 0,
                  "lose": 2,
                  "goals": {
                    "for": 7,
                    "against": 5
                  }
                },
                "away": {
                  "played": 5,
                  "win": 2,
                  "draw": 2,
                  "lose": 1,
                  "goals": {
                    "for": 9,
                    "against": 7
                  }
                },
                "update": "2023-11-01T00:00:00+00:00"
              },
              {
                "rank": 6,
                "team": {
                  "id": 106,
                  "name": "Stade Brestois 29",
                  "logo": "https:\/\/media-4.api-sports.io\/football\/teams\/106.png"
                },
                "points": 15,
                "goalsDiff": 0,
                "group": "Ligue 1",
                "form": "LLDDW",
                "status": "same",
                "description": "Promotion - Europa Conference League (Qualification: )",
                "all": {
                  "played": 10,
                  "win": 4,
                  "draw": 3,
                  "lose": 3,
                  "goals": {
                    "for": 11,
                    "against": 11
                  }
                },
                "home": {
                  "played": 5,
                  "win": 2,
                  "draw": 2,
                  "lose": 1,
                  "goals": {
                    "for": 7,
                    "against": 6
                  }
                },
                "away": {
                  "played": 5,
                  "win": 2,
                  "draw": 1,
                  "lose": 2,
                  "goals": {
                    "for": 4,
                    "against": 5
                  }
                },
                "update": "2023-11-01T00:00:00+00:00"
              },
              {
                "rank": 7,
                "team": {
                  "id": 83,
                  "name": "Nantes",
                  "logo": "https:\/\/media-4.api-sports.io\/football\/teams\/83.png"
                },
                "points": 14,
                "goalsDiff": -3,
                "group": "Ligue 1",
                "form": "LWWLW",
                "status": "same",
                "description": null,
                "all": {
                  "played": 10,
                  "win": 4,
                  "draw": 2,
                  "lose": 4,
                  "goals": {
                    "for": 16,
                    "against": 19
                  }
                },
                "home": {
                  "played": 5,
                  "win": 2,
                  "draw": 2,
                  "lose": 1,
                  "goals": {
                    "for": 12,
                    "against": 9
                  }
                },
                "away": {
                  "played": 5,
                  "win": 2,
                  "draw": 0,
                  "lose": 3,
                  "goals": {
                    "for": 4,
                    "against": 10
                  }
                },
                "update": "2023-11-01T00:00:00+00:00"
              },
              {
                "rank": 8,
                "team": {
                  "id": 94,
                  "name": "Rennes",
                  "logo": "https:\/\/media-4.api-sports.io\/football\/teams\/94.png"
                },
                "points": 12,
                "goalsDiff": 3,
                "group": "Ligue 1",
                "form": "DLLWD",
                "status": "same",
                "description": null,
                "all": {
                  "played": 10,
                  "win": 2,
                  "draw": 6,
                  "lose": 2,
                  "goals": {
                    "for": 16,
                    "against": 13
                  }
                },
                "home": {
                  "played": 6,
                  "win": 2,
                  "draw": 3,
                  "lose": 1,
                  "goals": {
                    "for": 14,
                    "against": 10
                  }
                },
                "away": {
                  "played": 4,
                  "win": 0,
                  "draw": 3,
                  "lose": 1,
                  "goals": {
                    "for": 2,
                    "against": 3
                  }
                },
                "update": "2023-11-01T00:00:00+00:00"
              },
              {
                "rank": 9,
                "team": {
                  "id": 81,
                  "name": "Marseille",
                  "logo": "https:\/\/media-4.api-sports.io\/football\/teams\/81.png"
                },
                "points": 12,
                "goalsDiff": 0,
                "group": "Ligue 1",
                "form": "LWLLD",
                "status": "same",
                "description": null,
                "all": {
                  "played": 9,
                  "win": 3,
                  "draw": 3,
                  "lose": 3,
                  "goals": {
                    "for": 12,
                    "against": 12
                  }
                },
                "home": {
                  "played": 4,
                  "win": 3,
                  "draw": 1,
                  "lose": 0,
                  "goals": {
                    "for": 7,
                    "against": 1
                  }
                },
                "away": {
                  "played": 5,
                  "win": 0,
                  "draw": 2,
                  "lose": 3,
                  "goals": {
                    "for": 5,
                    "against": 11
                  }
                },
                "update": "2023-11-01T00:00:00+00:00"
              },
              {
                "rank": 10,
                "team": {
                  "id": 116,
                  "name": "Lens",
                  "logo": "https:\/\/media-4.api-sports.io\/football\/teams\/116.png"
                },
                "points": 12,
                "goalsDiff": -1,
                "group": "Ligue 1",
                "form": "WDDWW",
                "status": "same",
                "description": null,
                "all": {
                  "played": 10,
                  "win": 3,
                  "draw": 3,
                  "lose": 4,
                  "goals": {
                    "for": 12,
                    "against": 13
                  }
                },
                "home": {
                  "played": 5,
                  "win": 2,
                  "draw": 2,
                  "lose": 1,
                  "goals": {
                    "for": 8,
                    "against": 4
                  }
                },
                "away": {
                  "played": 5,
                  "win": 1,
                  "draw": 1,
                  "lose": 3,
                  "goals": {
                    "for": 4,
                    "against": 9
                  }
                },
                "update": "2023-11-01T00:00:00+00:00"
              },
              {
                "rank": 11,
                "team": {
                  "id": 82,
                  "name": "Montpellier",
                  "logo": "https:\/\/media-4.api-sports.io\/football\/teams\/82.png"
                },
                "points": 11,
                "goalsDiff": 4,
                "group": "Ligue 1",
                "form": "WLWDD",
                "status": "same",
                "description": null,
                "all": {
                  "played": 9,
                  "win": 3,
                  "draw": 3,
                  "lose": 3,
                  "goals": {
                    "for": 15,
                    "against": 11
                  }
                },
                "home": {
                  "played": 4,
                  "win": 1,
                  "draw": 2,
                  "lose": 1,
                  "goals": {
                    "for": 6,
                    "against": 5
                  }
                },
                "away": {
                  "played": 5,
                  "win": 2,
                  "draw": 1,
                  "lose": 2,
                  "goals": {
                    "for": 9,
                    "against": 6
                  }
                },
                "update": "2023-11-01T00:00:00+00:00"
              },
              {
                "rank": 12,
                "team": {
                  "id": 96,
                  "name": "Toulouse",
                  "logo": "https:\/\/media-4.api-sports.io\/football\/teams\/96.png"
                },
                "points": 11,
                "goalsDiff": -2,
                "group": "Ligue 1",
                "form": "LDDWL",
                "status": "same",
                "description": null,
                "all": {
                  "played": 10,
                  "win": 2,
                  "draw": 5,
                  "lose": 3,
                  "goals": {
                    "for": 11,
                    "against": 13
                  }
                },
                "home": {
                  "played": 4,
                  "win": 1,
                  "draw": 3,
                  "lose": 0,
                  "goals": {
                    "for": 7,
                    "against": 4
                  }
                },
                "away": {
                  "played": 6,
                  "win": 1,
                  "draw": 2,
                  "lose": 3,
                  "goals": {
                    "for": 4,
                    "against": 9
                  }
                },
                "update": "2023-11-01T00:00:00+00:00"
              },
              {
                "rank": 13,
                "team": {
                  "id": 111,
                  "name": "LE Havre",
                  "logo": "https:\/\/media-4.api-sports.io\/football\/teams\/111.png"
                },
                "points": 11,
                "goalsDiff": -2,
                "group": "Ligue 1",
                "form": "DDLLW",
                "status": "same",
                "description": null,
                "all": {
                  "played": 10,
                  "win": 2,
                  "draw": 5,
                  "lose": 3,
                  "goals": {
                    "for": 10,
                    "against": 12
                  }
                },
                "home": {
                  "played": 5,
                  "win": 2,
                  "draw": 1,
                  "lose": 2,
                  "goals": {
                    "for": 6,
                    "against": 5
                  }
                },
                "away": {
                  "played": 5,
                  "win": 0,
                  "draw": 4,
                  "lose": 1,
                  "goals": {
                    "for": 4,
                    "against": 7
                  }
                },
                "update": "2023-11-01T00:00:00+00:00"
              },
              {
                "rank": 14,
                "team": {
                  "id": 95,
                  "name": "Strasbourg",
                  "logo": "https:\/\/media-4.api-sports.io\/football\/teams\/95.png"
                },
                "points": 11,
                "goalsDiff": -6,
                "group": "Ligue 1",
                "form": "DLLLW",
                "status": "same",
                "description": null,
                "all": {
                  "played": 10,
                  "win": 3,
                  "draw": 2,
                  "lose": 5,
                  "goals": {
                    "for": 9,
                    "against": 15
                  }
                },
                "home": {
                  "played": 5,
                  "win": 2,
                  "draw": 1,
                  "lose": 2,
                  "goals": {
                    "for": 7,
                    "against": 6
                  }
                },
                "away": {
                  "played": 5,
                  "win": 1,
                  "draw": 1,
                  "lose": 3,
                  "goals": {
                    "for": 2,
                    "against": 9
                  }
                },
                "update": "2023-11-01T00:00:00+00:00"
              },
              {
                "rank": 15,
                "team": {
                  "id": 97,
                  "name": "Lorient",
                  "logo": "https:\/\/media-4.api-sports.io\/football\/teams\/97.png"
                },
                "points": 10,
                "goalsDiff": -5,
                "group": "Ligue 1",
                "form": "LWDLL",
                "status": "same",
                "description": null,
                "all": {
                  "played": 10,
                  "win": 2,
                  "draw": 4,
                  "lose": 4,
                  "goals": {
                    "for": 15,
                    "against": 20
                  }
                },
                "home": {
                  "played": 5,
                  "win": 2,
                  "draw": 2,
                  "lose": 1,
                  "goals": {
                    "for": 9,
                    "against": 8
                  }
                },
                "away": {
                  "played": 5,
                  "win": 0,
                  "draw": 2,
                  "lose": 3,
                  "goals": {
                    "for": 6,
                    "against": 12
                  }
                },
                "update": "2023-11-01T00:00:00+00:00"
              },
              {
                "rank": 16,
                "team": {
                  "id": 112,
                  "name": "Metz",
                  "logo": "https:\/\/media-4.api-sports.io\/football\/teams\/112.png"
                },
                "points": 9,
                "goalsDiff": -8,
                "group": "Ligue 1",
                "form": "DLLLL",
                "status": "same",
                "description": "Ligue 1 (Promotion - Play Offs: )",
                "all": {
                  "played": 10,
                  "win": 2,
                  "draw": 3,
                  "lose": 5,
                  "goals": {
                    "for": 8,
                    "against": 16
                  }
                },
                "home": {
                  "played": 5,
                  "win": 0,
                  "draw": 3,
                  "lose": 2,
                  "goals": {
                    "for": 4,
                    "against": 6
                  }
                },
                "away": {
                  "played": 5,
                  "win": 2,
                  "draw": 0,
                  "lose": 3,
                  "goals": {
                    "for": 4,
                    "against": 10
                  }
                },
                "update": "2023-11-01T00:00:00+00:00"
              },
              {
                "rank": 17,
                "team": {
                  "id": 99,
                  "name": "Clermont Foot",
                  "logo": "https:\/\/media-4.api-sports.io\/football\/teams\/99.png"
                },
                "points": 5,
                "goalsDiff": -7,
                "group": "Ligue 1",
                "form": "LWDLL",
                "status": "same",
                "description": "Relegation - Ligue 2",
                "all": {
                  "played": 9,
                  "win": 1,
                  "draw": 2,
                  "lose": 6,
                  "goals": {
                    "for": 7,
                    "against": 14
                  }
                },
                "home": {
                  "played": 5,
                  "win": 0,
                  "draw": 1,
                  "lose": 4,
                  "goals": {
                    "for": 2,
                    "against": 7
                  }
                },
                "away": {
                  "played": 4,
                  "win": 1,
                  "draw": 1,
                  "lose": 2,
                  "goals": {
                    "for": 5,
                    "against": 7
                  }
                },
                "update": "2023-11-01T00:00:00+00:00"
              },
              {
                "rank": 18,
                "team": {
                  "id": 80,
                  "name": "Lyon",
                  "logo": "https:\/\/media-4.api-sports.io\/football\/teams\/80.png"
                },
                "points": 3,
                "goalsDiff": -11,
                "group": "Ligue 1",
                "form": "LDLLD",
                "status": "same",
                "description": "Relegation - Ligue 2",
                "all": {
                  "played": 9,
                  "win": 0,
                  "draw": 3,
                  "lose": 6,
                  "goals": {
                    "for": 7,
                    "against": 18
                  }
                },
                "home": {
                  "played": 5,
                  "win": 0,
                  "draw": 2,
                  "lose": 3,
                  "goals": {
                    "for": 6,
                    "against": 13
                  }
                },
                "away": {
                  "played": 4,
                  "win": 0,
                  "draw": 1,
                  "lose": 3,
                  "goals": {
                    "for": 1,
                    "against": 5
                  }
                },
                "update": "2023-11-01T00:00:00+00:00"
              }
            ]
          ]
        }
      }
    ]
  };
  private responseItaly = {
    "get": "standings",
    "parameters": {
      "season": "2023",
      "league": "135"
    },
    "errors": [],
    "results": 1,
    "paging": {
      "current": 1,
      "total": 1
    },
    "response": [
      {
        "league": {
          "id": 135,
          "name": "Serie A",
          "country": "Italy",
          "logo": "https:\/\/media-4.api-sports.io\/football\/leagues\/135.png",
          "flag": "https:\/\/media-4.api-sports.io\/flags\/it.svg",
          "season": 2023,
          "standings": [
            [
              {
                "rank": 1,
                "team": {
                  "id": 505,
                  "name": "Inter",
                  "logo": "https:\/\/media-4.api-sports.io\/football\/teams\/505.png"
                },
                "points": 25,
                "goalsDiff": 20,
                "group": "Serie A",
                "form": "WWDWL",
                "status": "same",
                "description": "Promotion - Champions League (Group Stage: )",
                "all": {
                  "played": 10,
                  "win": 8,
                  "draw": 1,
                  "lose": 1,
                  "goals": {
                    "for": 25,
                    "against": 5
                  }
                },
                "home": {
                  "played": 6,
                  "win": 4,
                  "draw": 1,
                  "lose": 1,
                  "goals": {
                    "for": 15,
                    "against": 5
                  }
                },
                "away": {
                  "played": 4,
                  "win": 4,
                  "draw": 0,
                  "lose": 0,
                  "goals": {
                    "for": 10,
                    "against": 0
                  }
                },
                "update": "2023-11-01T00:00:00+00:00"
              },
              {
                "rank": 2,
                "team": {
                  "id": 496,
                  "name": "Juventus",
                  "logo": "https:\/\/media-4.api-sports.io\/football\/teams\/496.png"
                },
                "points": 23,
                "goalsDiff": 10,
                "group": "Serie A",
                "form": "WWWDW",
                "status": "same",
                "description": "Promotion - Champions League (Group Stage: )",
                "all": {
                  "played": 10,
                  "win": 7,
                  "draw": 2,
                  "lose": 1,
                  "goals": {
                    "for": 16,
                    "against": 6
                  }
                },
                "home": {
                  "played": 5,
                  "win": 4,
                  "draw": 1,
                  "lose": 0,
                  "goals": {
                    "for": 8,
                    "against": 2
                  }
                },
                "away": {
                  "played": 5,
                  "win": 3,
                  "draw": 1,
                  "lose": 1,
                  "goals": {
                    "for": 8,
                    "against": 4
                  }
                },
                "update": "2023-11-01T00:00:00+00:00"
              },
              {
                "rank": 3,
                "team": {
                  "id": 489,
                  "name": "AC Milan",
                  "logo": "https:\/\/media-4.api-sports.io\/football\/teams\/489.png"
                },
                "points": 22,
                "goalsDiff": 7,
                "group": "Serie A",
                "form": "DLWWW",
                "status": "same",
                "description": "Promotion - Champions League (Group Stage: )",
                "all": {
                  "played": 10,
                  "win": 7,
                  "draw": 1,
                  "lose": 2,
                  "goals": {
                    "for": 18,
                    "against": 11
                  }
                },
                "home": {
                  "played": 4,
                  "win": 3,
                  "draw": 0,
                  "lose": 1,
                  "goals": {
                    "for": 7,
                    "against": 2
                  }
                },
                "away": {
                  "played": 6,
                  "win": 4,
                  "draw": 1,
                  "lose": 1,
                  "goals": {
                    "for": 11,
                    "against": 9
                  }
                },
                "update": "2023-11-01T00:00:00+00:00"
              },
              {
                "rank": 4,
                "team": {
                  "id": 499,
                  "name": "Atalanta",
                  "logo": "https:\/\/media-4.api-sports.io\/football\/teams\/499.png"
                },
                "points": 19,
                "goalsDiff": 10,
                "group": "Serie A",
                "form": "WWLDW",
                "status": "same",
                "description": "Promotion - Champions League (Group Stage: )",
                "all": {
                  "played": 10,
                  "win": 6,
                  "draw": 1,
                  "lose": 3,
                  "goals": {
                    "for": 18,
                    "against": 8
                  }
                },
                "home": {
                  "played": 4,
                  "win": 3,
                  "draw": 1,
                  "lose": 0,
                  "goals": {
                    "for": 7,
                    "against": 0
                  }
                },
                "away": {
                  "played": 6,
                  "win": 3,
                  "draw": 0,
                  "lose": 3,
                  "goals": {
                    "for": 11,
                    "against": 8
                  }
                },
                "update": "2023-11-01T00:00:00+00:00"
              },
              {
                "rank": 5,
                "team": {
                  "id": 492,
                  "name": "Napoli",
                  "logo": "https:\/\/media-4.api-sports.io\/football\/teams\/492.png"
                },
                "points": 18,
                "goalsDiff": 10,
                "group": "Serie A",
                "form": "DWLWW",
                "status": "same",
                "description": "Promotion - Europa League (Group Stage: )",
                "all": {
                  "played": 10,
                  "win": 5,
                  "draw": 3,
                  "lose": 2,
                  "goals": {
                    "for": 22,
                    "against": 12
                  }
                },
                "home": {
                  "played": 5,
                  "win": 2,
                  "draw": 1,
                  "lose": 2,
                  "goals": {
                    "for": 10,
                    "against": 8
                  }
                },
                "away": {
                  "played": 5,
                  "win": 3,
                  "draw": 2,
                  "lose": 0,
                  "goals": {
                    "for": 12,
                    "against": 4
                  }
                },
                "update": "2023-11-01T00:00:00+00:00"
              },
              {
                "rank": 6,
                "team": {
                  "id": 502,
                  "name": "Fiorentina",
                  "logo": "https:\/\/media-4.api-sports.io\/football\/teams\/502.png"
                },
                "points": 17,
                "goalsDiff": 4,
                "group": "Serie A",
                "form": "LLWWD",
                "status": "same",
                "description": "Promotion - Europa Conference League (Qualification: )",
                "all": {
                  "played": 10,
                  "win": 5,
                  "draw": 2,
                  "lose": 3,
                  "goals": {
                    "for": 18,
                    "against": 14
                  }
                },
                "home": {
                  "played": 4,
                  "win": 2,
                  "draw": 1,
                  "lose": 1,
                  "goals": {
                    "for": 8,
                    "against": 6
                  }
                },
                "away": {
                  "played": 6,
                  "win": 3,
                  "draw": 1,
                  "lose": 2,
                  "goals": {
                    "for": 10,
                    "against": 8
                  }
                },
                "update": "2023-11-01T00:00:00+00:00"
              },
              {
                "rank": 7,
                "team": {
                  "id": 487,
                  "name": "Lazio",
                  "logo": "https:\/\/media-4.api-sports.io\/football\/teams\/487.png"
                },
                "points": 16,
                "goalsDiff": 1,
                "group": "Serie A",
                "form": "WWWLW",
                "status": "same",
                "description": null,
                "all": {
                  "played": 10,
                  "win": 5,
                  "draw": 1,
                  "lose": 4,
                  "goals": {
                    "for": 13,
                    "against": 12
                  }
                },
                "home": {
                  "played": 5,
                  "win": 3,
                  "draw": 1,
                  "lose": 1,
                  "goals": {
                    "for": 7,
                    "against": 4
                  }
                },
                "away": {
                  "played": 5,
                  "win": 2,
                  "draw": 0,
                  "lose": 3,
                  "goals": {
                    "for": 6,
                    "against": 8
                  }
                },
                "update": "2023-11-01T00:00:00+00:00"
              },
              {
                "rank": 8,
                "team": {
                  "id": 500,
                  "name": "Bologna",
                  "logo": "https:\/\/media-4.api-sports.io\/football\/teams\/500.png"
                },
                "points": 15,
                "goalsDiff": 3,
                "group": "Serie A",
                "form": "DWDWD",
                "status": "same",
                "description": null,
                "all": {
                  "played": 10,
                  "win": 3,
                  "draw": 6,
                  "lose": 1,
                  "goals": {
                    "for": 11,
                    "against": 8
                  }
                },
                "home": {
                  "played": 5,
                  "win": 3,
                  "draw": 1,
                  "lose": 1,
                  "goals": {
                    "for": 7,
                    "against": 4
                  }
                },
                "away": {
                  "played": 5,
                  "win": 0,
                  "draw": 5,
                  "lose": 0,
                  "goals": {
                    "for": 4,
                    "against": 4
                  }
                },
                "update": "2023-11-01T00:00:00+00:00"
              },
              {
                "rank": 9,
                "team": {
                  "id": 497,
                  "name": "AS Roma",
                  "logo": "https:\/\/media-4.api-sports.io\/football\/teams\/497.png"
                },
                "points": 14,
                "goalsDiff": 7,
                "group": "Serie A",
                "form": "LWWWL",
                "status": "same",
                "description": null,
                "all": {
                  "played": 10,
                  "win": 4,
                  "draw": 2,
                  "lose": 4,
                  "goals": {
                    "for": 20,
                    "against": 13
                  }
                },
                "home": {
                  "played": 5,
                  "win": 3,
                  "draw": 1,
                  "lose": 1,
                  "goals": {
                    "for": 13,
                    "against": 4
                  }
                },
                "away": {
                  "played": 5,
                  "win": 1,
                  "draw": 1,
                  "lose": 3,
                  "goals": {
                    "for": 7,
                    "against": 9
                  }
                },
                "update": "2023-11-01T00:00:00+00:00"
              },
              {
                "rank": 10,
                "team": {
                  "id": 1579,
                  "name": "Monza",
                  "logo": "https:\/\/media-4.api-sports.io\/football\/teams\/1579.png"
                },
                "points": 13,
                "goalsDiff": 0,
                "group": "Serie A",
                "form": "DLWWD",
                "status": "same",
                "description": null,
                "all": {
                  "played": 10,
                  "win": 3,
                  "draw": 4,
                  "lose": 3,
                  "goals": {
                    "for": 9,
                    "against": 9
                  }
                },
                "home": {
                  "played": 5,
                  "win": 2,
                  "draw": 3,
                  "lose": 0,
                  "goals": {
                    "for": 7,
                    "against": 2
                  }
                },
                "away": {
                  "played": 5,
                  "win": 1,
                  "draw": 1,
                  "lose": 3,
                  "goals": {
                    "for": 2,
                    "against": 7
                  }
                },
                "update": "2023-11-01T00:00:00+00:00"
              },
              {
                "rank": 11,
                "team": {
                  "id": 867,
                  "name": "Lecce",
                  "logo": "https:\/\/media-4.api-sports.io\/football\/teams\/867.png"
                },
                "points": 13,
                "goalsDiff": -2,
                "group": "Serie A",
                "form": "LDDLL",
                "status": "same",
                "description": null,
                "all": {
                  "played": 10,
                  "win": 3,
                  "draw": 4,
                  "lose": 3,
                  "goals": {
                    "for": 10,
                    "against": 12
                  }
                },
                "home": {
                  "played": 6,
                  "win": 3,
                  "draw": 1,
                  "lose": 2,
                  "goals": {
                    "for": 6,
                    "against": 7
                  }
                },
                "away": {
                  "played": 4,
                  "win": 0,
                  "draw": 3,
                  "lose": 1,
                  "goals": {
                    "for": 4,
                    "against": 5
                  }
                },
                "update": "2023-11-01T00:00:00+00:00"
              },
              {
                "rank": 12,
                "team": {
                  "id": 512,
                  "name": "Frosinone",
                  "logo": "https:\/\/media-4.api-sports.io\/football\/teams\/512.png"
                },
                "points": 12,
                "goalsDiff": -2,
                "group": "Serie A",
                "form": "LLWLD",
                "status": "same",
                "description": null,
                "all": {
                  "played": 10,
                  "win": 3,
                  "draw": 3,
                  "lose": 4,
                  "goals": {
                    "for": 15,
                    "against": 17
                  }
                },
                "home": {
                  "played": 5,
                  "win": 3,
                  "draw": 1,
                  "lose": 1,
                  "goals": {
                    "for": 10,
                    "against": 8
                  }
                },
                "away": {
                  "played": 5,
                  "win": 0,
                  "draw": 2,
                  "lose": 3,
                  "goals": {
                    "for": 5,
                    "against": 9
                  }
                },
                "update": "2023-11-01T00:00:00+00:00"
              },
              {
                "rank": 13,
                "team": {
                  "id": 503,
                  "name": "Torino",
                  "logo": "https:\/\/media-4.api-sports.io\/football\/teams\/503.png"
                },
                "points": 12,
                "goalsDiff": -5,
                "group": "Serie A",
                "form": "WLLDL",
                "status": "same",
                "description": null,
                "all": {
                  "played": 10,
                  "win": 3,
                  "draw": 3,
                  "lose": 4,
                  "goals": {
                    "for": 7,
                    "against": 12
                  }
                },
                "home": {
                  "played": 5,
                  "win": 1,
                  "draw": 3,
                  "lose": 1,
                  "goals": {
                    "for": 2,
                    "against": 4
                  }
                },
                "away": {
                  "played": 5,
                  "win": 2,
                  "draw": 0,
                  "lose": 3,
                  "goals": {
                    "for": 5,
                    "against": 8
                  }
                },
                "update": "2023-11-01T00:00:00+00:00"
              },
              {
                "rank": 14,
                "team": {
                  "id": 495,
                  "name": "Genoa",
                  "logo": "https:\/\/media-4.api-sports.io\/football\/teams\/495.png"
                },
                "points": 11,
                "goalsDiff": -3,
                "group": "Serie A",
                "form": "WLLDW",
                "status": "same",
                "description": null,
                "all": {
                  "played": 10,
                  "win": 3,
                  "draw": 2,
                  "lose": 5,
                  "goals": {
                    "for": 11,
                    "against": 14
                  }
                },
                "home": {
                  "played": 5,
                  "win": 2,
                  "draw": 1,
                  "lose": 2,
                  "goals": {
                    "for": 8,
                    "against": 8
                  }
                },
                "away": {
                  "played": 5,
                  "win": 1,
                  "draw": 1,
                  "lose": 3,
                  "goals": {
                    "for": 3,
                    "against": 6
                  }
                },
                "update": "2023-11-01T00:00:00+00:00"
              },
              {
                "rank": 15,
                "team": {
                  "id": 488,
                  "name": "Sassuolo",
                  "logo": "https:\/\/media-4.api-sports.io\/football\/teams\/488.png"
                },
                "points": 11,
                "goalsDiff": -4,
                "group": "Serie A",
                "form": "DLDLW",
                "status": "same",
                "description": null,
                "all": {
                  "played": 10,
                  "win": 3,
                  "draw": 2,
                  "lose": 5,
                  "goals": {
                    "for": 13,
                    "against": 17
                  }
                },
                "home": {
                  "played": 6,
                  "win": 2,
                  "draw": 1,
                  "lose": 3,
                  "goals": {
                    "for": 8,
                    "against": 9
                  }
                },
                "away": {
                  "played": 4,
                  "win": 1,
                  "draw": 1,
                  "lose": 2,
                  "goals": {
                    "for": 5,
                    "against": 8
                  }
                },
                "update": "2023-11-01T00:00:00+00:00"
              },
              {
                "rank": 16,
                "team": {
                  "id": 504,
                  "name": "Verona",
                  "logo": "https:\/\/media-4.api-sports.io\/football\/teams\/504.png"
                },
                "points": 8,
                "goalsDiff": -6,
                "group": "Serie A",
                "form": "LLLDL",
                "status": "same",
                "description": null,
                "all": {
                  "played": 10,
                  "win": 2,
                  "draw": 2,
                  "lose": 6,
                  "goals": {
                    "for": 6,
                    "against": 12
                  }
                },
                "home": {
                  "played": 4,
                  "win": 1,
                  "draw": 1,
                  "lose": 2,
                  "goals": {
                    "for": 3,
                    "against": 5
                  }
                },
                "away": {
                  "played": 6,
                  "win": 1,
                  "draw": 1,
                  "lose": 4,
                  "goals": {
                    "for": 3,
                    "against": 7
                  }
                },
                "update": "2023-11-01T00:00:00+00:00"
              },
              {
                "rank": 17,
                "team": {
                  "id": 494,
                  "name": "Udinese",
                  "logo": "https:\/\/media-4.api-sports.io\/football\/teams\/494.png"
                },
                "points": 7,
                "goalsDiff": -8,
                "group": "Serie A",
                "form": "DDDDL",
                "status": "same",
                "description": null,
                "all": {
                  "played": 10,
                  "win": 0,
                  "draw": 7,
                  "lose": 3,
                  "goals": {
                    "for": 6,
                    "against": 14
                  }
                },
                "home": {
                  "played": 5,
                  "win": 0,
                  "draw": 3,
                  "lose": 2,
                  "goals": {
                    "for": 3,
                    "against": 8
                  }
                },
                "away": {
                  "played": 5,
                  "win": 0,
                  "draw": 4,
                  "lose": 1,
                  "goals": {
                    "for": 3,
                    "against": 6
                  }
                },
                "update": "2023-11-01T00:00:00+00:00"
              },
              {
                "rank": 18,
                "team": {
                  "id": 511,
                  "name": "Empoli",
                  "logo": "https:\/\/media-4.api-sports.io\/football\/teams\/511.png"
                },
                "points": 7,
                "goalsDiff": -16,
                "group": "Serie A",
                "form": "LWDLW",
                "status": "same",
                "description": "Relegation - Serie B",
                "all": {
                  "played": 10,
                  "win": 2,
                  "draw": 1,
                  "lose": 7,
                  "goals": {
                    "for": 3,
                    "against": 19
                  }
                },
                "home": {
                  "played": 6,
                  "win": 1,
                  "draw": 1,
                  "lose": 4,
                  "goals": {
                    "for": 1,
                    "against": 7
                  }
                },
                "away": {
                  "played": 4,
                  "win": 1,
                  "draw": 0,
                  "lose": 3,
                  "goals": {
                    "for": 2,
                    "against": 12
                  }
                },
                "update": "2023-11-01T00:00:00+00:00"
              },
              {
                "rank": 19,
                "team": {
                  "id": 490,
                  "name": "Cagliari",
                  "logo": "https:\/\/media-4.api-sports.io\/football\/teams\/490.png"
                },
                "points": 6,
                "goalsDiff": -12,
                "group": "Serie A",
                "form": "WDLLL",
                "status": "same",
                "description": "Relegation - Serie B",
                "all": {
                  "played": 10,
                  "win": 1,
                  "draw": 3,
                  "lose": 6,
                  "goals": {
                    "for": 9,
                    "against": 21
                  }
                },
                "home": {
                  "played": 5,
                  "win": 1,
                  "draw": 1,
                  "lose": 3,
                  "goals": {
                    "for": 6,
                    "against": 12
                  }
                },
                "away": {
                  "played": 5,
                  "win": 0,
                  "draw": 2,
                  "lose": 3,
                  "goals": {
                    "for": 3,
                    "against": 9
                  }
                },
                "update": "2023-11-01T00:00:00+00:00"
              },
              {
                "rank": 20,
                "team": {
                  "id": 514,
                  "name": "Salernitana",
                  "logo": "https:\/\/media-4.api-sports.io\/football\/teams\/514.png"
                },
                "points": 4,
                "goalsDiff": -14,
                "group": "Serie A",
                "form": "LDLLL",
                "status": "same",
                "description": "Relegation - Serie B",
                "all": {
                  "played": 10,
                  "win": 0,
                  "draw": 4,
                  "lose": 6,
                  "goals": {
                    "for": 6,
                    "against": 20
                  }
                },
                "home": {
                  "played": 5,
                  "win": 0,
                  "draw": 3,
                  "lose": 2,
                  "goals": {
                    "for": 4,
                    "against": 11
                  }
                },
                "away": {
                  "played": 5,
                  "win": 0,
                  "draw": 1,
                  "lose": 4,
                  "goals": {
                    "for": 2,
                    "against": 9
                  }
                },
                "update": "2023-11-01T00:00:00+00:00"
              }
            ]
          ]
        }
      }
    ]
  };*/


  subscription: Subscription;
  private apiUrl: string = "https://v3.football.api-sports.io/standings";
  private headers = new HttpHeaders({
    'x-rapidapi-key': Environment.apiKey
  });
  private currentSeason: number = new Date().getFullYear();
  private listStandings: Standings[] = [];


  constructor(private http: HttpClient) { }

  getStandings(league: number): Observable<Standings[]> {
    return this.http.get<Standings[]>(this.apiUrl + '?league=' + league + '&season=' + this.currentSeason, { headers: this.headers })
      .pipe(
        map((data) => {
          return data["response"][0].league.standings[0];
        })
      );
  }
  getAllStandings(league: number): void {
    this.listStandings = [];
    this.subscription = this.getStandings(league).subscribe((standings) => {
      standings.map(standing => {
        this.listStandings.push(standing);

      })
      this.saveData(league);
    });
  }
  saveData(league: number): void {
    if (this.listStandings) {
      localStorage.setItem(country[league], JSON.stringify(this.listStandings));
    }
  }

  getStandingsLocally(league: number): Standings[] {
    if (localStorage.getItem(country[league])) {
      return JSON.parse(localStorage.getItem(country[league]));
    } else {
      this.getAllStandings(league);
      return this.listStandings;
    }
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
