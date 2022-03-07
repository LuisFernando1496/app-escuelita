import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { countries } from '../../../../assets/countries/countries';
@Component({
  selector: 'app-teachers',
  templateUrl: './teachers.component.html',
  styleUrls: ['./teachers.component.scss']
})
export class TeachersComponent implements OnInit{
    formularioCrear: FormGroup;
    modalRef: BsModalRef;
    modalRefS: BsModalRef;
    flackRefS = false;
    paises = countries;
    estados:any;
    ciudades:any;
  constructor(private modalService: BsModalService, private form: FormBuilder) {
      this.formularioCrear = this.form.group({
          username : [''],
          email : [''],
          password : [''],
          name : [''],
          last_name : [''],
          rfc : [''],
          curp : [''],
          gender : [''], 
          cedula : [''],
          bill : [''],
          level : [''],
          languages : [''],
          bank : [''],
          account : [''],
          date : [''],
          city : [''],
          state : [''],
          country : [''],
      })
   }

  ngOnInit(): void {
 
    
  }

  modalActive(templateModalProfession: TemplateRef<any>): void {
    
    this.flackRefS ? this.modalRefS.hide():'' ;
    this.modalRef = this.modalService.show(templateModalProfession);
    this.flackRefS = false;
  
  }
  modalOriginActive(templateModalOrigin: TemplateRef<any>, templateModalProfession: TemplateRef<any>): void {

    this.modalRef.hide();
    this.modalRefS = this.modalService.show(templateModalOrigin);
    this.flackRefS = true;

  }
  stateSelected(event:any)
  {
    const { value } =event.target;
    const getSatates = this.paises.find( (states:any) => states.name == value);
    const { estados } = getSatates;
    this.estados = estados;
  }
  citySelect(event:any)
  {
    const { value } = event.target;
    const getCities = this.estados.find((city:any)=> city.name == value);
    const { ciudades } = getCities;
    this.ciudades = ciudades; 
  }
  save()
  {
    console.log(this.formularioCrear.value);
  }
  
}
