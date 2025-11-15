import { Component, computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TaskService } from '../../services/task.service';
import { Task } from '../../models/task.model';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css'],
})
export class TaskListComponent {
  constructor(private taskService: TaskService, private fb: FormBuilder) {
    
    this.editForm = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(3)]],
      description: ['', [Validators.required, Validators.minLength(5)]],
    });
  }

  tasks = computed(() => this.taskService.tasks());

  selectedTask = signal<Task | null>(null); 
  editForm: FormGroup;

  
  onEdit(task: Task) {
    this.selectedTask.set(task);
    this.editForm.setValue({
      title: task.title,
      description: task.description,
    });
  }

  onSave() {
    const task = this.selectedTask();
    if (!task) return; 

    if (this.editForm.valid) {
      const updatedTask: Task = {
       ...task,
        title: this.editForm.value.title,
        description: this.editForm.value.description,
      };

      this.taskService.updateTask(updatedTask);
      this.selectedTask.set(null); 
    }
  }

  
  onCancel() {
    this.selectedTask.set(null);
  }

  
  onDelete(id: number) {
    if (confirm('Are you sure you want to delete this task?')) {
      this.taskService.deleteTask(id);
    }
  }
}
