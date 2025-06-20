import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';

export interface TransportType {
  name: string;
  icon: string;
  color: string;
  price: string;
}

export interface Route {
  from: string;
  to: string;
  duration: string;
  price: string;
}

export interface NearbyStop {
  name: string;
  distance: string;
  transports: string[];
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatTabsModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatChipsModule
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Yobalé Transport';
  fromLocation = '';
  toLocation = '';

  transportTypes: TransportType[] = [
    { name: 'Car Rapide', icon: 'directions_bus', color: 'bg-blue-500', price: '150-300 FCFA' },
    { name: 'Taxi Collectif', icon: 'local_taxi', color: 'bg-green-500', price: '200-500 FCFA' },
    { name: 'Bus DDD', icon: 'directions_bus', color: 'bg-red-500', price: '100-250 FCFA' },
    { name: 'Taxi Individuel', icon: 'local_taxi', color: 'bg-yellow-500', price: '1000+ FCFA' }
  ];

  popularRoutes: Route[] = [
    { from: 'Plateau', to: 'Parcelles Assainies', duration: '45 min', price: '250 FCFA' },
    { from: 'Médina', to: 'Almadies', duration: '35 min', price: '300 FCFA' },
    { from: 'Guédiawaye', to: 'Dakar Centre', duration: '50 min', price: '200 FCFA' },
    { from: 'Pikine', to: 'Plateau', duration: '40 min', price: '275 FCFA' }
  ];

  nearbyStops: NearbyStop[] = [
    { name: 'Arrêt Sandaga', distance: '150m', transports: ['Car Rapide', 'Taxi'] },
    { name: 'Station Petersen', distance: '300m', transports: ['Bus DDD'] },
    { name: 'Arrêt Kermel', distance: '450m', transports: ['Car Rapide'] }
  ];

  liveUpdates = [
    { status: 'success', message: 'Trafic fluide sur l\'autoroute' },
    { status: 'warning', message: 'Embouteillage léger à Colobane' },
    { status: 'error', message: 'Perturbation ligne Bus DDD' }
  ];

  searchRoute() {
    console.log('Recherche:', this.fromLocation, '->', this.toLocation);
    // Logique de recherche d'itinéraire
  }

  addToFavorites(route: Route) {
    console.log('Ajouté aux favoris:', route);
    // Logique d'ajout aux favoris
  }
}