import { Component, OnInit } from '@angular/core';
import { DemoService } from '../services/demo.service';
import { Usuario } from '../interfaces/usuario';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.page.html',
  styleUrls: ['./demo.page.scss'],
})
export class DemoPage implements OnInit {
  user: Usuario[];

  constructor(private gestorDemo: DemoService) { }

  ngOnInit() {
    this.gestorDemo.getListaUsers().then(
      resp => {
        this.user = resp;
      }
    );
  }

}
