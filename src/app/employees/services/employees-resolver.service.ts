import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot
} from '@angular/router';
import { Employee } from '../models/employee';
import { EmployeesService } from './employees.service';

@Injectable()
export class EmployeesResolver implements Resolve<Employee[]> {
  constructor(private employeesService: EmployeesService) {}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.employeesService.getEmployees();
  }
}
