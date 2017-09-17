import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { InfoProductoPage } from './info-producto';

@NgModule({
  declarations: [
    InfoProductoPage,
  ],
  imports: [
    IonicPageModule.forChild(InfoProductoPage),
  ],
})
export class InfoProductoPageModule {}
