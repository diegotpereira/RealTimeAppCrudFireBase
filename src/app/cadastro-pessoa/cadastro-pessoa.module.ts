import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AngularFireDatabase } from '@angular/fire/database';
import { CadastroPessoaComponent } from './cadastro-pessoa.component';
import { CadastroPessoaFormComponent } from './cadastro-pessoa-form/cadastro-pessoa-form.component';
import { CadastroPessoaListaComponent } from './cadastro-pessoa-lista/cadastro-pessoa-lista.component';




@NgModule({
  imports: [
    CommonModule, FormsModule
  ],
  providers: [AngularFireDatabase],
  exports: [CadastroPessoaFormComponent, CadastroPessoaListaComponent, CadastroPessoaComponent],
  declarations: [CadastroPessoaFormComponent, CadastroPessoaListaComponent, CadastroPessoaComponent]
})
export class CadastroPessoaModule { }
