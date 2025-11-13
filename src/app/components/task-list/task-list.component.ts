import { Component, computed } from '@angular/core';
import { TaskService } from '../../services/task.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-task-list',
  imports: [CommonModule],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css',
})
export class TaskListComponent {

  constructor(private taskService : TaskService){

  }

  tasks = computed(() => this.taskService.tasks());

  onDelete(id : number){
    this.taskService.deleteTask(id);
  }

}
