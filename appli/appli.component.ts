import { Component, OnInit } from '@angular/core';
import { MobileService } from '../mobile.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-appli',
  templateUrl: './appli.component.html',
  styleUrls: ['./appli.component.css'],
  providers: [MobileService],
})
export class AppliComponent implements OnInit{

  constructor(private ms: MobileService) {
  } 

    i:any=null;

    mobiles:any = null;
    formHeader = "Add Item";
    itemName = "";
    quantity: Number;
    price: Number;
    totalCost: Number;
    showForm = false;
    id:Number=null;
  
  ngOnInit(): void {
    this.getMobiles()
  }

  getMobiles() {
    this.ms.fetchMobiles().subscribe(
      (data) => {
        this.mobiles = data

      },
      (error) => {
        console.log("error")
      }
    )
  }

  deleteMobile(id:any) {
    this.ms.deleteMobile(id).subscribe(
      (res) => {

        this.getMobiles()

      }
    )
  }

  openForm(data:any = null) {
    this.clearForm();
    this.showForm = true;
    if (data) {
      this.itemName = data.ItemName;
      this.quantity = data.Quantity;
      this.price = data.Price;
      this.totalCost = data.TotalCost;
      this.id = data.id;
      this.formHeader = "Edit Item"

      this.i=data.id;
    }
    else {
      this.id = null;
      this.formHeader = "Add Item"

    }
  }

  closeForm() {
    this.showForm = false;
    this.clearForm()
  }

  clearForm() {
    this.itemName = null;
    this.quantity = null;
    this.price = null;
    this.totalCost = null

  }

  saveMobile() {

    this.showForm = false;

    let body:any = {
      ItemName: this.itemName,
      Quantity: this.quantity,
      Price: this.price,
      TotalCost: this.totalCost
    }

    if (this.id) {
      body.id = this.id;
      this.ms.putMobile(body,this.i).subscribe(
        (res) => {
          this.getMobiles()
        },

      )
    }

    else {
      this.ms.postMobile(body).subscribe(
        (res) => {
          this.getMobiles()
        },
      )
    }

  }

}










