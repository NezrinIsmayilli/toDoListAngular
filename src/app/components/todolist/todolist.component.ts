import { Component, OnInit } from '@angular/core';
import { Todos } from 'src/app/models/todolist.model';
import { TodoService } from 'src/app/services/todo.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.scss'],
})
export class ToDoListComponent implements OnInit {
  todos: Todos[] = [];
  todoText: string = '';


  constructor(
    private todosService: TodoService,
    private toastr: ToastrService
  ) {}


  ngOnInit(): void {
    this.getLists();
  }

  getLists() {
    this.todosService.getLists().subscribe((response) => {
      this.todos = response;
    });
  }

  addList(todoText: string) {
    this.todosService
      .addList({ description: todoText})
      .subscribe((response) => {
         //id hardan gelir
        console.log(response)
        this.todos.push(response);
      });
    this.todoText = '';
    this.toastr.success('New todo added!');
  }

  deleteList(id?: number) {
    this.todosService.deleteList(id).subscribe();
    this.todos = this.todos.filter((t) => t.id !== id);
    this.toastr.info('Todo deleted!');
  }

  deleteAll() {
    this.todos.map((todo) => this.todosService.deleteList(todo.id).subscribe());
    this.todos = [];
  }
}
