import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Employee } from '../../models/employee';
import { slideInAnimation } from 'src/app/animations';
@Component({
  selector: 'app-employees-home',
  templateUrl: './employees-home.component.html',
  styleUrls: ['./employees-home.component.scss']
})
export class EmployeesHomeComponent implements OnInit {
  employees: Employee[];
  query = '';
  constructor(private router: Router, private activeRoute: ActivatedRoute) {}

  ngOnInit() {
    this.activeRoute.data.subscribe(data => {
      this.employees = data['employees'];
    });
  }
  navigateToEmployee({ employeeId }) {
    this.router.navigate(['/employees', employeeId]);
  }
  getEmployees(): Employee[] {
    return this.employees.filter(
      emp =>
        `${emp.firstName} ${emp.lastName} ${emp.title} ${emp.department} ${
          emp.city
        } ${emp.email}`
          .toLowerCase()
          .indexOf(this.query.toLowerCase()) !== -1
    );
  }
}
