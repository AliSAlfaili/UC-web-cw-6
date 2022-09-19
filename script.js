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
    if(desc=="لديك نقص في الوزن"){
    document.getElementById('result').style.color='Orange'
    } else if(desc=="وزنك صحي"){
    document.getElementById('result').style.color='Green'
} else if(desc=="لديك زيادة في الوزن"){
    document.getElementById('result').style.color='Red'
}
document.getElementById("result").innerText=desc + bmiResult;
}