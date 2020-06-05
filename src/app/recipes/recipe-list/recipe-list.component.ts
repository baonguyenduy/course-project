import {Component, EventEmitter, OnInit, Output} from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      'Test recipe',
      'A test recipe',
      'https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX30006678.jpg'
    ),
    new Recipe(
      'Another test recipe',
      'A test recipe',
      'https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX30006678.jpg'
    )
  ];
  @Output() recipeSelected = new EventEmitter<Recipe>();

  constructor() { }

  ngOnInit(): void {
  }

  onRecipeSelected(recipe: Recipe) {
    this.recipeSelected.emit(recipe);
  }
}
