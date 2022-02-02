import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-members",
  template: `
    <app-layout></app-layout>
    <router-outlet></router-outlet>
  `,
})
export class MembersComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
