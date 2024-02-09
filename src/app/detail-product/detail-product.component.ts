import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule , MatDialogRef } from '@angular/material/dialog';
import { ProductModel } from '../product-list/product-list.component';
import { MatIconModule } from '@angular/material/icon';


@Component({
  selector: 'app-detail-product',
  standalone: true,
  imports: [MatIconModule, MatDialogModule],
  templateUrl:'./detail-product.component.html',
  styleUrls:[ './detail-product.component.scss']
})
export class DetailProductComponent {
  products: ProductModel[] | any = [];
  constructor(@Inject(MAT_DIALOG_DATA) public dialogData: ProductModel, public dialogRef: MatDialogRef<DetailProductComponent>){

  }
  close(){
    this.dialogRef.close()
  }

}
