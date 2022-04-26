import { Component, OnInit } from '@angular/core';
import { FoodService } from '../services/food.service';
import { Foods } from '../shared/models/Food';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  foods:Foods[] = [];

  //1. injecting FoodService
  //2. Injecting Routing
  constructor(private fs:FoodService, private router:ActivatedRoute) { }

  ngOnInit(): void {
    //GET data from Service
    //this.foods = this.fs.getAll();

    // to search food item, we are subscribing service which get the data from getAll() from food.service.ts
    this.router.params.subscribe(params =>{
      if(params['searchItem']){
        this.foods = this.fs.getAll().filter(food => food.name.toLowerCase().includes(params['searchItem'].toLowerCase()));
      } 
      else if (params['tag']){
        this.foods = this.fs.getAllFoodByTag(params['tag']);
      }  
      else
        this.foods = this.fs.getAll();
        // It'll return all item 
    })
  }

}
