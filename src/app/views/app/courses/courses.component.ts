import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { NotificationsService } from 'angular2-notifications';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { timeout } from 'rxjs/operators';
import { AuthService } from 'src/app/shared/auth.service';
import { environment } from 'src/environments/environment';
import { Courses } from 'src/app/shared/auth.service';
import data from '../../../data/cakes';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
 
export class CoursesComponent implements OnInit {
  @ViewChild('coursesForm') coursesForm: NgForm;
  //@ViewChild('registerForm') registerForm: NgForm;
  modalRef: BsModalRef;
  //courseNameModel  = '';
  //courseLevelModel = 0;
  coursesData = {};
  //randImg;
  //currentTutorial: Tutorial = {};
  //levels;
  //companies: any[] = [];

  constructor(private modalService: BsModalService, private fb:FormBuilder, private router: Router, private authService: AuthService){}

  ngOnInit(): void
  {
    this.authService.selectAll('courses').pipe(timeout(10000)).subscribe((res) => {
      console.log("res2", res.data);
      this.coursesData = res.data;
      //this.randImg = Math.floor(Math.random() * 8) + 1;
      /*for (let index = 0; index < res.data.length; index++) {
        //this.coursesData = res.data[index];
        this.coursesData = ({
          id: res.data[index].id,
          name: res.data[index].name,
          nivel: res.data[index].rvoe,
          fecha: res.data[index].created_at,
          img: Math.floor(Math.random() * 8) + 1
        });
      }*/
      console.log("res22", this.coursesData);
    }, (err) => {
      console.log("erro",err);
    });    
  }
  randNum () {
    return Math.floor(Math.random() * 8) + 1;
  }

  openModal(template: TemplateRef<any>):void
  {
    this.modalRef = this.modalService.show(template);
  }

  addTagFn(addedName): {name: any; tag: true}
  {
    return {name: addedName, tag: true};
  }
  guardar(): void
  {
    console.log("Guardar...");
    console.log("formulario: ",this.coursesForm.value.name);
    console.log("formulario: ",this.coursesForm.value.rvoe);
    if (this.coursesForm.value.name != "") {
      if(this.coursesForm.value.rvoe > 0){
        /*this.authService.signIn(this.coursesForm.value).pipe(timeout(10000)).subscribe((response) => {
            console.log("response->",response);

          },(error) => {
            console.log(error);
          }
        );*/
        this.authService.store('courses', this.coursesForm.value).pipe(timeout(10000)).subscribe((res) => {
          console.log("res2", res);
        }, (err) => {
          console.log("erro",err);
        });
        /*this.authService.register(this.coursesForm.value).then((course) => {
             this.router.navigate([environment.adminRoot]);
        }).catch((error) => {
          console.log(error);
        });*/
      }
    }
  }
  /*onSubmit(): void {
    console.log("Registrar");
    console.log(this.coursesForm.value);
    if (this.registerForm.valid) {

      // this.authService.register(this.registerForm.value).then((user) => {
      //   this.router.navigate([environment.adminRoot]);
      // }).catch((error) => {
      //   this.notifications.create('Error', error.message, NotificationType.Bare,
      //     { theClass: 'outline primary', timeOut: 6000, showProgressBar: false });
      //   this.buttonDisabled = false;
      //   this.buttonState = '';
      // });
    }
  }*/

}
