import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PedidosViewPage } from './pedidos-view';

@NgModule({
  declarations: [
    PedidosViewPage,
  ],
  imports: [
    IonicPageModule.forChild(PedidosViewPage),
  ],
})
export class PedidosViewPageModule {}
