import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup,FormControl,ReactiveFormsModule} from "@angular/forms";

@Component({
  selector: 'app-add-edit-user',
  templateUrl: './add-edit-user.component.html',
  styleUrls: ['./add-edit-user.component.scss']
})
export class AddEditUserComponent implements OnInit {
  userForm: FormGroup;
  constructor(private fb:FormBuilder) {
    this.userForm = this.fb.group({
      firstName:[''],
      lastName:[''],
      gender:[''],
      dateOfBirth:[''],
      dateOfJoining:[''],
      designation:[''],
      department:[''],
      email:[''],
      mobile:[''],
      password:[''],
    });
  }
  options: string[] = ['HR','Admin','Project Manager','Team Leader', 'Senior', 'junior','trainee'];
  ngOnInit(): void {
  }

}
