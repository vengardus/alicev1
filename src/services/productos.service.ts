import {Injectable} from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';


@Injectable()
export class ProductosService {
    constructor(public afDB: AngularFireDatabase) {
        
    }

    //productos : FirebaseListObservable<any[]>;
      
    public getProductos() {
        return this.afDB.list('productos/');
   }

    public getProducto(id) {
        return this.afDB.object('productos/'+id);
    }

    public createProducto(producto) {
        this.afDB.database.ref('productos/'+producto.id).set(producto);
    }

    public editProducto(producto) {
        this.afDB.database.ref('productos/'+producto.id).set(producto);        
    }

    public deleteProducto(producto) {
        this.afDB.database.ref('productos/'+producto.id).remove();
    }
}