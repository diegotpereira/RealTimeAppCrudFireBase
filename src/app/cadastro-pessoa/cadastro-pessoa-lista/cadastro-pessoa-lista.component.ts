import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastro-pessoa-lista',
  templateUrl: './cadastro-pessoa-lista.component.html',
  styleUrls: ['./cadastro-pessoa-lista.component.css']
})
export class CadastroPessoaListaComponent implements OnInit {

  pessoas: Array<any>;

  constructor() { }

  ngOnInit(): void {
    this.pessoas = new Array<any>();
  }

}
