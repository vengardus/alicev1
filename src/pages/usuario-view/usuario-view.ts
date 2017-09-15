import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { UsersService } from '../../services/users.services';

/**
 * Generated class for the UsuarioViewPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-usuario-view',
  templateUrl: 'usuario-view.html',
})
export class UsuarioViewPage {
  users : any[] = [];

  constructor(public navCtrl: NavController, public navParams: NavParams,
              public usersService: UsersService) {
  }

  ionViewDidLoad(){
    this.usersService.getUsers()
    .then(data => {
      this.users = data.results;
    })
    .catch(error =>{
      console.error(error);
    })
  }

}
