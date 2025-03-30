import React from 'react'
import './recipeDetail.css'

function RecipeDetail({ingredients}) {
  return ingredients.map(ingredient => {
      return (
          <ul className='list'>
              <li>
                  {ingredient.text}
              </li>
          </ul>
      )
  })
}

export default RecipeDetail