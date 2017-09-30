import { Component, OnInit } from '@angular/core';

import { Ingredient } from '../ingredient';
@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  ingredients: Ingredient[] = [
    new Ingredient('Apple', 5), new Ingredient('oragne', 10), new Ingredient('Banana', 25)
  ];

  constructor() { }

  ngOnInit() {
  }

}
