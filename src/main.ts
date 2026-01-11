import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { inject } from '@vercel/analytics';
import { App } from './app/features/home/app';

/**
 * We bootstrap the application and then check the execution context.
 * This prevents the analytics script from crashing during Server-Side Rendering (SSR).
 */
bootstrapApplication(App, appConfig)
  .then(appRef => {
    // 1. Get the unique ID of the current platform (Server or Browser)
    const platformId = appRef.injector.get(PLATFORM_ID);

    // 2. Only run the analytics if we are in the user's browser
    if (isPlatformBrowser(platformId)) {
      inject({
        mode: 'production', // Tracks data only when the site is live
      });
      console.log('Vercel Analytics initialized on client-side.');
    }
  })
  .catch(err => console.error('Bootstrap error:', err));
