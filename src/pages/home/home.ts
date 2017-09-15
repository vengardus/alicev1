import { Component, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ProductoPage } from '../producto/producto';
import { UsuarioViewPage } from '../usuario-view/usuario-view';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  notes = [];
  @ViewChild('myNav') nav: NavController

  constructor(public navCtrl: NavController) {
    
  }

  public viewProductos() {
    this.navCtrl.push(ProductoPage, {id:null});
  }

  public viewUsuarios() {
    this.navCtrl.push(UsuarioViewPage, {id:null});
  }
}
