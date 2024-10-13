import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-employee',
  templateUrl: './list-employee.component.html',
  styleUrls: ['./list-employee.component.css']
})
export class ListEmployeeComponent  {


  employees: Employee[] = [];

  constructor(private employeeService: EmployeeService,private router:Router) {}

  ngOnInit() {
    this.getEmployee();
  }

  private getEmployee() {
    this.employeeService.getEmployee().subscribe(data => {
      this.employees = data; 
    
    });
  }



  updateEmployee(id: number) {
      this.router.navigate(['update-employee',id])
  } 

  deleteEmployee(id: number) {
    this.employeeService.deleteEmployee(id).subscribe(data=>{
      console.log(data);
      this.getEmployee();
    })
    }


    viewEmployee(id: number) {
      
      this.router.navigate(['employee-details',id]);
      }
}
