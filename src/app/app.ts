import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TaskFormComponent } from "./components/task-form/task-form.component";
import { TaskListComponent } from "./components/task-list/task-list.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TaskFormComponent, TaskListComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('task-manager');
}
