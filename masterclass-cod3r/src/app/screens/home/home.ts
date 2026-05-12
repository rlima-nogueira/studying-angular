import { Component } from '@angular/core';
import { Title } from '../../components/shared/title/title';

@Component({
  selector: 'app-home',
  templateUrl: './home.html',
  imports: [Title],
  styleUrl: './home.css',
})
export class Home {}
