import { Component, OnInit, Input, Output } from '@angular/core';
import { Employee } from '../../models/employee';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.scss']
})
export class EmployeesListComponent implements OnInit {
  @Input() employees: Employee[];
  @Output() details = new EventEmitter();
  constructor() {}

  ngOnInit() {}
}
