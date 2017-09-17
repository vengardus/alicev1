import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DetallesPedidoViewPage } from './detalles-pedido-view';

@NgModule({
  declarations: [
    DetallesPedidoViewPage,
  ],
  imports: [
    IonicPageModule.forChild(DetallesPedidoViewPage),
  ],
})
export class DetallesPedidoViewPageModule {}
