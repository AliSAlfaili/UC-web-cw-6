function BMI(weight,height){
return( weight/(height*height));
}
console.log(BMI(90,1.75));
console.log(BMI);
function Status(BMI){
if(BMI<18.5){
    return "لديك نقص في الوزن";
}
else if(BMI>=18.5 && BMI<25 ){
 return "وزنك صحي";
 
}
else if(BMI>=25){
return "لديك زيادة في الوزن";

}
}
function calculate(){
    let weight= document.getElementById("weight").value;

    let height= document.getElementById("height").value;

    let bmiResult= BMI(weight,height);
    let desc= Status(bmiResult);
    document.getElementById("result").innerText=desc + bmiResult;
}
