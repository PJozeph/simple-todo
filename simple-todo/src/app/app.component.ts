import { Component, OnInit } from '@angular/core';
import { TodoService } from './services/todo.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
    constructor(private todoService: TodoService) {}

    title = 'simple-todo';

    ngOnInit(): void {
    }
}
