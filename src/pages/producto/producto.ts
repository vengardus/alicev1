import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProductosService } from '../../services/productos.service';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

/**
 * Generated class for the ProductoPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-producto',
  templateUrl: 'producto.html',
})
export class ProductoPage {
  //productos = [];
  productos : FirebaseListObservable<any[]>;
  

  constructor(public navCtrl: NavController, public navParams: NavParams,
              public productosService: ProductosService) {
   /*  productosService.getProductos().subscribe(productos => {
      this.productos = productos;
    }); */
    this.productos = this.productosService.getProductos();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProductoPage');
  }

  public goToInfoProducto(id) {
    //this.navCtrl.push(InfoProductoPage, {id:id});
  }

  public createProducto(id) {
    //this.navCtrl.push(InfoProductoPage, {id:null});
  }
}
