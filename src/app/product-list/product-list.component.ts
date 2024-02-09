import { Component } from '@angular/core';
import { HttpClient,HttpClientModule} from '@angular/common/http';
import { DetailProductComponent } from '../detail-product/detail-product.component';
import { MatDialog} from '@angular/material/dialog';


@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [HttpClientModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss'
})
export class ProductListComponent {
  products:ProductModel[] | any = [];
  producturl= "https://fakestoreapi.com/products";

  constructor(private _http: HttpClient, public dialog: MatDialog){

  }
  ngOnInit(){
    this.getProduct();
  }
  getProduct(){
    this._http.get(this.producturl).subscribe(response => {
      this.products = response;
      console.log(this.products);
    })
  }

  openDialog(product: ProductModel) {
    this.dialog.open(DetailProductComponent, {
      data: product,
      autoFocus:false,
      disableClose:false,
      panelClass:"testClass"
    })
  }
  
}

export interface ProductModel{
  id:number;
  title:string;
  price:string;
  category:string;
  description:string;
  image:string;
}
