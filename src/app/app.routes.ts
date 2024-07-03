import { Routes } from '@angular/router';
import { WeatherComponent } from './components/weather/weather.component';
import { HomeComponent } from './components/home/home.component';
import { AboutUsComponent } from './components/about-us/about-us.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'weather', component: WeatherComponent },
  { path: 'about', component: AboutUsComponent }
];
