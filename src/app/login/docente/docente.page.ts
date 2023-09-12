import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-docente',
  templateUrl: './docente.page.html',
  styleUrls: ['./docente.page.scss'],
})
export class DocentePage implements OnInit {

  user: string = '';
  pass: string = '';


  constructor(private alertController: AlertController, private router: Router) { }

  ngOnInit() {
  }


  validarDocente() {
    if (this.pass=='1234' && this.user=='danilo') {
      this.router.navigate(['/login/docente/inicio-docente']);

   
     
    } else {
      this.mostrarAlerta();
    }
  }

  async mostrarAlerta() {
    const alert = await this.alertController.create({
      header: 'Error',
      message: 'Usuario no encontrado, vuelva a intentarlo.',
      buttons: ['OK']
    });

    await alert.present();

  }


}
