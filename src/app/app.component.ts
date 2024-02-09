import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component'; 
import { ProductListComponent} from './product-list/product-list.component'; 


@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl:'./app.component.html',
  styleUrl: './app.component.scss',
  imports: [RouterOutlet, NavbarComponent, ProductListComponent]
})
export class AppComponent{

};

