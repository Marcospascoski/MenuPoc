import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  private appPages = [
    {
      title: 'Home',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'List',
      url: '/list',
      icon: 'list'
    }
  ]

  private appPagesSub = [
    {
      title: 'Cadastro de Grupos',
      subPages: [
        {
          title: 'Produtos',
          url: '/products/list',
          icon: 'archive'
        },
        {
          title: 'Grupos de Produtos',
          url: '/products/groups',
          icon: 'filing'
        }
      ]
    }
  ];

  constructor() { }

  getMenus() {
    return this.appPages;
  }

  getMenusSub() {
    return this.appPagesSub;
  }
}
