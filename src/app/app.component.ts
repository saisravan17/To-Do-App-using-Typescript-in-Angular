import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  Project = 'To Do App';

  tasklist: any[] = [];
  addTask(item: string) {
    this.tasklist.push({ id: this.tasklist.length, name: item });
    console.warn(this.tasklist);
  }

  removeTask(id: number) {
    console.warn(id);
    this.tasklist = this.tasklist.filter((item) => item.id !== id);
  }
}
