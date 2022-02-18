import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IAtrativos } from 'src/app/model/IAtrativos.model';
import { IAutenticate } from 'src/app/model/IAutenticate.model';
import { AtrativosService } from 'src/app/services/atrativos.service';
import { AutenticateService } from 'src/app/services/autenticate.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  listarAtrativos: IAtrativos[] = [];
  listarUsers: IAutenticate[] = [];

  constructor(
    private router: Router,
    private atrativosService: AtrativosService,
    private autenticateService: AutenticateService
    ) {}

  ngOnInit(): void {
    this.carregarAtrativos();
    // this.carregarUsers();
  }

  //Metodo para pegar os dados da api relacionados a atrativos (LOUMAR) ESTE METODO "consume" o metodo criado no arquivo services
  carregarAtrativos(): void {
    this.atrativosService.getAllAtrativos().subscribe((response) => {
      this.listarAtrativos = response;
      console.log('<- TO POR AQUI ->', this.listarAtrativos);
    });
  }

  // carregarUsers(): void {
  //   this.autenticateService.getAllUsers().subscribe((response) => {
  //     this.listarUsers = response;
  //     console.log('<- TO POR AQUI ->', this.listarUsers);
  //   });
  // }
}
