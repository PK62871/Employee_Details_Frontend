import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private retriveUrl = 'http://localhost:8080/employees';
  private insertUrl = 'http://localhost:8080/addEmployee'; 
  private getSingleEmployeeUrl = 'http://localhost:8080/getEmployee';
  private updateSingleEmployeeUrl = 'http://localhost:8080/update';
  private dleteEmployeeurl = 'http://localhost:8080/delete';


  constructor(private httpClient: HttpClient) {}

  getEmployee(): Observable<Employee[]> {
    return this.httpClient.get<Employee[]>(this.retriveUrl);
  }

  createEmployee(employee: Employee): Observable<Object> {
    return this.httpClient.post(this.insertUrl, employee);
  }

  getEmployeeById(id: number): Observable<Employee> {
    return this.httpClient.get<Employee>(`${this.getSingleEmployeeUrl}/${id}`);
  }

  updateEmployee(id: number, employee: Employee): Observable<Employee> { 
    return this.httpClient.put<Employee>(`${this.updateSingleEmployeeUrl}/${id}`, employee);
  }


  deleteEmployee(id:number): Observable<object>{
    return this.httpClient.delete<Employee>(`${this.dleteEmployeeurl}/${id}`);
  }
}
