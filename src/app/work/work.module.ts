import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WorkRoutingModule } from './work-routing.module';
import { WorkComponent } from './work/work.component';


@NgModule({
  declarations: [
    WorkComponent
  ],
  imports: [
    CommonModule,
    WorkRoutingModule
  ],
  exports:[
    WorkComponent,
  ]
})
export class WorkModule { }
