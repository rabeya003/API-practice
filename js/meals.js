const loadMeal=(search)=>{
    const url=`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`
    fetch(url)
    .then(res=>res.json())
    .then(data=>displayMeals(data.meals))
}
const displayMeals=meals=>{
    const mealsContainer=document.getElementById('meal-container');
    mealsContainer.innerHTML=``
     meals.forEach(meal => {
        const mealDiv=document.createElement('div')
        mealDiv.classList.add('col')
        mealDiv.innerHTML=`
        <div onclick="loadFoodDetails(${meal.idMeal})" class="card">
              <img src="${meal.strMealThumb}" class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">${meal.strMeal}</h5>
                <p class="card-text">
                  ${meal.strInstructions.slice(0,200)}
                </p> 
              </div>
            </div>
        `
        mealsContainer.appendChild(mealDiv)
     });
}

const searchfood=()=>{
    const searchField=document.getElementById('search-field');
    const seachFieldInnerValue=searchField.value;
    // here call the  main-url function
    loadMeal(seachFieldInnerValue)
    searchField.value='';
}

const loadFoodDetails=(idMeal)=>{
  const url=`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`;
  fetch(url)
  .then(res=>res.json())
  .then(data=>details(data.meals[0]))
}
// Details
const details=meal=>{
const containerDiv=document.getElementById('Detail-container')
containerDiv.innerHTML=``;
const div=document.createElement('div');
div.classList.add('card');
div.innerHTML=`
<img src="${meal.strMealThumb}" class="card-img-top" alt="...">
<div class="card-body">
    <h5 class="card-title">${meal.strMeal}</h5>
    <p class="card-text">${meal.strInstructions.slice(0,200)}</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
</div>                         
`
containerDiv.appendChild(div)
}

loadMeal('a')