const loadText = document.querySelector('.loading__text')
const bg = document.querySelector('.bg');

let load = 0 // I have a load which will start at 0 then go to 100

let int = setInterval(blurring, 30) // Setting to interval, want to set the blurring function and then run every 30 milisecond

function blurring(){ // I have created a function and called it blurring 
     load++ // I am incrementing load with the ++ which will add 1

     if (load > 99) { //if load is less than 99 then we want it to stop, we stop it by using the clearInteval, we want to pass int as it has setInterval
      clearInterval(int)
     }
      // here we wil write the things that we want to change, I am going to change the text, I get the loadText from line 1
      loadText.innerText = `${load}%`
      loadText.style.opacity = scale(load, 0, 100, 1, 0 ) // we pass in load, as in pass the amount of time it takes the stuff to happen, when the percentage is going from 0 - 100 we want to opacity to from 1 - 0
      bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)` //inside blur we are adding the variable syntax and call scale, we want to scale the load which we did with opacity, from 0 - 100%, which is the load and we want the blur to go from 30 - to 0px
}

const scale = (num, in_min, in_max, out_min, out_max) => {
 return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
}


// https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers for line 