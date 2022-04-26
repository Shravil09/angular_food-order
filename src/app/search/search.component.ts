import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  searchItem:string = '';

  //1. Inject ActivatedRoute
  //2. Inject Router
  constructor(private route:ActivatedRoute, 
              private router:Router) { }

  ngOnInit(): void {

    this.route.params.subscribe(params =>{
      if(params['searchItem'])
      this.searchItem = params['searchItem'];
    })

  }
    // Creating search method
    // Calling with button by click event
    search():void{
      if(this.searchItem){
        this.router.navigateByUrl('/search/' + this.searchItem)
      }
    }

}
