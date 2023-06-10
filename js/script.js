var sliderMain = document.querySelector("#slider-main");
var item = document.getElementsByClassName("item");

function next(){
    sliderMain.append(item[0]);
}
function prev(){
    sliderMain.prepend(item[item.length - 1]);
}
/* setInterval(function(){
    next()
}, 2000)
function foo() {
    next()
    setTimeout(foo, 2500);
  }
  foo();*/