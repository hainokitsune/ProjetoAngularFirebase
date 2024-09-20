import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent  implements OnInit {

menu = {
  logo:'https://cdn1.iconfinder.com/data/icons/material-core/20/check-circle-outline-512.png',
  items: [
    {icone: 'https://cdn1.iconfinder.com/data/icons/carbon-design-system-vol-4/32/home-512.png', texto: 'inicio', link: '/home'},
    {icone: 'https://cdn4.iconfinder.com/data/icons/user-interface-937/24/22.about_info_information_help_ui-512.png', texto: 'Sobre'},
    {icone: 'https://cdn2.iconfinder.com/data/icons/custom-ios-14-1/60/Photos-512.png', texto: 'Galeria'},
    {icone: 'https://cdn2.iconfinder.com/data/icons/boxicons-solid-vol-1/24/bxs-contact-512.png', texto: 'Contato'}

  ]
}



  constructor() { }

  ngOnInit() {}

}
