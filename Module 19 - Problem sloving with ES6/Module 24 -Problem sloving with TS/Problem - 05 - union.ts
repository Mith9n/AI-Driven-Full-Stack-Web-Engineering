type Weather = "sunny" | "rainy" | "cloudy" 
const getWeatherAdvice = (weather :Weather):string=>{
    if( weather ==="sunny") return "Wear sunscreen";
    else if (weather === "cloudy") return "Carry an umbrella";
    return "Bring a light jacket";
}


// console.log(getWeatherAdvice("snowy"));
console.log(getWeatherAdvice("rainy"));