

let count = 0;//for counting the amount of parking

//create array 
var imgs = new Array("car.png","car2.png","car3.png","car4.png");
var imgs2 = new Array ("rickshaw.png","rickshaw2.png","rickshaw3.png");
var imgs3 = new Array ("bus.png","bus2.png","bus3.png");

//function to generate cars
function generateCar(){
    var randNum = Math.floor(Math.random() * imgs.length);//to generate random image
    var image = document.createElement('img');
    var div = document.getElementById('img_append');
    image.src = imgs[randNum];
    div.appendChild(image);  
    document.getElementById("amount").innerHTML = "The total amount of parking is " + count;
    count+=200;


}
//function to generate rickshaws

function generateRickshaw(){
    var randNum = Math.floor(Math.random() * imgs2.length);
    var image = document.createElement('img');
    var div = document.getElementById('img_append');
    image.src = imgs2[randNum];
    document.getElementById("amount").innerHTML ="The total amount of parking is " +count;
    div.appendChild(image);
    count+=300;

}
//function to generate random buses

function generateBus(){
    var randNum = Math.floor(Math.random() * imgs3.length);
    var image = document.createElement('img');
    var div = document.getElementById('img_append');
    image.src = imgs3[randNum]
    div.appendChild(image);
    document.getElementById("amount").innerHTML ="The total amount of parking is "+ count;
    count+=100;
}
