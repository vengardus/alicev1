import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { PedidosService } from '../../../services/pedidos.service';
import { PedidosViewPage } from '../pedidos-view/pedidos-view';

/**
 * Generated class for the ItemPedidoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-item-pedido',
  templateUrl: 'item-pedido.html',
})
export class ItemPedidoPage {
  itemPedido = null;
  id = null;
  id_pedido = null;

  constructor(public navCtrl: NavController, public navParams: NavParams,
              public pedidosService: PedidosService) {
    this.id = navParams.get('id');
    this.id_pedido = navParams.get('id_pedido');
    this.init_itemPedido();    
    if ( this.id != null ) {
      //this.note = notesService.getNote(this.id);
      pedidosService.getItemPedido(this.id).subscribe(itemPedido => {
        this.itemPedido = itemPedido;
      });
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ItemPedidoPage');
  }

  init_itemPedido() {
    this.itemPedido = { id:null, id_pedido:null, 
      producto: { id:null, 
                  descripcion:null, 
                  precio:null},
      cantidad:null,
      observacion:null};
  }

  addItemPedido() {
    if ( this.itemPedido.id != null ) {
      // editando
      this.pedidosService.editItemPedido(this.itemPedido);
      alert("Item editado satisfactoriamente.");
    }
    else {
      this.itemPedido.id = Date.now();
      this.itemPedido.id_pedido = this.id_pedido;
      this.itemPedido.producto.id = Date.now();
      this.itemPedido.producto.precio = this.itemPedido.producto.precio*1;
      this.itemPedido.cantidad*=1;
      this.pedidosService.createItemPedido(this.itemPedido);
      alert("Item creado satisfactoriamente.");
    }
    this.navCtrl.pop();
  }

  deleteItemPedido() {
    this.pedidosService.deleteItemPedido(this.itemPedido);
    this.init_itemPedido();
    alert("Item eliminado satisfactoriamente.");
    this.navCtrl.pop();
    //his.navCtrl.push(PedidosViewPage, {id:null});
  }

}
