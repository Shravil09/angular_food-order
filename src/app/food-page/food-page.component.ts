import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Foods } from '../shared/models/Food';

@Component({
  selector: 'app-food-page',
  templateUrl: './food-page.component.html',
  styleUrls: ['./food-page.component.css']
})
export class FoodPageComponent implements OnInit {

  food!:Foods;

  constructor(private activatedRoute : ActivatedRoute) { 
    
  }

  ngOnInit(): void {
  }

}
