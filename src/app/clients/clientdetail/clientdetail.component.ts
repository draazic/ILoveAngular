import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Client } from '../../_models/client';
import { DatacurrentService } from '../../_services/data.current.service';
import {Observable} from "rxjs";

@Component({
  selector: 'app-clientdetail',
  templateUrl: './clientdetail.component.html',
  styleUrls: ['./clientdetail.component.scss']
})
export class ClientdetailComponent implements OnInit {
  clients:Client[]=[];
  id: string = "";

  constructor(private route: ActivatedRoute,private datacurrentService : DatacurrentService) { }
  
  ngOnInit(){
    this.datacurrentService.getClients().subscribe((client:Client[])=>{
      this.clients=client;
      console.log(this.clients)
    })

    this.route.queryParams.subscribe(
      params => {
        console.log('Got the Id as: ', params['id']);
        this.id =  params['id'];
      }
    )
  }

}
