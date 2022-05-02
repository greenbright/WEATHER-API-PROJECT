'use strict'

const submitBtn = document.querySelector('.submit-btn');
const formBox = document.querySelector('.form-box');
const checkLocation = document.querySelector('.check-location');
const inputTxt = document.querySelector('.input-txt');
const weatherRender = document.querySelector('.weather');
const dataOutput = document.querySelector('.data');

// MAKING THE AN API CALL 


const showWeather = async function(){
    try{
      //Loading weather data
      const res = await
       fetch(`https://goweather.herokuapp.com/weather/${inputTxt.value}`);
       //https://fonts.googleapis.com/css2
    
    const data = await res.json();
    // Checking errors 
    if(!res.ok) throw new Error(`${data.message} (${res.status})`) 
    console.log(data);
    console.log(res);
   //destructuruing to obtain data
   let temp =data.temperature;
   let wind =data.wind;
   let desc =data.description;
   let forecast =data.forecast;
  console.log(forecast);
//Rendering data to UI
const html = 

`<span class="temp">Temp:${temp}</span>
<p>Wind:${wind}</p>
<h3>${desc}</h3><p></p>
${forecast.map(cast=>{
  return `<h4>${cast.day}</h4><hr>
  <h4>${cast.temperature}</h4><hr>
  <h4>${cast.wind}</h4>
  `;
}).join('')}
`;
weatherRender.insertAdjacentHTML('afterbegin',html);
dataOutput.textContent= '';

    
    } catch(err){
    console.log(err)
    }
  }

 
  checkLocation.addEventListener('click', function(){
    formBox.classList.remove('hidden');
    console.log('am logging')
})
  submitBtn.addEventListener('click', function(e){
    e.preventDefault()
    showWeather();
  })
  
  //AN ASYNC FUNCTION RETURNS A PROMISE THAT WE NEED TO WAIT
  /* let {recipe} = data.data;
      recipe ={
        id: recipe.id,
        title: recipe.title,
        publisher: recipe.publisher,
        sourceUrl : recipe.source_url,
        image: recipe.image_url,
        servings:recipe.servings,
        cookingTime : recipe.cooking_time,
        ingredients: recipe.ingredients,
      };
      console.log(recipe);*/

      