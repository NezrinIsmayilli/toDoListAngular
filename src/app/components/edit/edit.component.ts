import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Todos } from 'src/app/models/todolist.model';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss'],
})
export class EditComponent implements OnInit {
  constructor(
    private todosService: TodoService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  formdata: Todos = {
    id: 0,
    description: ''
  };

  ngOnInit(): void {
    this.route.paramMap.subscribe((param) => {
      let id = Number(param.get('id'));
      this.getById(id);
    });
  }

  getById(id: number) {
    this.todosService.getById(id).subscribe((data) => {
      this.formdata = data;
    });
  }

  updateList() {
    this.todosService.updateList(this.formdata).subscribe();
    this.router.navigate(['todo']);
  }
}
