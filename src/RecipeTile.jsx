import React, { useState } from 'react';
import './recipeTile.css';
import './RecipeDetail';
import RecipeDetail from './RecipeDetail';

function RecipeTile({recipe}) {
  const {ingredients} = recipe.recipe;
  const [ingredient, setIngredient] = useState(false);
  
  return (
    <div id='recipeTile'  >
     <img className='image' src={recipe["recipe"]['image']} 
      />
       <h4 className='info'>{recipe['recipe']['label']} Simple Recipe</h4>

       {
       ingredient ? 
       <div className='ingri' onClick={() => setIngredient(false)}>
       <RecipeDetail  
        ingredients={ingredients} />
         <button className='url'
                    type='submit'
                    onClick={()=> {
                        window.open(recipe['recipe']['url']) 
                    }}>COMPLETE RECIPE</button>
        </div>
       :
       <></>
       }
         <button className='btn' 
                  type='submit' 
                  onClick={() => setIngredient(!ingredient)} >
                              INGREDIENTS
          </button>
      </div>  
  )
}
// onClick={() => {
//   setIngredient(true)
//     }}
// <p id='ingredientLines'>{recipe['recipe']['ingredientLines']}</p> 
//  <ul id='ingredientLines' onClick={() => {
      //   setIngredient(false)
      //     }}>
      //       <li>{recipe['recipe']['ingredients']}</li>
      //   </ul> 
export default RecipeTile