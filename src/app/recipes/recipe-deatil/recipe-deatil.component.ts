import { Component, OnInit, Input } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-deatil',
  templateUrl: './recipe-deatil.component.html',
  styleUrls: ['./recipe-deatil.component.css']
})
export class RecipeDeatilComponent implements OnInit {
  @Input() recipe: Recipe;

  constructor() { }

  ngOnInit() {
  }

}
