// Q2. Electricity Bill
// Write a JavaScript program that takes the number of electricity units consumed 
// and calculates the bill according to these rules:

// Up to 50 units → Rs. 5 per unit
// 51–100 units → Rs. 7 per unit
// 101–200 units → Rs. 10 per unit
// Above 200 units → Rs. 12 per unit
// Use if...else if...else.

let electricity_unit = 25,
    cost = 0;


if(electricity_unit>=0 && electricity_unit <= 50 ){
    cost = electricity_unit * 5;
}else if( electricity_unit >= 51 && electricity_unit <= 100 ){
    cost = electricity_unit * 7;
}else if( electricity_unit >= 101 && electricity_unit <= 200 ){
    cost = electricity_unit * 10;
}else if( electricity_unit > 200){
    cost = electricity_unit * 12
}else{
    console.log("invalid unit")
}

console.log("Electricity Bill is Rs. "+ cost);


