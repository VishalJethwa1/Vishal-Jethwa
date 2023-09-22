document.getElementById("c").addEventListener("mouseover", hoverOnCreate, false);
    document.getElementById("c").addEventListener("mouseout", delHoverOnCreate, false);

    document.getElementById("r").addEventListener("mouseover", navItemTwo, false);
    document.getElementById("r").addEventListener("mouseout", delNavItemTwo, false);

    document.getElementById("u").addEventListener("mouseover", navItemThree, false);
    document.getElementById("u").addEventListener("mouseout", delNavItemThree, false);

    document.getElementById("d").addEventListener("mouseover", navItemFour, false);
    document.getElementById("d").addEventListener("mouseout", delNavItemFour, false);

function hoverOnCreate(){
  document.getElementById("r").style.filter = "blur(1px)";
  document.getElementById("u").style.filter = "blur(2px)";
  document.getElementById("d").style.filter = "blur(3px)";
}

function delHoverOnCreate(){
  document.getElementById("r").style.filter = "blur()";
  document.getElementById("u").style.filter = "blur()";
  document.getElementById("d").style.filter = "blur()";
}

function navItemTwo(){
  document.getElementById("c").style.filter = "blur(1px)";
  document.getElementById("u").style.filter = "blur(1px)";
  document.getElementById("d").style.filter = "blur(3px)";
}

function delNavItemTwo(){
  document.getElementById("c").style.filter = "blur()";
  document.getElementById("u").style.filter = "blur()";
  document.getElementById("d").style.filter = "blur()";
}

function navItemThree(){
  document.getElementById("c").style.filter = "blur(3px)";
  document.getElementById("r").style.filter = "blur(1px)";
  document.getElementById("d").style.filter = "blur(1px)";
}

function delNavItemThree(){
  document.getElementById("c").style.filter = "blur()";
  document.getElementById("r").style.filter = "blur()";
  document.getElementById("d").style.filter = "blur()";
}

function navItemFour(){
  document.getElementById("c").style.filter = "blur(3px)";
  document.getElementById("r").style.filter = "blur(2px)";
  document.getElementById("u").style.filter = "blur(1px)";
}

function delNavItemFour(){
  document.getElementById("c").style.filter = "blur()";
  document.getElementById("r").style.filter = "blur()";
  document.getElementById("u").style.filter = "blur()";
}

document.getElementById("title").addEventListener("mouseover", titleHover, false);
document.getElementById("title").addEventListener("mouseout", delTitleHover, false)

function titleHover(){
    document.getElementById("window").style.boxShadow = "10px 10px 150px grey inset";
    document.getElementById("title").style.filter = "blur(5px)";
}

function delTitleHover(){
    document.getElementById("window").style.boxShadow = ""; 
    document.getElementById("title").style.filter = "blur()";
}