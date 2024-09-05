import { Component } from '@angular/core';
import { AuthenticateService } from '../services/auth.service';
import { CrudService } from '../services/crud.service';
import { Storage, getDownloadURL, ref, uploadBytesResumable } from '@angular/fire/storage';
import { MessageService } from '../services/message.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {

paises: any;


  constructor(
    private router: Router
  
  ) {
     
    this.getPaisCode();
  }

  getPaisCode(){
    fetch('https://restcountries.com/v3.1/all?fields=name,ccn3,flags')
    .then(dados => dados.json())
    .then(dados =>{
      console.log(dados);
      this.paises = dados;
    })
    .catch(erro =>{
      console.log(erro);
    })
    .finally(() => {
      console.log('processo finalizado')
    })
  }

  verDetalhes(ccn3: string){
    this.router.navigate(['/ver-detalhes'], {  
      state: { codigo:ccn3 }
    });
  }

  }