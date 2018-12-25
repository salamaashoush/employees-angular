import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeesListComponent } from './employees-list.component';
import { EMPLOYEES } from '../../employees-mock';

describe('EmployeesListComponent', () => {
  let component: EmployeesListComponent;
  let fixture: ComponentFixture<EmployeesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [EmployeesListComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeesListComponent);
    component = fixture.componentInstance;
    component.employees = EMPLOYEES;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should render employess list', () => {
    const compiled = fixture.debugElement.nativeElement;
    const expectedEmployee = EMPLOYEES[0];
    expect(component.employees.length).toEqual(12);
    expect(compiled.querySelectorAll('[data-test=employees]').length).toEqual(
      12
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
