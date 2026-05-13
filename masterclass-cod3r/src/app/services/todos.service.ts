import { Injectable, signal } from '@angular/core';
import { Todo } from '../model/todo.entity';

@Injectable({
  providedIn: 'root',
})
export class TodosService {
  private readonly _items = signal<Array<Todo>>([
    { id: crypto.randomUUID(), title: 'Comprar xyz', done: false },
    { id: crypto.randomUUID(), title: 'Comprar 123', done: true },
    { id: crypto.randomUUID(), title: 'Comprar 33', done: false },
  ]);

  readonly items = this._items.asReadonly();

  toggle(id: string) {
    this._items.update((items) =>
      items.map((item) =>
        item.id === id ? { ...item, done: !item.done } : item
      )
    );
  }

  add(title: string) {
    const newItem: Todo = {
      id: crypto.randomUUID(),
      title,
      done: false,
    };
    this._items.update((items) => [...items, newItem]);
  }

  remove(id: string) {
    this._items.update((items) => items.filter((item) => item.id !== id));
  }
}
