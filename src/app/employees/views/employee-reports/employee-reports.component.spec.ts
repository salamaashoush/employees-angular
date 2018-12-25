import { EmployeesListComponent } from './../../components/employees-list/employees-list.component';
import { EMPLOYEES } from './../../employees-mock';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeReportsComponent } from './employee-reports.component';
import { EmployeeResolver } from '../../services/employee-resolver.service';
import { EmployeesService } from '../../services/employees.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { empty } from 'rxjs';

describe('EmployeeReportsComponent', () => {
  let component: EmployeeReportsComponent;
  let fixture: ComponentFixture<EmployeeReportsComponent>;
  const expected = EMPLOYEES.filter(em => em.managerId === 1);
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [EmployeeReportsComponent, EmployeesListComponent],
      providers: [EmployeeResolver, EmployeesService],
      imports: [
        CommonModule,
        FormsModule,
        BrowserAnimationsModule,
        RouterTestingModule
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    EmployeeReportsComponent.prototype.ngOnInit = () => {};
    fixture = TestBed.createComponent(EmployeeReportsComponent);
    component = fixture.componentInstance;
    component.reports = expected;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should show all employee reports', () => {
    const compiled = fixture.debugElement.nativeElement;
    const expectedEmployee = expected[0];

    expect(compiled.querySelectorAll('[data-test=employees]').length).toEqual(
      expected.length
    );
    expect(
      compiled
        .querySelector(`[data-test=employee-title-${expectedEmployee.id}]`)
        .textContent.trim()
    ).toEqual(expectedEmployee.title);
    expect(
      compiled
        .querySelector(`[data-test=employee-name-${expectedEmployee.id}]`)
        .textContent.trim()
    ).toEqual(`${expectedEmployee.firstName} ${expectedEmployee.lastName}`);
  });
});
