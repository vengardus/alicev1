import {Injectable} from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable,
        FirebaseObjectObservable } from 'angularfire2/database';

@Injectable()
export class PedidosService {
    constructor(public afDB: AngularFireDatabase) {
        
    }

    //pedidos : FirebaseListObservable<any[]>;
      
    public getPedidos() {
        return this.afDB.list('pedidos/');
   }

    public getPedido(id) {
        return this.afDB.object('pedidos/'+id);
    }

    public createPedido(pedido) {
        this.afDB.database.ref('pedidos/'+pedido.id).set(pedido);
    }

    public editPedido(pedido) {
        this.afDB.database.ref('pedidos/'+pedido.id).set(pedido);        
    }

    public deletePedido(pedido) {
        this.afDB.database.ref('pedidos/'+pedido.id).remove();
    }

    //Detalles Pedido

    public getDetallesPedido(id_pedido) {
        return this.afDB.list('detalles_pedido/', { query: {
            orderByChild: 'id_pedido',
            equalTo: id_pedido 
          }
        });
    }

    public calculaTotalPedido(id_pedido) {
        let items: FirebaseObjectObservable<any>;
        return 0;
    }

    public getItemPedido(id) {
        return this.afDB.object('detalles_pedido/'+id);
    }

    public createItemPedido(itemPedido) {
        this.afDB.database.ref('detalles_pedido/'+itemPedido.id).set(itemPedido);
    }

    public editItemPedido(itemPedido) {
        this.afDB.database.ref('detalles_pedido/'+itemPedido.id).set(itemPedido);        
    }

    public deleteItemPedido(itemPedido) {
        this.afDB.database.ref('detalles_pedido/'+itemPedido.id).remove();
    }
}