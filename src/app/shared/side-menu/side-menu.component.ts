import { Component, OnInit } from '@angular/core';

interface SideMenuItem {
  name: string;
  ruta: string;
}

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styles: [
    `
    li{
      cursor: pointer;
    }
    `
  ]
})
export class SideMenuComponent  {

  templateMenu: SideMenuItem[] = [
    {
      name:'Basicos',
      ruta:'./template/basicos'
    },
    {
      name:'Dinamicos',
      ruta:'./template/dinamicos'
    },
    {
      name:'Switches',
      ruta:'./template/switches'
    },
  ];

  reactiveMenu: SideMenuItem[] = [
    {
      name:'Basicos',
      ruta:'./reactive/basicos'
    },
    {
      name:'Dinamicos',
      ruta:'./reactive/dinamicos'
    },
    {
      name:'Switches',
      ruta:'./reactive/switches'
    },
  ];

}
