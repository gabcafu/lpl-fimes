import { Component } from '@angular/core';
import { IFilme } from '../model/IFilme';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor() {}

  listaFilmes: IFilme[] = [
    {
      nome: 'Gente Grande(2010)',
      lancamento: '24/09/2010',
      duracao: '1h42m',
      classificacao: 10,
      cartaz: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcS3KC5CYzKSIx0aKLEL-lYfeeF7lfTqcd4nVGWOwO2IZaBzfdaz',
      generos: ['Comédia'],
      pagina: '/gente grande',
      favorito: true
    },
    {
      nome: 'Vingadores: Ultimato (2019)',
      lancamento: '25/04/2019 (BR)',
      duracao: '3h01m',
      classificacao: 9,
      cartaz: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/q6725aR8Zs4IwGMXzZT8aC8lh41.jpg',
      generos: ['Aventura', 'Ficção científica', 'Ação'],
      pagina: '/avengers',
      favorito: true
    },
    {
      nome: 'Juntos e Misturados (2014)',
      lancamento: '17/07/2014',
      duracao: '1h57m',
      classificacao: 10,
      cartaz: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSgt_tzR59hZRBDYrB0SXzqHNuBuCSnV2NmaV6AfClTxMIrZH3_',
      generos: ['Comédia'],
      pagina: '/juntos e misturados',
      favorito: true
    },
    {
      nome: 'Coringa (2019)',
      lancamento: '03/10/2019',
      duracao: '2h20m',
      classificacao: 10,
      cartaz: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcR3kEFg8g-cdpamz5o28Ipv1eQ8Hez7aq4YC5cP9uCkZYAjefWR',
      generos: ['Drama', 'Suspense' , 'Ficção cientifica'],
      pagina: '/coringa',
      favorito: true
    },
    {
      nome: 'De Volta Para o Futuro',
      lancamento: '25/12/1985',
      duracao: '1h56m',
      classificacao: 10,
      cartaz: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTxnJf5r-80tj2F6xzRfjkmrND454B1MP_6Zkhp09qBUFEORTmr',
      generos: ['Aventura', 'Comédia', 'Ficção cientifica'],
      pagina: '/de volta para o futuro',
      favorito: true
    },

  ];

}
