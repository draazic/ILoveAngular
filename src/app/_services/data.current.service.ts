import { identifierModuleUrl } from '@angular/compiler';
import { BehaviorSubject, Observable } from 'rxjs';
import { Client } from '../_models/client';

export class DatacurrentService {
    client : Client[]=[];
    clients = new BehaviorSubject<Client[]>([]);
    //CONSTRUCTOR
    constructor(){
      //this.client = new Array<Client>;  
      //this.clients = new BehaviorSubject([]);
    }

    //METHODE
   setClient(username:string, firstName:string):void{
    this.client.push(      
      { 
        id : 99,
        username : username, 
        firstname : firstName,
        lastName: ""});
   }
  
    getClient(){
      return this.client;  
    }

    setClients(clients:Client[]):void{
      this.clients.next(clients);
    }

    getClients(): Observable<Client[]>{
      return this.clients;  
    }
  
  }