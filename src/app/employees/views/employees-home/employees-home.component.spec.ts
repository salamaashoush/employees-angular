import { EmployeesListComponent } from './../../components/employees-list/employees-list.component';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeesHomeComponent } from './employees-home.component';
import { EmployeeResolver } from '../../services/employee-resolver.service';
import { EmployeesService } from '../../services/employees.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { EMPLOYEES } from '../../employees-mock';

describe('EmployeesHomeComponent', () => {
  let component: EmployeesHomeComponent;
  let fixture: ComponentFixture<EmployeesHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [EmployeesHomeComponent, EmployeesListComponent],
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
    EmployeesHomeComponent.prototype.ngOnInit = () => {};

    fixture = TestBed.createComponent(EmployeesHomeComponent);
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
    expect(component.getEmployees().length).toEqual(12);
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
  it('should render employess list based on search query', () => {
    const compiled = fixture.debugElement.nativeElement;
    component.query = 'cha';
    fixture.detectChanges();

    const expectedEmployee = {
      id: 1,
      firstName: 'Charles Montgomery',
      lastName: 'Burns',
      managerId: 0,
      managerName: '',
      reports: 4,
      title: 'President and CEO',
      department: 'Engineering',
      cellPhone: '+31 000 000 001',
      officePhone: '+31 600 000 001',
      email: 'burns@the-simpsons.com',
      city: 'Springfield',
      picture: 'mr_burns.png',
      twitterId: '@burns',
      blog: 'http://www.brightcomputing.com'
    };
    const expectedEmployees = [expectedEmployee];
    expect(component.getEmployees().length).toEqual(1);
    expect(compiled.querySelectorAll('[data-test=employees]').length).toEqual(
      1
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
