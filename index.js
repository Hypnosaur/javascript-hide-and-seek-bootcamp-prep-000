function getFirstSelector(selector){
  return document.querySelector(selector)
}

function nestedTarget(){
  var nested = document.getElementById("nested");
  var target = nested.querySelector('.target');
  return target;
}