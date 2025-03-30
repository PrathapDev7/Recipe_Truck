import Axios from 'axios';
import { useState , useEffect } from 'react';
import './App.css'
import RecipeTile from './RecipeTile';
import Ghost from './Ghost';
import Bg from "./bg.jpg";
import Error from "./error.gif";
import Animation from "./Animation.gif";


function App() {

  const YOUR_APP_ID = "166f7756";
  const YOUR_APP_KEY = "bbb8b46006a5a7bac6c159ab73d51653";

  const [query, setQuery] = useState("");
  const [Recipes, setRecipes] = useState([]);
  const [mealType, setMealType] = useState("Lunch");
  const [Health, setHealth] = useState("alcohol-free");
  const [diet, setDiet] = useState("balanced");
  const [dishtype, setDishType] = useState("Main course");
  const [cuisineType, setCuisineType] = useState("Indian");
  const [calories,setCalories] = useState("10-5000");
  const [loading,setLoading] = useState(false);
  const [error,setError] = useState(false);
  


async function getRecipe() {
  var result = await Axios.get(url);
  setRecipes(result.data.hits);
  console.log(url);
  
}

const submit = (e) => {
  e.preventDefault();
  getRecipe();
  setError(true);
  document.getElementById("gif").style.display = "none";
}
  
  var url =  `https://api.edamam.com/search?q=${query}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&from=0&to=100&Health=${Health}&mealType=${mealType}&Diet=${diet}&dishType=${dishtype}&cuisineType=${cuisineType}&calories=${calories}`;

  
  
  return (
    <div className="app">
         <img id='bg' src={Bg} alt=""/>
        <h1 className="font" > FOOD RECIPES </h1>
        
        <div className="custom-shape-divider-top-1648455116">
          
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
    <linearGradient id="linear-gradient">   
        <stop offset="0%" stopColor="#FE8833" stopOpacity="100%" />
        <stop offset="100%" stopColor="#F03B93" stopOpacity="100%" />
    </linearGradient>
        <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" className="shape-fill"></path>
        <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" className="shape-fill"></path>
        <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" className="shape-fill"></path>
    </svg>
</div>

        
        <form className='app_search' onSubmit={submit}>
            <input type="search" 
              className='app_input'
              placeholder='Enter ingredient like Mutton, Fish, Apple, Shawarma,...' 
              onChange={(e) => setQuery(e.target.value)} 
              value={query}
              required/>

            <input type="submit"
            onClick={()=> {
                setLoading(true)
                setTimeout(() => {
                  setLoading(false)
                },5000)
            }} 
            
              className='app_submit'
              value="Search"/>

            <div className="wrapper">
                <div className="i"> 
                  <span className='label_mealtype'>Meal Type</span>
                    <select className='app_healthLabels'  onChange={(e) => { 
                        setMealType(e.target.value);
                      }}>
                        <option value="Lunch" >Meal Time</option>
                        <option value="Lunch"  >Lunch &emsp;&emsp; </option>
                        <option value="Breakfast" >Breakfast</option>
                        <option value="Dinner"  >Dinner</option>
                        <option value="Snack"  >Snack</option>
                        <option value="Teatime"  >Teatime</option>             
                      </select>
                  </div>

                  <div className="i"> 
                  <span className='label_calories'>Calories</span>
                    <select className='app_healthLabels'  onChange={(e) => { 
                        setCalories(e.target.value);
                      }}>
                         <option value="10-100"  >Calories</option>
                        <option value="10-5000"  >Any&emsp;&emsp;</option>
                        <option value="10-100"  >Below 100</option>
                        <option value="100-200" >100 - 200</option>
                        <option value="100-300"  >100 - 300</option>
                        <option value="100-500"  >100 - 500</option>
                        <option value="500-1000"  >500 - 1000</option> 
                        <option value="1000-2000"  >1000 - 2000</option>
                        <option value="2000-5000"  >Above 2000</option>            
                        
                      </select>
                  </div>

                  <div className="i"> 
                  <span className='label_dishtype'>Dish Type</span>
                    <select className='app_healthLabels'  onChange={(e) => { 
                        setDishType(e.target.value);
                      }}>
                        <option value="Main course"  >Dish Type</option>
                        <option value="Main course"  >Main course</option>
                        <option value="Starter" >Starter</option>
                        <option value="Biscuits and cookies"  >cookies</option>
                        <option value="Cereals"  >Cereals</option>
                        <option value="Bread"  >Bread</option>
                        <option value="Condiments and sauces"  >Condiments</option>
                        <option value="Drinks" >Drinks</option>
                        <option value="Desserts"  >Desserts</option>
                        <option value="Egg"  >Egg</option>
                        <option value="Omelet"  >Omelet</option> 
                        <option value="Pancake"  >Pancake</option>
                        <option value="	Preps">	Preps</option>
                        <option value="Preserve"  >Preserve</option>
                        <option value="Salad"  >Salad</option>
                        <option value="Sandwiches"  >Sandwiches</option>      
                        <option value="Soup"  >Soup</option>
                            
                      </select>
                  </div>

                  <div className="i"> 
                  <span className='label_diet'>Diet</span>
                    <select className='app_healthLabels'  onChange={(e) => { 
                        setDiet(e.target.value);
                      }}>
                        <option value="balanced"  >Diet</option>
                        <option value="balanced"  >balanced</option>
                        <option value="high-fiber" >high-fiber</option>
                        <option value="high-protein"  >high-protein</option>
                        <option value="low-carb"  >low-carb</option>
                        <option value="low-fat"  >low-fat</option>
                        <option value="low-sodium"  >low-sodium</option>            
                      </select>
                  </div>

                  <div className="i"> 
                  <span className='label_health'>Health</span>
                    <select className='app_healthLabels'  onChange={(e) => { 
                        setHealth(e.target.value);
                      }}>
                         <option value="alcohol-free"  >Health</option>
                        <option value="alcohol-free"  >alcohol-free</option>
                        
                        <option value="dairy-free"  >dairy-free</option>
                        <option value="	egg-free"  >	egg-free</option>
          
                        <option value="gluten-free"  >gluten-free</option>
                        {/* <option value="immuno-supportive"  >immuno-support</option> */}
                        
                        <option value="kidney-friendly"  >kidney-friendly</option>
                        
                        <option value="low-potassium"  >low-potassium</option> 
                        <option value="low-sugar"  >low-sugar</option>
                        <option value="No-oil-added"  >No-oil-added</option>
                        <option value="paleo"  >paleo</option>
                        <option value="peanut-free"  >peanut-free</option> 
                       
                        <option value="pork-free"  >pork-free</option>
                        <option value="red-meat-free"  >red-meat-free</option>
                        
                        {/* <option value="sugar-conscious"  >sugar-conscious</option> */}
                        
                        <option value="vegan"  >vegan</option>
                        <option value="vegetarian"  >vegetarian</option> 
                        <option value="wheat-free"  >wheat-free</option>
                      </select>
                  </div>

                  <div className="i"> 
                  <span className='label_cuisineType'>Cuisine Type</span>
                    <select className='app_healthLabels'  onChange={(e) => { 
                        setCuisineType(e.target.value);
                      }}>
                        <option value="Indian"  >Indian</option>
                        <option value="American" >American</option>
                        <option value="Asian"  >Asian</option>
                        <option value="British"  >British</option>
                        <option value="Caribbean"  >Caribbean</option>
                        <option value="	Central Europe"  >	Central Europe</option>
                        <option value="Chinese" >Chinese</option>
                        <option value="Eastern Europe"  >Eastern Europe</option>
                        <option value="	French"  >	French</option>
                        <option value="	Italian"  >	Italian</option> 
                        <option value="Japanese"  >Japanese</option>
                        {/* <option value="	Mediterranean">	Mediterranean</option> */}
                        <option value="Mexican"  >Mexican</option>
                        <option value="Middle Eastern"  >Middle Eastern</option>
                        <option value="Nordic"  >Nordic</option>      
                        <option value="South American"  >South American</option>
                        <option value="South East Asian"  >SE Asian</option>
                        <option value="Kosher"  >Kosher</option>         
                      </select>
                  </div>


            </div>
        </form>
       
        <img id='gif' src={Animation} alt="" />
        {
       loading ?
        <Ghost/>
        : 
        <div className='app_recipe '>
          {Recipes.map(recipe => {
            return <RecipeTile recipe={recipe}/>
            
          })
          }
        </div>
        }
        {error ? <img className='error' src={Error} alt="" /> : <></>
        }
          
    </div>
  )
}

export default App


//https://api.edamam.com/search?q=chicken&app_id=1673ddbb&app_key=b8308117349f8bce7e6ccc6a31113606&from=0&to=3&calories=591-722&health=alcohol-free