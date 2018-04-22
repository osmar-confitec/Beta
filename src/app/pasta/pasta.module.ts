import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropdownComponent } from './dropdown/dropdown.component';
import { ComunicacaoService } from './services/comunicacao.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [DropdownComponent],
  exports:[DropdownComponent],
  providers:[ComunicacaoService]
})
export class PastaModule { }
