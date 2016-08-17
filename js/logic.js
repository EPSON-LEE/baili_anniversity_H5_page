/*logical sequensce*/

var mySwiper = new Swiper('.swiper-container',{
    mode:'vertical',
    loop:'true',
    //noSwiping:true,
});

var $ = function(id){
    return document.getElementById(id);
}
function touchEvent(obj,pageIndex){
    obj.ontouchstart = function(e){
        mySwiper.swipeTo(pageIndex,0,false);
    }

    obj.onclick = function(e){
        mySwiper.swipeTo(pageIndex,0,false);
    }
}
touchEvent($('first-tips'),3);
touchEvent($('go-to-share'),5);

touchEvent($('go-to-record'),6);
touchEvent($('go-to-end'),5);


touchEvent($('go-to-tips'),3);
touchEvent($('go-to-share2'),5);

var timeOutEvent = 0;


function longPress(){
    $('left-cd').className = "left-cd-move";
    $('right-cd').className = "right-cd-move";
}
$("start-press-button").ontouchstart = function(e){

    document.getElementById("start-press-button").setAttribute("src","./img/first-page/finish-button.png");
    document.getElementById("left-cd").className = "left-cd-move";
    document.getElementById("right-cd").className = "right-cd-move";
    document.getElementById("sound-cloud").style.visibility = "visible";
    document.getElementById("arrow-2").style.visibility = "visible";

    e.preventDefault();

}

$("start-press-button").ontouchend = function(e){
    document.getElementById("start-press-button").setAttribute("src","./img/first-page/start-press-button.png");
    document.getElementById("left-cd").className = "";
    document.getElementById("right-cd").className = "";
    document.getElementById("sound-cloud").style.visibility = "hidden";
    document.getElementById("arrow-2").style.visibility = "hidden";
    e.preventDefault();
}
