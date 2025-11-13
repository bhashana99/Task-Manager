import { Injectable, signal } from '@angular/core';
import { Task } from '../models/task.model';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  
  tasks = signal<Task[]> ([]);

  createTask(task : Task){
    task.id = new Date().getTime();
    this.tasks.update(oldValues => [...oldValues,task]);
    this.saveToLocalStorage();
  }

  private saveToLocalStorage(){
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }
}
