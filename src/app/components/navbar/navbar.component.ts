import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  img ='https://media-exp1.licdn.com/dms/image/C4E0BAQFxuPbeQkZMpg/company-logo_200_200/0/1630680163023?e=2147483647&v=beta&t=dDOamcqbncHN0ZafJqUDaJTs1vhg7hrPdM3o1bQeojo';
  constructor() { }

  ngOnInit(): void {
  }

}
