import { EmpresaModel } from './../../empresa-model';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmpresaService } from '../../empresa.service';

@Component({
  selector: 'app-create-empresa',
  templateUrl: './create-empresa.component.html',
  styleUrls: ['./create-empresa.component.scss']
})
export class CreateEmpresaComponent implements OnInit {

  formulario!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private empresaService: EmpresaService) { }

  ngOnInit(): void {
    this.formulario = this.formBuilder.group({
      nome: [null, [Validators.required]],
      cnpj: [null, [Validators.required]]
    })
  }

  salvarForm(): void {

    const empresa = new EmpresaModel();
    empresa.nome = this.formulario.get('nome')?.value;
    empresa.cnpj = this.formulario.get('cnpj')?.value;

    this.empresaService.saveEmpresa(empresa).subscribe(
      (data: EmpresaModel) => {
        this.limparForm();
      },
      (erro) => {

      }
    )
  }

  limparForm(): void {
    this.formulario.reset();
  }

}
