import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [MatButtonModule],
  templateUrl:'./navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements OnInit{
  categories:string[] | any = [];
  @Input() inputValue= "";
  @Output() categoryNameChanged = new EventEmitter<string>();

  constructor(private _http: HttpClient){ }
  ngOnInit(){
    this.getCategories();
  }
  getCategories() {
    this._http.get("https://fakestoreapi.com/products/categories").subscribe(response => {
      this.categories = response;
    })

  }
  delete(id:number){
    this._http.get("http://fakestoreapi.com//products/"+id).subscribe(response =>{
      this.categories = response;
    })
  }

  getCategory(category: string): string {
  if(category ==="electronics") return "Elektironik";
  else if (category ==="jewelery") return "Mücevher";
  else if (category ==="men's clothing") return "Erkek Kıyafet";
  else if (category ==="women's clothing") return "Kadın kıyafet";
  else return " ";

}
changeCategory(category: string){
  this.categoryNameChanged.emit(category);
}
}
