import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';
import { ObjectId } from 'bson';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h1>ObjectId: {{name}}</h1>
  `,
})
export class App {
  name = new ObjectId();
}

bootstrapApplication(App);
