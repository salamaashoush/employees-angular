import { RouterTestingModule } from '@angular/router/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { EmployeeResolver } from './../../services/employee-resolver.service';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { EmployeeDetailsComponent } from './employee-details.component';
import { EmployeesService } from '../../services/employees.service';
import { EMPLOYEES } from '../../employees-mock';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('EmployeeDetailsComponent', () => {
  let component: EmployeeDetailsComponent;
  let fixture: ComponentFixture<EmployeeDetailsComponent>;
  const expected = EMPLOYEES[0];
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [EmployeeDetailsComponent],
      imports: [
        CommonModule,
        FormsModule,
        BrowserAnimationsModule,
        RouterTestingModule
      ],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    EmployeeDetailsComponent.prototype.ngOnInit = () => {};
    fixture = TestBed.createComponent(EmployeeDetailsComponent);

    component = fixture.componentInstance;
    component.employee = expected;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show employee data', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(
      compiled.querySelector('[data-test=employee-title]').textContent.trim()
    ).toEqual(expected.title);
    expect(
      compiled.querySelector('[data-test=employee-name]').textContent.trim()
    ).toEqual(`${expected.firstName} ${expected.lastName}`);
  });
});
