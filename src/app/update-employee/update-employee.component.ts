import { Component } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../employee';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent {


          onSubmit() {
      this.employeeService.updateEmployee(this.id,this.employee).subscribe(data=>{
        this.employee=data;
        this.goToEmployee();
      })
          }

  id:number=0;
  employee:Employee=new Employee();
  
constructor(private employeeService: EmployeeService,private route:ActivatedRoute,private router:Router){

}

ngOnInit(){
 this.id= this.route.snapshot.params['id'];
 this.employeeService.getEmployeeById(this.id).subscribe(data=>{
  this.employee = data;
 })

}

goToEmployee(){
  this.router.navigate(['/employees']);
}
}