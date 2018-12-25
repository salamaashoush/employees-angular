import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeLayoutComponent } from './employee-layout.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('EmployeeLayoutComponent', () => {
  let component: EmployeeLayoutComponent;
  let fixture: ComponentFixture<EmployeeLayoutComponent>;
  const expectedTitle = 'SalamaPage';
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        CommonModule,
        FormsModule,
        BrowserAnimationsModule,
        RouterTestingModule
      ],
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [EmployeeLayoutComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    EmployeeLayoutComponent.prototype.ngOnInit = () => {};
    fixture = TestBed.createComponent(EmployeeLayoutComponent);
    component = fixture.componentInstance;
    component.title = expectedTitle;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should show the correct title', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(
      compiled.querySelector('[data-test=title]').textContent.trim()
    ).toEqual(expectedTitle);
  });
});
