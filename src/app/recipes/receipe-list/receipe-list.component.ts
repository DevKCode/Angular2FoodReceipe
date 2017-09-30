import { Component, OnInit } from '@angular/core';

import { Receipe } from '../../receipe';
@Component({
  selector: 'app-receipe-list',
  templateUrl: './receipe-list.component.html',
  styleUrls: ['./receipe-list.component.css']
})
export class ReceipeListComponent implements OnInit {
  recipes: Receipe[] = [new Receipe('Pasta ', 'Amazing Asian food', 'https://images.pexels.com/photos/5938/food-salad-healthy-lunch.jpg?h=350&auto=compress&cs=tinysrgb'),
  new Receipe('Rice', 'Asian Dish', 'https://images.pexels.com/photos/62097/pexels-photo-62097.jpeg?h=350&auto=compress&cs=tinysrgb')
  ];
  constructor() { }

  ngOnInit() {
  }

}
