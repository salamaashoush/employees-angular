import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { EmployeeResolver } from './services/employee-resolver.service';
import { EmployeesResolver } from './services/employees-resolver.service';
import { ReportsResolver } from './services/reports-resolver.service';
import { EmployeesService } from './services/employees.service';

import { EmployeeDetailsComponent } from './views/employee-details/employee-details.component';
import { EmployeeReportsComponent } from './views/employee-reports/employee-reports.component';
import { EmployeesListComponent } from './components/employees-list/employees-list.component';
import { EmployeeLayoutComponent } from './layouts/employee-layout/employee-layout.component';
import { EmployeesHomeComponent } from './views/employees-home/employees-home.component';

import { EmployeesRoutingModule } from './employees-routing.module';

@NgModule({
  declarations: [
    EmployeesListComponent,
    EmployeeDetailsComponent,
    EmployeeReportsComponent,
    EmployeeLayoutComponent,
    EmployeesHomeComponent
  ],
  providers: [
    EmployeeResolver,
    ReportsResolver,
    EmployeesResolver,
    EmployeesService
  ],
  imports: [
    CommonModule,
    FormsModule,
    BrowserAnimationsModule,
    EmployeesRoutingModule
  ],
  entryComponents: [EmployeesHomeComponent]
})
export class EmployeesModule {}
