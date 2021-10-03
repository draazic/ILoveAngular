import { Component, OnInit, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { Client }    from '../_models/client';
import {DatacurrentService}    from '../_services/data.current.service';
import { FormsModule, Validators } from '@angular/forms';
import { FormGroup, FormControl,FormBuilder } from '@angular/forms';

@Component({
  
  templateUrl: 'contact.component.html',
  
})
export class ContactComponent implements OnInit {
  clientForm!: FormGroup;
  clients:Client[]=[];
  constructor(private dataCurrentService : DatacurrentService,private formBuilder: FormBuilder) {}

  ngOnInit(){
    this.clientForm = this.formBuilder.group({
      username: ['', Validators.required],
      firstname: ['', Validators.required]
  });

  this.getUser();
    
  }
  get f() { return this.clientForm.controls; }

  onSubmit(){
   
    //console.log(this.f.forname.value);
      this.dataCurrentService.setClient(this.f.username.value,this.f.firstname.value)
      this.clientForm.reset();
    }

   getUser(){
     var test = this.dataCurrentService.getClient();
     console.log(test);
     this.clients = test;
   } 
}
