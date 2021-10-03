import { Component, OnInit } from '@angular/core';
import { Client } from '../_models/client';
import { ClientService } from '../_services/client.service';
import { first } from 'rxjs/operators';
import { Router } from '@angular/router';
import { DatacurrentService } from '../_services/data.current.service';


@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss']
})

export class ClientsComponent{
  loading = false;
  clients: Client[] | undefined;
  constructor(private clientService: ClientService, private router: Router, private datacurrentService : DatacurrentService ) {}

  ngOnInit() {
    this.loading = true;
    this.clientService.getAll().pipe(first()).subscribe(clients => {
        this.loading = false;
        this.clients = clients;
        this.datacurrentService.setClients(this.clients);

    });

  }

  goDetail(id:number) {
    this.router.navigate( ['client'], { queryParams: { id: id}});
  }

}
