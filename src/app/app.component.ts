import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'storyboard';

  constructor(private router: Router){}






  navegar(opcion: number) {
    switch (opcion) {
      case 1:
        this.router.navigate(['']);
        break;
      case 2:
        this.router.navigate(['acercade']);
        break;
      case 3:
        this.router.navigate(['creditos']);
        break;
      case 4:
        this.router.navigate(['galeria']);
        break;

      default:
        break;
    }
  }


}
