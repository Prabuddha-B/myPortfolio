function scrollUp() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}

function iconBig(){
    document.getElementById("upBtn").style.width = "125px";
    document.getElementById("upBtn").style.height = "125px";
}

function iconSmall(){
    document.getElementById("upBtn").style.width = "40px";
    document.getElementById("upBtn").style.height = "40px";
}

function mouseOn1(){
  document.getElementById("eduTopic1").style.color = "blue";
  document.getElementById("eduTopic1").style.fontSize = "2em";
}

function mouseOn2(){
  document.getElementById("eduTopic2").style.color = "blue";
  document.getElementById("eduTopic2").style.fontSize = "2em";
}

function mouseOn3(){
  document.getElementById("eduTopic3").style.color = "blue";
  document.getElementById("eduTopic3").style.fontSize = "2em";
}

function mouseOff1(){
  document.getElementById("eduTopic1").style.color = "black";
  document.getElementById("eduTopic1").style.fontSize = "1.5em";
}
function mouseOff2(){
  document.getElementById("eduTopic2").style.color = "black";
  document.getElementById("eduTopic2").style.fontSize = "1.5em";
}
function mouseOff3(){
  document.getElementById("eduTopic3").style.color = "black";
  document.getElementById("eduTopic3").style.fontSize = "1.5em";
}

