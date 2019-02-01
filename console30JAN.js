const subtraction = (firstParameter, secondParameter) => {
return console.log(firstParameter - secondParameter)
} 
subtraction(10,6);      

var fibonacci = (i) => {
    console.log (i,i+i,i++)
    console.log('The number is' +i+ "<br>")
    } 
let movieList =['Best Movie - Lord of the Rings', 'Movie 2 - Avengers', 'Movie 3 - Matrix'];
movieList[2]= 'Vanilla Latte'
console.log(movieList);

let favouritesites =[' 1 - wearecodenation','2 - youtube','3 - amazon'];
console.log(favouritesites)
favouritesites.push ('4 - instagram','5 - google');
console.log(favouritesites)
favouritesites.pop ();
console.log(favouritesites)
favouritesites[2]=' 3 - NOTAMAZON';
console.log(favouritesites)
