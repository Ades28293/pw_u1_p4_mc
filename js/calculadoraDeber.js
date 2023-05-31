
const addInput=(input)=>{
  document.getElementById("input").value +=input;
}

const operacionCalcular=()=>{
  var input= document.getElementById("input").value;
 document.getElementById("input").value=eval(input)
}




