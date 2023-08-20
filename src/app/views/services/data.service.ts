import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getAllStudents() {

    return this.http.get('https://jsonplaceholder.typicode.com/users')
  }

  addStudents(
    // id: string,name: string,username: string,email: string,address: string
    profile: any
    ) {

    return this.http.post('http://localhost:4200/admin/students', profile)

  }

  deleteStudent(id: any) {
    return this.http.delete('https://jsonplaceholder.typicode.com/users' + id)
  }

  updateStudent(id: any, newProfile: any){
    return this.http.patch('https://jsonplaceholder.typicode.com/users' + id, newProfile)
  }

  getOneStudent(num: any){
    // return this.http.get(`https://jsonplaceholder.typicode.com/posts/${num}`)
    return this.http.get(`https://jsonplaceholder.typicode.com/users/${num}`)
    // return this.http.get(`https://jsonplaceholder.typicode.com/users/` + num)
  }

}
