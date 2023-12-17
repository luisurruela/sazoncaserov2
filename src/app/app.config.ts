import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getStorage, provideStorage } from '@angular/fire/storage';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { AuthGuard } from './guard/auth.guard';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideClientHydration(),
    importProvidersFrom(provideFirebaseApp(() => initializeApp({ "projectId": "sazoncasero", "appId": "1:1049918271632:web:796d42dc058a5118f82815", "storageBucket": "sazoncasero.appspot.com", "apiKey": "AIzaSyDFea8CiRGgKfg9SNpvONk_LYq65oRXx-g", "authDomain": "sazoncasero.firebaseapp.com", "messagingSenderId": "1049918271632" }))),
    importProvidersFrom(provideFirestore(() => getFirestore())),
    importProvidersFrom(provideStorage(() => getStorage())),
    importProvidersFrom(provideAuth(() => getAuth())),
    AuthGuard
  ],
};
