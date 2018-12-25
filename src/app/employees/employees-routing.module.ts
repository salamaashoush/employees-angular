import { transition } from '@angular/animations';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeDetailsComponent } from './views/employee-details/employee-details.component';
import { EmployeeReportsComponent } from './views/employee-reports/employee-reports.component';
import { EmployeeLayoutComponent } from './layouts/employee-layout/employee-layout.component';
import { EmployeesHomeComponent } from './views/employees-home/employees-home.component';
import { ReportsResolver } from './services/reports-resolver.service';
import { EmployeeResolver } from './services/employee-resolver.service';
import { EmployeesResolver } from './services/employees-resolver.service';

export const routes: Routes = [
  {
    path: 'employees',
    component: EmployeesHomeComponent,
    resolve: {
      employees: EmployeesResolver
    },
    data: {
      animation: 'HomePage'
    }
  },
  {
    path: 'employees/:employeeId',
    component: EmployeeLayoutComponent,
    resolve: {
      employee: EmployeeResolver
    },
    data: {
      animation: 'EmployeeLayout'
    },
    children: [
      {
        path: '',
        component: EmployeeDetailsComponent,
        data: {
          title: 'Employee',
          animation: 'EmployeePage'
        }
      },
      {
        path: 'reports',
        component: EmployeeReportsComponent,
        data: {
          title: 'Direct Reports',
          animation: 'ReportsPage'
        },
        resolve: {
          reports: ReportsResolver
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeesRoutingModule {}
