import { EMPLOYEES } from './../employees-mock';
import { TestBed } from '@angular/core/testing';

import { EmployeesService } from './employees.service';

describe('EmployeesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EmployeesService = TestBed.get(EmployeesService);
    expect(service).toBeTruthy();
  });

  it('#getEmployees should return employee list from observable', (done: DoneFn) => {
    const service: EmployeesService = TestBed.get(EmployeesService);
    service.getEmployees().subscribe(data => {
      expect(data.length).toEqual(12);
      expect(data[0].firstName).toEqual(EMPLOYEES[0].firstName);
      done();
    });
  });

  it('#findById should return one employee from observable', (done: DoneFn) => {
    const service: EmployeesService = TestBed.get(EmployeesService);
    service.findById(2).subscribe(data => {
      expect(data.firstName).toEqual(EMPLOYEES[1].firstName);
      done();
    });
  });

  it('#findByManager should return a list employee from observable', (done: DoneFn) => {
    const expected = EMPLOYEES.filter(e => e.managerId === 1);
    const service: EmployeesService = TestBed.get(EmployeesService);
    service.findByManager(1).subscribe(data => {
      expect(data.length).toEqual(expected.length);
      expect(data[0].firstName).toEqual(expected[0].firstName);
      done();
    });
  });
});
