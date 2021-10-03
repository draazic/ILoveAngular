import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Client } from '../../_models/client';
import { DatacurrentService } from '../../_services/data.current.service';

@Component({
  selector: 'app-clientdetail',
  templateUrl: './clientdetail.component.html',
  styleUrls: ['./clientdetail.component.scss']
})
export class ClientdetailComponent implements OnInit {
  clients:Client[]=[];
 
  id: string = "";
  index:number=0;

  client:Client[]=[];
  test:any;

  constructor(private route: ActivatedRoute,private datacurrentService : DatacurrentService, private router: Router) { 

  }
  
  ngOnInit(){
    this.datacurrentService.getClients().subscribe((clients:Client[])=>{
      this.clients=clients;
      //si le this.clients est vide faire appel au back 
      console.log(this.clients)


    })

    this.route.queryParams.subscribe(
      params => {
        //console.log('Got the Id as: ', params['id']);
        this.id =  params['id'];
        this.client = this.clients.filter(obj => {
          return obj.id === parseInt(this.id, 10);
        })
 
        this.test = this.client.pop();
        console.log(this.test)
      }
    )
    // this.index = this.clients.findIndex(x => x.id === parseInt(this.id, 10));
    // console.log("Index :" + this.index);
  }

  goNext()
  {
    var idNumber = parseInt(this.id, 10);
    var finalNumber = idNumber + 1;
    this.router.navigate( ['client'], { queryParams: { id: finalNumber }});
  }

  goPrevious()
  {
    var idNumber = parseInt(this.id, 10);
    var finalNumber = idNumber - 1;
    this.router.navigate( ['client'], { queryParams: { id: finalNumber }});
  }

}
