import { Component } from '@angular/core';
import { Icatg, Iproduct } from './model/product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ioproducttask';
  productsArray:Array<Iproduct>=[
    {
      Pname:"Samsung",
      Pdes:"s22 ultra",
      Pcatg:"Catloge"
    }
  ]


  onproductsadd(product:Iproduct){
    this.productsArray.push(product)
  }
    
}
