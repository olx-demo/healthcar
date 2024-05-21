import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PatientListComponent } from './patient-list/patient-list.component';
import { PatientViewComponent } from './patient-view/patient-view.component';
import { PatientEditComponent } from './patient-edit/patient-edit.component';

const routes: Routes = [

      {
        component:PatientViewComponent,
        path:'view'
        
          },
          {
            component:PatientEditComponent,
            path:'edit'
            
              },

          {
            component:PatientListComponent,
            path:''
            
              },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
