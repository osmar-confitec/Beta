import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Funcionario } from './models/funcionario';
import { Isexo } from './models/isexo';
import * as $ from 'jquery';

@Component({
  selector: 'project-B-detail-grid',
  templateUrl: './detail-grid.component.html',
  styleUrls: ['./detail-grid.component.css']
})
export class DetailGridComponent implements OnInit {

  @ViewChild('MinhaTabela') Tabela:ElementRef;
  idSeq:number = 13;

  Novo(){
    this.funcionario = new Funcionario();

  }

  editarRegistro(funcionario:Funcionario){

      this.funcionario = new Funcionario();
      this.funcionario = funcionario;
  }

  detalhesRegistro(funcionario:Funcionario)
  {
  
       let linhaTabela =  this.Tabela.nativeElement.querySelector(`.id-${funcionario.id}`);
       if (linhaTabela.style.display == `none`)
           linhaTabela.style.display = `block`;
       else
           linhaTabela.style.display = `none`;        
 
        // let linhaAdd:string  = ` 
        // <tr>
        //   <td colspan="5" >
        //         <p>Detalhes</p>
        //         ${funcionario.detalhes}
        //   </td>
        // </tr> `; 
        // $(`#${funcionario.id}`).parents('table').find('tbody').append(linhaAdd);
      
      console.log(funcionario)

      console.log(this.Tabela.nativeElement);

  }

  deletarRegistro(funcionario:Funcionario)
  {
    console.log(funcionario)
    let index = this.listaFuncionarios.indexOf(funcionario, 0);
    if (index > -1) {
      this.listaFuncionarios.splice(index, 1);
    }


  }


  listaFuncionarios: Array<Funcionario> = [

    {
      id:10,
      nome: 'Osmar',
      detalhes:`Independência do Brasil é um processo que se estende de 1821 a 1825 e coloca em violenta oposição o Reino do Brasil e o Reino de Portugal, dentro do Reino Unido de Portugal, Brasil e Algarves. As Cortes Gerais e Extraordinárias da Nação Portuguesa, instaladas em 1820, como uma consequência da Revolução Liberal do Porto, tomam decisões, a partir de 1821, que tinham como objetivo reduzir novamente o Brasil ao seu antigo estatuto colonial.

      Antecedendo o processo de independência do Brasil, mas com fortes influências sobre o mesmo, ocorre a transferência da corte portuguesa para o Brasil. Em 1807, o exército francês invadiu o Reino de Portugal, que se recusava a se juntar ao bloqueio continental contra o Reino Unido. Incapaz de resistir ao ataque, a família real e o governo português fugiram para o Brasil, que era então a mais rica e desenvolvida das colônias lusitanas.[1][2] A instalação do Tribunal de Justiça no Rio de Janeiro traz uma série de transformações políticas, econômicas e sociais que levam à decisão do Príncipe Regente D. João, consumada em 16 de dezembro de 1815, de elevar o Brasil à condição de reino, unido com sua ex-metrópole.
      
      Porém, em 1820, uma revolução liberal eclodiu em Portugal e a família real foi forçada a retornar para Lisboa. Antes de sair, no entanto, D. João nomeia o seu filho mais velho, D. Pedro de Alcântara de Bragança, como Príncipe Regente do Brasil (1821). Fiel ao seu pai, o príncipe-regente vê sua condição complicada pela vontade política das cortes portuguesas em repatriá-lo e de retornar o Brasil ao seu antigo estatuto colonial. Oficialmente, a data comemorada para independência do Brasil é a de 7 de setembro de 1822, em que ocorreu o chamado "Grito do Ipiranga", às margens do riacho Ipiranga (atual cidade de São Paulo). Em 12 de outubro de 1822, o príncipe foi proclamado imperador pelo nome de Pedro I e o país leva o nome de Império do Brasil.
      
      Assim começou a guerra de independência que vê nascer e atuar o exército brasileiro, formado a partir da contratação de mercenários, do alistamento de civis e de tropas coloniais portuguesas,[3] contra aquelas que permaneceram fiéis ao Reino de Portugal em algumas partes do país.[4] Em meio ao conflito, há em Pernambuco o levantamento da Confederação do Equador, que pretendia formar seu próprio governo, republicano, mas foi duramente reprimido. Depois de três anos de conflito armado, Portugal finalmente reconheceu a independência do Brasil, e em 29 de agosto de 1825 foi assinado o Tratado de Amizade e Aliança firmado entre Brasil e Portugal. Em troca, o Brasil se comprometeu a pagar ao Reino de Portugal uma indenização substancial e assinar um tratado de comércio com o Reino Unido, para indenizá-lo por sua mediação.`,
      sobrenome: 'Gonçalves Vieira.',
      email: 'osmargv@gmail.com',
      cpf: '21371885893',
      rg: '299463680',
      sexo: Isexo.masculino
    },
    {
      id:11,  
      nome: 'fredo',
      detalhes:`Independência do Brasil é um processo que se estende de 1821 a 1825 e coloca em violenta oposição o Reino do Brasil e o Reino de Portugal, dentro do Reino Unido de Portugal, Brasil e Algarves. As Cortes Gerais e Extraordinárias da Nação Portuguesa, instaladas em 1820, como uma consequência da Revolução Liberal do Porto, tomam decisões, a partir de 1821, que tinham como objetivo reduzir novamente o Brasil ao seu antigo estatuto colonial.

      Antecedendo o processo de independência do Brasil, mas com fortes influências sobre o mesmo, ocorre a transferência da corte portuguesa para o Brasil. Em 1807, o exército francês invadiu o Reino de Portugal, que se recusava a se juntar ao bloqueio continental contra o Reino Unido. Incapaz de resistir ao ataque, a família real e o governo português fugiram para o Brasil, que era então a mais rica e desenvolvida das colônias lusitanas.[1][2] A instalação do Tribunal de Justiça no Rio de Janeiro traz uma série de transformações políticas, econômicas e sociais que levam à decisão do Príncipe Regente D. João, consumada em 16 de dezembro de 1815, de elevar o Brasil à condição de reino, unido com sua ex-metrópole.
      
      Porém, em 1820, uma revolução liberal eclodiu em Portugal e a família real foi forçada a retornar para Lisboa. Antes de sair, no entanto, D. João nomeia o seu filho mais velho, D. Pedro de Alcântara de Bragança, como Príncipe Regente do Brasil (1821). Fiel ao seu pai, o príncipe-regente vê sua condição complicada pela vontade política das cortes portuguesas em repatriá-lo e de retornar o Brasil ao seu antigo estatuto colonial. Oficialmente, a data comemorada para independência do Brasil é a de 7 de setembro de 1822, em que ocorreu o chamado "Grito do Ipiranga", às margens do riacho Ipiranga (atual cidade de São Paulo). Em 12 de outubro de 1822, o príncipe foi proclamado imperador pelo nome de Pedro I e o país leva o nome de Império do Brasil.
      
      Assim começou a guerra de independência que vê nascer e atuar o exército brasileiro, formado a partir da contratação de mercenários, do alistamento de civis e de tropas coloniais portuguesas,[3] contra aquelas que permaneceram fiéis ao Reino de Portugal em algumas partes do país.[4] Em meio ao conflito, há em Pernambuco o levantamento da Confederação do Equador, que pretendia formar seu próprio governo, republicano, mas foi duramente reprimido. Depois de três anos de conflito armado, Portugal finalmente reconheceu a independência do Brasil, e em 29 de agosto de 1825 foi assinado o Tratado de Amizade e Aliança firmado entre Brasil e Portugal. Em troca, o Brasil se comprometeu a pagar ao Reino de Portugal uma indenização substancial e assinar um tratado de comércio com o Reino Unido, para indenizá-lo por sua mediação. `,
      sobrenome: 'Gonçalves Vieira.',
      email: 'osmargv@gmail.com',
      cpf: '21371885893',
      rg: '299463680',
      sexo: Isexo.masculino
    },
    {
      id:12,
      nome: 'maria',
      detalhes:``,
      sobrenome: 'Gonçalves Vieira.',
      email: 'osmargv@gmail.com',
      cpf: '21371885893',
      rg: '299463680',
      sexo: Isexo.masculino
    },
    {
      id:13,  
      nome: 'Osmar',
      detalhes:``,
      sobrenome: 'Gonçalves Vieira.',
      email: 'osmargv@gmail.com',
      cpf: '21371885893',
      rg: '299463680',
      sexo: Isexo.masculino
    }

  ];
  funcionario: Funcionario = new Funcionario();
  
  constructor() { }

  ngOnInit() {
    
  }

  Adicionar(){

    console.log(this.funcionario);
    this.idSeq++;


    this.listaFuncionarios.push(

      {
        id:this.idSeq,
        nome: this.funcionario.nome,
        detalhes:this.funcionario.detalhes,
        sobrenome: this.funcionario.sobrenome,
        email: this.funcionario.email,
        cpf: this.funcionario.cpf,
        rg: this.funcionario.rg,
        sexo: this.funcionario.sexo
      }

    );
    this.funcionario = new Funcionario();
  }

}
