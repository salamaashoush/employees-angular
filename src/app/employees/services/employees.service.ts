import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Employee } from '../models/employee';
import { EMPLOYEES } from '../employees-mock';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {
  constructor() {}
  getEmployees(): Observable<Employee[]> {
    return of(EMPLOYEES);
  }
  findById(id: number): Observable<Employee> {
    return of(EMPLOYEES).pipe(
      map(employees => employees.find(element => element.id === id))
    );
  }

  findByManager(managerId: number): Observable<Employee[]> {
    return of(EMPLOYEES).pipe(
      map(employees =>
        employees.filter(element => element.managerId === managerId)
      )
    );
  }
}
