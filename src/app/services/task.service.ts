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
    task.createdAt = new Date();
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

  updateTask(updatedTask: Task) {
    this.tasks.update(tasks =>
      tasks.map(task =>
        task.id === updatedTask.id ? updatedTask : task
      )
    );

    this.saveToLocalStorage();
  }

}
