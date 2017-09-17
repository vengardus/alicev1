import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProductosService } from '../../services/productos.service';

/**
 * Generated class for the InfoProductoPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-info-producto',
  templateUrl: 'info-producto.html',
})
export class InfoProductoPage {
  producto = { id:null, descripcion:null, precio:null};
  id = null;

  constructor(public navCtrl: NavController, public navParams: NavParams,
              public productosService: ProductosService) {
    this.id = navParams.get('id');
    if ( this.id != null ) {
      //this.note = notesService.getNote(this.id);
      productosService.getProducto(this.id).subscribe(producto => {
        this.producto = producto;
      });
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InfoProductoPage');
  }

  addProducto() {
    if ( this.producto.id != null ) {
      // editando
      this.productosService.editProducto(this.producto);
      alert("Producto editado satisfactoriamente.");
    }
    else {
      this.producto.id = Date.now();
      this.producto.precio = this.producto.precio*1;
      this.productosService.createProducto(this.producto);
      alert("Producto creado satisfactoriamente.");
    }
    this.navCtrl.pop();
  }

  deleteProducto() {
    this.productosService.deleteProducto(this.producto);
    alert("Producto eliminado satisfactoriamente.");
    this.navCtrl.pop();
  }
}
