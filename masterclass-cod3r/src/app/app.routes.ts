import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { Home } from './screens/home/home';

export const routes: Routes = [
  {
    path: '',
    component: Home,
  },
  {
    path: 'counter',
    loadComponent: () => import('./screens/counter/counter').then((m) => m.Counter),
  },
  {
    path: 'todos',
    loadComponent: () => import('./screens/todos/todos').then((m) => m.Todos),
  }
];
