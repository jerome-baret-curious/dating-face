import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Config } from './config';
import { firstValueFrom, timeout } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ConfigService {
  private configUrl = 'assets/config.json';
  data!: Config;

  constructor(private http: HttpClient) {}

  loadConfig() {
    // need to return a Promise or an Observable for APP_INITIALIZER
    return firstValueFrom(
      this.http.get<Config>(this.configUrl).pipe(
        timeout({
          each: 1000, // if config hasn't been loaded in 1 second then error
        })
      )
    ).then((data: Config) => {
      this.data = { ...data };
      return data;
    });
  }
}
