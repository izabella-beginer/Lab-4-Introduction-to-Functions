function greet(name= 'Izabella'){
 return console.log (`Hello ${name}`);
}
greet();
greet('Anna')
greet('Henry')

function addNumbers(num1,num2) {
    return num1 + num2;
}
let result = addNumbers(8, 8);
console.log(addNumbers.apply(this, [8, 8])); // 16

let x=10;
console.log();//global value x',x);
function changeValue(){
 let x =15;
}
changeValue();
console.log(15);

function outerFunction() {
    let count = 0;
    function innerfunction() {
      let count = 3;
      return count
    }
console.log(count,1,2,3);
}
let myClosure = outerFunction();{
(myClosure);//count1
(myClosure);//count2
(myClosure);//count3
}