import { Component, ViewChild } from '@angular/core';
import { NavController, MenuController } from 'ionic-angular';
import { ProductoPage } from '../producto/producto';
import { UsuarioViewPage } from '../usuario-view/usuario-view';
import { PedidosViewPage } from '../pedidos/pedidos-view/pedidos-view';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  notes = [];
  rootPage: any = HomePage;
  @ViewChild('myNav') nav: NavController

  constructor(public navCtrl: NavController) {
  }

  public viewProductos() {
    this.navCtrl.push(ProductoPage, {id:null});
  }

  public viewUsuarios() {
    this.navCtrl.push(UsuarioViewPage, {id:null});
  }

  public viewPedidos() {
    this.navCtrl.push(PedidosViewPage, {id:null});
  }
}
