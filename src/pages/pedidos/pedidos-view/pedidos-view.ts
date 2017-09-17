import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';

import { PedidosService } from '../../../services/pedidos.service';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

import { DetallesPedidoViewPage } from '../../pedidos/detalles-pedido-view/detalles-pedido-view';
//import { InfoProductoPage } from '../info-producto/info-producto';
/**
 * Generated class for the PedidosViewPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pedidos-view',
  templateUrl: 'pedidos-view.html',
})
export class PedidosViewPage {
  pedidos : FirebaseListObservable<any[]>;
  
  constructor(public navCtrl: NavController, public navParams: NavParams,
              public pedidosService: PedidosService,
              public loadingCtrl: LoadingController) {
    this.pedidos = this.pedidosService.getPedidos();          
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PedidosViewPage');
  }

  presentLoading() {
    let loader = this.loadingCtrl.create({
      content: "Please wait...",
      duration: 3000
    });
    loader.present();
  }

  public goToDetallesPedido(id) {
    this.navCtrl.push(DetallesPedidoViewPage, {id:id});
  }
}
