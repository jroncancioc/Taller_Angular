import { Component, OnInit } from '@angular/core';
import { Conferencia } from './conferencia';
import { dataConferencias } from './dataConferencias';
import { ConferenciaService } from './conferencia.service';

@Component({
  selector: 'app-conferencia',
  templateUrl: './conferencia.component.html',
  styleUrls: ['./conferencia.component.css']
})
export class ConferenciaComponent implements OnInit {

  conferencias: Array<Conferencia> = [];
  constructor(private conferenciaService: ConferenciaService) { }

  getConferenciaList(): Array<Conferencia> {
    return dataConferencias;
  }

  ngOnInit() {
    this.conferencias = this.getConferenciaList();
  }

}

