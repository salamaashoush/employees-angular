import { ActivatedRoute, RouterOutlet } from '@angular/router';
import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { slideInAnimation } from 'src/app/animations';

@Component({
  selector: 'app-employee-layout',
  templateUrl: './employee-layout.component.html',
  styleUrls: ['./employee-layout.component.scss'],
  animations: [slideInAnimation]
})
export class EmployeeLayoutComponent implements OnInit {
  title: string;
  constructor(
    private location: Location,
    private activeRoute: ActivatedRoute
  ) {}
  prepareRoute(outlet: RouterOutlet) {
    return (
      outlet &&
      outlet.activatedRouteData &&
      outlet.activatedRouteData['animation']
    );
  }
  ngOnInit() {
    this.activeRoute.firstChild.data.subscribe(data => {
      this.title = data['title'];
    });
  }
  back() {
    this.location.back();
  }
}
