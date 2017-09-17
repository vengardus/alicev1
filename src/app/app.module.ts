import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import { ProductosService } from '../services/productos.service';
import { UsersService } from '../services/users.services';
import { PedidosService } from '../services/pedidos.service';

import { ProductoPage } from '../pages/producto/producto';
import { UsuarioViewPage } from '../pages/usuario-view/usuario-view';
import { InfoProductoPage } from '../pages/info-producto/info-producto';
import { PedidosViewPage } from '../pages/pedidos/pedidos-view/pedidos-view';
import { DetallesPedidoViewPage } from '../pages/pedidos/detalles-pedido-view/detalles-pedido-view';
import { ItemPedidoPage } from '../pages/pedidos/item-pedido/item-pedido';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { HttpModule } from '@angular/http';

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyCCHps_AHeA82dZE5GWh07Vrb5LTVuuexg",
    authDomain: "notionic-5a955.firebaseapp.com",
    databaseURL: "https://notionic-5a955.firebaseio.com",
    projectId: "notionic-5a955",
    storageBucket: "notionic-5a955.appspot.com",
    messagingSenderId: "332319416372"
  }
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ProductoPage,
    UsuarioViewPage,
    InfoProductoPage,
    PedidosViewPage,
    DetallesPedidoViewPage,
    ItemPedidoPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(environment.firebase), // imports firebase/app needed for everything
    AngularFireDatabaseModule, // imports firebase/database, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ProductoPage,
    UsuarioViewPage,
    InfoProductoPage,
    PedidosViewPage,
    DetallesPedidoViewPage,
    ItemPedidoPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ProductosService,
    UsersService,
    PedidosService
  ]
})
export class AppModule {}

