import { Injectable, signal } from '@angular/core';
import { Task } from '../models/task.model';

@Injectable({
  providedIn: 'root',
})
export class TaskService {

  tasks = signal<Task[]>([]);

  constructor() {
    this.loadFromLocalStorage();
  }

  loadFromLocalStorage() {
    const stored = localStorage.getItem('tasks');
    if (stored) {
      this.tasks.set(JSON.parse(stored));
    }

  }

  createTask(task: Task) {
    task.id = new Date().getTime();
    this.tasks.update(oldValues => [task, ...oldValues]);
    this.saveToLocalStorage();
  }

  private saveToLocalStorage() {
    localStorage.setItem('tasks', JSON.stringify(this.tasks()));
  }


  deleteTask(id: number) {
    this.tasks.update(tasks => tasks.filter(t => t.id !== id));
    this.saveToLocalStorage();
  }
}
