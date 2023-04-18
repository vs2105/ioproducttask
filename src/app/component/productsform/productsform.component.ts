import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Icatg, Iproduct,  } from 'src/app/model/product';

@Component({
  selector: 'app-productsform',
  templateUrl: './productsform.component.html',
  styleUrls: ['./productsform.component.scss']
})
export class ProductsformComponent implements OnInit {
  productsArray: any;
  @Output() addproductsinfo :EventEmitter<Iproduct>=new EventEmitter<Iproduct>()
  constructor() { }

  ngOnInit(): void {
  }
 
  
  
  addproductdetails(Pname:HTMLInputElement,Pdes:HTMLInputElement,catg:Icatg){
    let obj:Iproduct={
           Pname:Pname.value,
           Pdes:Pdes.value,
           Pcatg:catg
         }
         this.addproductsinfo.emit(obj)
         Pname.value="";
         Pdes.value=""
  }
  addProduct(Pname:HTMLInputElement,Pdes:HTMLInputElement){
    let obj:Iproduct={
       Pname:Pname.value,
       Pdes:Pdes.value,
       Pcatg:"Product"
    }
    this.addproductsinfo.emit(obj)
    Pname.value="";
    Pdes.value=""
  }
  addCatloge(Pname:HTMLInputElement,Pdes:HTMLInputElement){
    let obj:Iproduct={
       Pname:Pname.value,
       Pdes:Pdes.value,
       Pcatg:"Catloge"
    }
    
    Pname.value="";
    Pdes.value=""
  }
}
