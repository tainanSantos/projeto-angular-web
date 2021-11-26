import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EmpresaModel } from './empresa-model';

@Injectable({
  providedIn: 'root'
})
export class EmpresaService {

  private url = 'http://localhost:3000/empresas';

  constructor(private httpCliente: HttpClient) { }

  saveEmpresa(empresa: EmpresaModel): Observable<EmpresaModel> {
    return this.httpCliente.post<EmpresaModel>(this.url, empresa);
  }

}
