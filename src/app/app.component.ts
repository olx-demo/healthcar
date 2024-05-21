import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})



export class AppComponent {
  title = 'helthcare';

display=true;
toggle()
{
this.display=false

}

  displayedColumns: string[] = ['position', 'idsss', 'name', 'gender', 'weight', 'doctor', 'status','contact','action'];
  dataSource = ELEMENT_DATA;
 
 
}



export interface PeriodicElement {
  position: number;
  idsss: string;
  name: string;
  gender:string;
  weight: string;
  doctor: string;
  status: string;
  contact: string;
  action: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, idsss: '12534', name: 'Sankar', gender: 'Male', weight: '10.10.2024',doctor: 'Dr.Naveen',status: 'New', contact: 'New', action: ''},
  {position: 2, idsss: '12534', name: 'Krishnan', gender: 'Male', weight: '10.10.2024',doctor: 'Dr.Naveen',status: 'New', contact: 'Approved', action: ''},
  {position: 3, idsss: '12534', name: 'Sankar', gender: 'Male', weight: '10.10.2024',doctor: 'Dr.Naveen',status: 'New', contact: 'In Review', action: ''},
  {position: 4, idsss: '12534', name: 'Viswa', gender: 'Male', weight: '10.10.2024',doctor: 'Dr.Naveen',status: 'New', contact: 'Updated', action: ''},
  {position: 5, idsss: '12534', name: 'Sankar', gender: 'Male', weight: '10.10.2024',doctor: 'Dr.Naveen',status: 'New', contact: 'New', action: ''},
  {position: 6, idsss: '12534', name: 'Sankar', gender: 'Male', weight: '10.10.2024',doctor: 'Dr.Naveen',status: 'New', contact: 'New', action: ''},
  {position: 7, idsss: '12534', name: 'Sankar', gender: 'Male', weight: '10.10.2024',doctor: 'Dr.Naveen',status: 'New', contact: 'New', action: ''},
  {position: 8, idsss: '12534', name: 'Sankar', gender: 'Male', weight: '10.10.2024',doctor: 'Dr.Naveen',status: 'New', contact: 'New', action: ''},
  {position: 9, idsss: '12534', name: 'Sankar', gender: 'Male', weight: '10.10.2024',doctor: 'Dr.Naveen',status: 'New', contact: 'New', action: ''},
  {position: 10, idsss: '12534', name: 'Sankar', gender: 'Male', weight: '10.10.2024',doctor: 'Dr.Naveen',status: 'New', contact: 'New', action: ''},

];






