import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-alumno',
  templateUrl: './alumno.page.html',
  styleUrls: ['./alumno.page.scss'],
})
export class AlumnoPage implements OnInit {

  user: string = '';
  pass: string = '';

  constructor(private alertController: AlertController, private router: Router) { }

  ngOnInit() {
  }

  validarAlumno() {
    if (this.pass=='1234' && this.user=='ke.lagos' || this.pass=='1234' && this.user=='ap.ocampo') {
      this.router.navigate(['/login/alumno/inicio-alumno']);
     
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
