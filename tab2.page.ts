import { ISeries } from '../model/ISeries';

import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor() {}
  listaSeries: ISeries[] = [
   { nome: 'Gotham',
      lancamento: '2014',
      temporadas: '5',
      classificacao: 9,
      cartaz: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2fangl2ktpqJcEFolryVjl16D-dkp5xqota1t7NwzeqKWXFes',
      generos: ['Drama'],
      pagina: '/gotham',
      favorito: true
  },
  { nome: 'Suits',
      lancamento: '2011',
      temporadas: '9',
      classificacao: 9,
      cartaz: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRT47NUe6OZr8GcM0xl0r6MZwJ-TSxr1_DevcQTPUNhkm4PKl2i',
      generos: ['Drama'],
      pagina: '/suits',
      favorito: true
  },
  { nome: 'Peaky Blinders',
  lancamento: '2013',
  temporadas: '6',
  classificacao: 9,
  cartaz: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRHVxOQm_F-rJxSAv6WAvHTjaflQwYUVrEdVlsnyhf9rHabIV2B',
  generos: ['Drama'],
  pagina: '/peaky blinders',
  favorito: true
},
{ nome: 'Stranger Things',
  lancamento: '2016',
  temporadas: '5',
  classificacao: 9,
  cartaz: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMjEzMDAxOTUyMV5BMl5BanBnXkFtZTgwNzAxMzYzOTE@._V1_.jpg',
  generos: ['Drama'],
  pagina: '/stranger things',
  favorito: true
},
{ nome: 'Outer Banks',
  lancamento: '2020',
  temporadas: '3',
  classificacao: 9,
  cartaz: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTq-efe6ok-BDX5MDtYzPg8MsgCM6rFrunrUTJ1mcuf58Zngk4S',
  generos: ['Drama'],
  pagina: '/outer banks',
  favorito: true
}
]

}
