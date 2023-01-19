import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MaterialUiModule} from "../material-ui/material-ui.module";
import { UserRoutingModule } from './user-routing.module';
import { AddEditUserComponent } from './add-edit-user/add-edit-user.component';
import {FormGroup,FormBuilder,ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AddEditUserComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    MaterialUiModule,
    ReactiveFormsModule
  ]
})
export class UserModule { }
