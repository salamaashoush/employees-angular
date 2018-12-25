import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Employee } from '../../models/employee';
import { slideInAnimation } from 'src/app/animations';

@Component({
  selector: 'app-employee-reports',
  templateUrl: './employee-reports.component.html',
  styleUrls: ['./employee-reports.component.scss'],
  animations: [slideInAnimation]
})
export class EmployeeReportsComponent implements OnInit {
  reports: Employee[];
  constructor(private activeRoute: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.activeRoute.data.subscribe(data => {
      this.reports = data['reports'];
    });
  }
  navigateToEmployee({ employeeId }) {
    this.router.navigate(['employees/', employeeId]);
  }
}
