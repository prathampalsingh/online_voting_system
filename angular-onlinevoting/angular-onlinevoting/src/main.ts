import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { BarController, Colors, Legend } from 'chart.js';

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

  bootstrapApplication(AppComponent, {
    providers: [provideCharts({ registerables: [AbortController, Legend, Colors] })],
  }).catch((err) => console.error(err));

function provideCharts(arg0: { registerables: any[]; }): import("@angular/core").Provider | import("@angular/core").EnvironmentProviders {
  throw new Error('Function not implemented.');
}
