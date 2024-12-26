import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import {InjectionToken} from "@angular/core";
import { environment } from '../environments/environment.development';
import { provideHttpClient, withFetch } from '@angular/common/http';
<<<<<<< HEAD
=======
import { FormsModule } from '@angular/forms';
>>>>>>> 7ee3d2526f078a412c9101c4b97bf8857f6b911a
export const APP_SERVICE_CONFIG= new InjectionToken("appConfig");
export const APP_CONFIG={
  apiEndpoimt:environment.apiEndpoint
}
export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideClientHydration(withEventReplay()),
    provideHttpClient(withFetch())
    ]
};
