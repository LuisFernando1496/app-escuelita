import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { countries } from '../../../../assets/countries/countries';
@Component({
  selector: 'app-teachers',
  templateUrl: './teachers.component.html',
  styleUrls: ['./teachers.component.scss']
})
export class TeachersComponent {


  @ViewChild('registerTecherProfession') registerTecherProfession: NgForm;
    username = '';
    email = '';
    password = '';
    name = '';
    last_name = '';
    rol_id = '';
    status = '';
    rfc = '';
    curp = '';
    gender = ''; 
    cedula = '';
    bill = '';
    level = '';
    languages = '';

  

    modalRef: BsModalRef;
    modalRefS: BsModalRef;
  constructor(private modalService: BsModalService) { }

  ngOnInit(): void {
 countries.map((p:any) => {
      console.log(p.name);
      console.log(p.estados);
    });
    
  }

  modalActive(templateModalProfession: TemplateRef<any>): void {

    this.modalRef = this.modalService.show(templateModalProfession);
   
  
  }
  modalOriginActive(templateModalOrigin: TemplateRef<any>, templateModalProfession: TemplateRef<any>): void {
    //console.log(this.registerTecherProfession.value);
    this.modalRef.hide();
    this.modalRefS = this.modalService.show(templateModalOrigin);

  }

  onSubmit()
  {
    
  }

}
