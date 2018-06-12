// $("button").on("click", function(){
//   var  value = this.id;
//   document.getElementById('text').innerHTML = value;
//   console.log(value);
//   return value;
//   value = eval(value);
//   console.log(value);
// });
var text = document.getElementById('text')
$("button").on("click", function(){
  var value = prompt("please inter the calculation");
  text.value = value;
  var sum = eval(value);
  text.value = sum;
});

// const button = document.getElementsByClassName("btn");
// button.addEventListener("click", function(event){
//   var value = this.id;
//   console.log("hello");
//   document.getElementById('text').setAttribute("value", value);
//
// });
