import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { TaskService } from '../../services/task.service';


@Component({
  selector: 'app-task-form',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './task-form.component.html',
  styleUrl: './task-form.component.css',
})
export class TaskFormComponent {

  taskForm: FormGroup;

  constructor(private fb: FormBuilder, private taskService : TaskService) {
    this.taskForm = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(3)]],
      description: ['', [Validators.required, Validators.minLength(5)]]
    });
  }

  get title() {
    return this.taskForm.get('title');
  }

  get description() {
    return this.taskForm.get('description');
  }


  onSubmit() {
    if (this.taskForm.valid) {
      console.log(this.taskForm.value);

      const task = this.taskForm.value;
      this.taskService.createTask(task);
      this.taskForm.reset();
    }
  }
}
