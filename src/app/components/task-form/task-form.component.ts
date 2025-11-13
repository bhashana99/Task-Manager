import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-task-form',
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './task-form.component.html',
  styleUrl: './task-form.component.css',
})
export class TaskFormComponent {

  taskForm : FormGroup;

 constructor(private fb: FormBuilder) {
    this.taskForm = this.fb.group({
      title: [''],
      description: ['']  
    });
  }


  onSubmit(){
    if (this.taskForm.valid) {
    console.log(this.taskForm.value);
    }
  }
}
