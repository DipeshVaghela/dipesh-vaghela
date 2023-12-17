import { ApplicationConfig } from '@angular/core';
import { RouterConfigOptions, RouterFeature, RouterFeatures, RouterLinkWithHref, RouterModule, provideRouter, withHashLocation, withRouterConfig } from '@angular/router';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes)]
};
