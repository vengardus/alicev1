import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';

import { PedidosService } from '../../../services/pedidos.service';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

import { ItemPedidoPage } from '../item-pedido/item-pedido';
/**
 * Generated class for the DetallesPedidoViewPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detalles-pedido-view',
  templateUrl: 'detalles-pedido-view.html',
})
export class DetallesPedidoViewPage {
  detallesPedido : FirebaseListObservable<any[]>;
  id = null;
  total_pedido = 0;
  
  constructor(public navCtrl: NavController, public navParams: NavParams,
              public pedidosService: PedidosService,
              public loadingCtrl: LoadingController) {
      this.id = navParams.get('id');
      this.detallesPedido = this.pedidosService.getDetallesPedido(this.id);
      this.calculaTotal();
  }

  presentLoading() {
    let loader = this.loadingCtrl.create({
      content: "Please wait...",
      duration: 3000
    });
    loader.present();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetallesPedidoViewPage');
  }

  public goToInfoItemPedido(id) {
    this.total_pedido = 0;
    this.navCtrl.push(ItemPedidoPage, {id:id});
  }

  public calculaTotal() {
  //   this.detallesPedido.forEach(item => {
  //     console.log('Item:', item);
  // });
// let total=0;
this.total_pedido = 0;
/*
  this.detallesPedido.subscribe(items => {
    // items is an array
    items.forEach(item => {
        console.log('Item:', item);
        console.log('descripcion:', item.producto.descripcion);
        total= item.producto.precio*item.cantidad;
        console.log('Total= ', total);
    });
});
 */
//this.detallesPedido.subscribe(snapshot => { console.log(snapshot );});
    //return this.pedidosService.calculaTotalPedido(this.id);

   /*  this.detallesPedido.forEach(item => {
      console.log('Item:', item.producto.descripcion);
  }); */

  this.detallesPedido.forEach(item => {
    item.forEach(item => {
      this.total_pedido+=item.producto.precio*item.cantidad;
    })
});
//this.total_pedido=total;

 /*  console.log('TOTAL= ', total);
  this.total_pedido = total;*/
return this.total_pedido;
  }

  public getTotalPedido() {
    
  }

  public createItemPedido(id) {
    this.total_pedido = 0;
    this.navCtrl.push(ItemPedidoPage, {id_pedido:this.id, id:null});
  }
}

