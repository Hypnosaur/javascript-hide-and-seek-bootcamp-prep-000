function getFirstSelector(selector){
  return document.querySelector(selector)
}

function nestedTarget(){
  var nested = document.getElementById("nested");
  var target = nested.querySelector('.target');
  return target;
}

function increaseRankBy(n){
   var ranked = document.querySelectorAll(".ranked-list li")
  for(var i = 0; i < ranked.length; i ++){
    ranked[i].innerHTML = parseInt(ranked[i].innerHTML) + n
  }
}

function deepestChild() {
  var deep = document.querySelectorAll("#grand-node div")
  var deepest = deep[deep.length-1]
  return deepest
}