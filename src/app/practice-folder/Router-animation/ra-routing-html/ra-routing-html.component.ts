import { Component, OnInit } from '@angular/core';
import { transition,trigger,keyframes,query,style,animate,group } from '@angular/animations';

@Component({
  selector: 'app-ra-routing-html',
  templateUrl: './ra-routing-html.component.html',
  styleUrls: ['./ra-routing-html.component.css'],
  animations:[
    trigger("routeAnimations", [
      transition("Contact => *", [
        query(":enter, :leave", style({ position: "fixed", width: "100%" }), {
          optional: true
        }),
        group([
          query(
            ":enter",
            [
              style({ transform: "translateX(-100%)" }),
              animate("0.5s ease-in-out", style({ transform: "translateX(0%)" }))
            ],
            { optional: true }
          ),
          query(
            ":leave",
            [
              style({ transform: "translateX(0%)" }),
              animate("0.5s ease-in-out", style({ transform: "translateX(100%)" }))
            ],
            { optional: true }
          )
        ])
      ]),
      transition("Home => *", [
        query(":enter, :leave", style({ position: "fixed", width: "100%" }), {
          optional: true
        }),
        group([
          query(
            ":enter",
            [
              style({ transform: "translateX(100%)" }),
              animate("0.5s ease-in-out", style({ transform: "translateX(0%)" }))
            ],
            { optional: true }
          ),
          query(
            ":leave",
            [
              style({ transform: "translateX(0%)" }),
              animate("0.5s ease-in-out", style({ transform: "translateX(-100%)" }))
            ],
            { optional: true }
          )
        ])
      ]),
      transition("About => Contact", [
        query(":enter, :leave", style({ position: "fixed", width: "100%" }), {
          optional: true
        }),
        group([
          query(
            ":enter",
            [
              style({ transform: "translateX(100%)" }),
              animate("0.5s ease-in-out", style({ transform: "translateX(0%)" }))
            ],
            { optional: true }
          ),
          query(
            ":leave",
            [
              style({ transform: "translateX(0%)" }),
              animate("0.5s ease-in-out", style({ transform: "translateX(-100%)" }))
            ],
            { optional: true }
          )
        ])
      ]),
      transition("About => Home", [
        query(":enter, :leave", style({ position: "fixed", width: "100%" }), {
          optional: true
        }),
        group([
          query(
            ":enter",
            [
              style({ transform: "translateX(-100%)" }),
              animate("0.5s ease-in-out", style({ transform: "translateX(0%)" }))
            ],
            { optional: true }
          ),
          query(
            ":leave",
            [
              style({ transform: "translateX(0%)" }),
              animate("0.5s ease-in-out", style({ transform: "translateX(100%)" }))
            ],
            { optional: true }
          )
        ])
      ])
    ])
  ]
})
export class RaRoutingHtmlComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
