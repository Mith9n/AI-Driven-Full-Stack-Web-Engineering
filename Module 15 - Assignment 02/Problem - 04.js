
function topRatedRestaurant(restaurants) {
    if(Array.isArray(restaurants) === false || restaurants.length === 0){
        console.log("Invalid");
    }

    let Top_resturent = restaurants[0];

    for(let i = 1 ; i < restaurants.length ;i++){

        if(Top_resturent.rating < restaurants[i].rating){
            Top_resturent = restaurants[i];
        }
    }

    return Top_resturent.name.toUpperCase()

}



console.log(topRatedRestaurant([{name:"Chillox",rating:4.5},{name:"Sultan's Dine",rating:4.8}]));


