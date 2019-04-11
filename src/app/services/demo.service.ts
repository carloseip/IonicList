import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Usuario } from '../interfaces/usuario';

@Injectable({
  providedIn: 'root'
})
export class DemoService {
  constructor(private http: HttpClient) {}

  getListaUsers(): Promise<Usuario[]> {
    const url = 'https://www.json-generator.com/api/json/get/cfwZmvEBbC';

    return new Promise((resolver, rechazar) => {
      return this.http
        .get(url)
        .pipe(map((res: any) => res))
        .subscribe(r => resolver(r), error => rechazar(error));
    });
  }
}
