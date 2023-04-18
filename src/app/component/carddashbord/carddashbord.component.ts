import { Component, Input, OnInit } from '@angular/core';
import { Iproduct } from 'src/app/model/product';

@Component({
  selector: 'app-carddashbord',
  templateUrl: './carddashbord.component.html',
  styleUrls: ['./carddashbord.component.scss']
})
export class CarddashbordComponent implements OnInit {
  @Input() productinfo!:Array<Iproduct>

  // productsArray1:Array<Iproduct>=[
  //   {
  //     Pname:"Samsung",
  //     Pdes:"s22 ultra",
  //     Pcatg:"Catloge"
  //   }
  // ]
  constructor() { }

  ngOnInit(): void {
    console.log(this.productinfo)
  }

}
