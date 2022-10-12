import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  showLink: boolean = true;
  title: string = 'File Generator - CNAB240';
  author: string = 'Elizeu Ramos';

  constructor() { }

  ngOnInit(): void {
  }

}
