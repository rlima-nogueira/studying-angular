import { Injectable, signal } from '@angular/core';
import { Todo } from '../model/todo.entity';

@Injectable({
  providedIn: 'root',
})
export class TodosService {
  private readonly _items = signal<Array<Todo>>([
    { id: crypto.randomUUID(), title: 'Comprar leite', done: false },
    { id: crypto.randomUUID(), title: 'Comprar leite', done: true },
    { id: crypto.randomUUID(), title: 'Comprar leite', done: false },
  ]);

  readonly items = this._items.asReadonly();
}
