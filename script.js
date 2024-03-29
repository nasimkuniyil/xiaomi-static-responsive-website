var activepage = window.location.href;

function activetab(tabtxt){

    if(tabtxt == "phone-header-text"){
        document.getElementById("phone-header-text").style='color:red; border-bottom: 2px solid red ';
        document.getElementById("tv-header-text").style='color:black; border-bottom: none ';
        document.getElementById("tab-header-text").style='color:black; border-bottom: none  ';
        document.getElementById("lifestyle-header-text").style='color:black; border-bottom: none  ';
    }else if(tabtxt=="tv-header-text"){
        document.getElementById("phone-header-text").style='color:black; border-bottom: none ';
        document.getElementById("tv-header-text").style='color:red; border-bottom: 2px solid red ';
        document.getElementById("tab-header-text").style='color:black; border-bottom: none  ';
        document.getElementById("lifestyle-header-text").style='color:black; border-bottom: none  ';
    }else if(tabtxt == "tab-header-text"){
        document.getElementById("phone-header-text").style='color:black; border-bottom: none ';
        document.getElementById("tv-header-text").style='color:black; border-bottom: none ';
        document.getElementById("tab-header-text").style='color:red; border-bottom: 2px solid red  ';
        document.getElementById("lifestyle-header-text").style='color:black; border-bottom: none  ';
    }else if(tabtxt == "lifestyle-header-text"){
        document.getElementById("phone-header-text").style='color:black; border-bottom: none ';
        document.getElementById("tv-header-text").style='color:black; border-bottom: none ';
        document.getElementById("tab-header-text").style='color:black; border-bottom: none  ';
        document.getElementById("lifestyle-header-text").style='color:red; border-bottom: 2px solid red  ';
    }

}