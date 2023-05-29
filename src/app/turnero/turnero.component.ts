import { Component } from '@angular/core';

@Component({
  selector: 'app-turnero',
  templateUrl: './turnero.component.html',
  styleUrls: ['./turnero.component.css']
})
export class TurneroComponent {

  verdeBotonMenos: boolean = false;
  rojoBotonMenos: boolean = true;
  desactivarBotonMenos: boolean = true;

  verdeBotonMas: boolean = true;
  rojoBotonMas: boolean = false;
  amarilloBotonMas: boolean = false;
  desactivarBotonMas: boolean = false;

  numero: number = 1;


  decrementar() {

    this.numero--;

    if (this.numero <= 1) {
      this.numero = 1
    }

    this.validarBotones();

  }

  incrementar() {

    this.numero++;

    if (this.numero >= 10) {

      this.numero = 10
    }

    this.validarBotones();

  }

  validarBotones() {

    if (this.numero <= 1) {
      this.verdeBotonMenos = false;
      this.rojoBotonMenos = true;
      this.desactivarBotonMenos = true;
    }

    if (this.numero >= 2 && this.numero <= 7) {
      this.rojoBotonMenos = false;
      this.desactivarBotonMenos = false;
      this.amarilloBotonMas = false;
      this.verdeBotonMas = true;
      this.verdeBotonMenos = true;
    }

    if (this.numero == 8 || this.numero == 9) {
      this.verdeBotonMas = false;
      this.rojoBotonMas = false;
      this.amarilloBotonMas = true;
    }

    if (this.numero == 8 || this.numero == 9) {
      this.verdeBotonMas = false;
      this.rojoBotonMas = false;
      this.desactivarBotonMas = false;
      this.amarilloBotonMas = true;
    }

    if (this.numero >= 10) {
      this.verdeBotonMas = false;
      this.amarilloBotonMas = false;
      this.rojoBotonMas = true;
      this.desactivarBotonMas = true;
    }
    
  }

}
