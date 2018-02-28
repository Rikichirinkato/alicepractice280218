/*
for(let i = 100; i >= 0; i--){
    if(i%2 === 0){
        document.write(i + ' ')
    }
}

let i = 1;
while(i<101){
    document.write(i + ' ');
    i++;
}

let cars = ['bmw','audi','zaporozhets'];


let arr =[];
for(let i = 0; i < 100; i++){
    arr.push(i)
}
arr.sort((a,b) =>  b - a )
document.write(arr)


let myCars = {
    everyday: 'marshrutcka',
    offroad: 'legs',
    speed: 'taxi'
}
myCars['dream'] = 'impala';

let counter = 0;
for (let key in myCars){
    counter++;
}
document.write(counter)
*/

function Car(name, color, year){
    this.name = name;
    this.color = color;
    this.year = year;
    this.sound = () => document.write(this.name + ': Chooh, chooh!');
}
let impala = new Car('impala', 'yellow','1967');
impala.mark = 'chevrolet';

document.write(impala.mark)