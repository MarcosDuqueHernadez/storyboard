import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})

export class MainComponent {

  public correo: string = "";

  constructor(private router: Router) {

  }


  enviarCorreo() {

  }



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

      default:
        break;
    }
  }


}
