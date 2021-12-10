var CAR_FORWORD_SPEED = 120;  //the smaller the digit, the faster the car
var CAR_UPDOWN_SPEED = 500;
var carLocation = 80; //judge the location of car to avoid out of bound
var GAME_TOUGH = [8,300];// first one=>random num, second=>interval time
var obstacles = ["jsgame/img/building.png","jsgame/img/cow.png","jsgame/img/dog.png","jsgame/img/fox.png",
                 "jsgame/img/frog.png","jsgame/img/han.png","jsgame/img/horse.png","jsgame/img/mouse.png",
                "jsgame/img/penguin.png","jsgame/img/present.png"];
var isGameOn = true;
function lineOneMoving(speed){
    var $parent = $(".l1 img").parent();
    var offset = $(".l1 img").offset();
    $(".l1 img").animate({left:"-="+speed+"px"},50,function(){
        lineOneMoving(speed);
    }); 
    if (offset.left>60 && offset.left<190) {     //test if collide
        var carOffset = $("#car").offset();
        if (carOffset.top>60 && carOffset.top<160 && isGameOn) {
            gameOver();
        }
    }
    if(parseInt($(".l1 img").css("left"))<-1400){ 
        $(".l1 img").remove();
        createImgOnLine($parent);
        speed = createSpeed();
    }
}

function lineTwoMoving(speed){
    var $parent = $(".l2 img").parent();
    var offset = $(".l2 img").offset();
    $(".l2 img").animate({left:"-="+speed+"px"},50,function(){
        lineTwoMoving(speed);
    }); 
    if (offset.left>60 && offset.left<190) {     //test if collide
        var carOffset = $("#car").offset();
        if (carOffset.top>238 && carOffset.top<338 && isGameOn) {
            gameOver();
        }
    }
    if(parseInt($(".l2 img").css("left"))<-1400){  
        $(".l2 img").remove();
        createImgOnLine($parent);
        speed = createSpeed();
    }
}

function lineThreeMoving(speed){
    var $parent = $(".l3 img").parent();
    var offset = $(".l3 img").offset();
    $(".l3 img").animate({left:"-="+speed+"px"},50,function(){
        lineThreeMoving(speed);
    }); 
    if (offset.left>60 && offset.left<190) {     //test if collide
        var carOffset = $("#car").offset();
        if (carOffset.top>408 && carOffset.top<508 && isGameOn) {
            gameOver();
        }
    }
    if(parseInt($(".l3 img").css("left"))<-1400){ 
        $(".l3 img").remove();
        createImgOnLine($parent);
        speed = createSpeed();
    }
}

function backgroundMoving(){
    $("#background").animate({left:"-=9px"},50,function(){
        backgroundMoving();
    }); 
}

function createSpeed(){
    var speed;
    var normalSpeed = 14;
    var fastSpeed = 20;
    var slowSpeed = 9;
    var superFast = 28;
    var num = parseInt(10*Math.random());
    if (num<=1){
        speed = slowSpeed;
        //alert("slow");
    } else if (num>1 && num<=5) {
        speed = normalSpeed;
        //alert("normal");
    } else if (num>5 && num<= 8) {
        speed = fastSpeed;
        //alert("fast");
    } else if (num === 9) {
        speed = superFast;
        //alert("superfast");
    } else {
        //alert("wrong");
    }
    return speed;
}

function jump(){        //the car up and down

    $("#car").animate({top:"-=8px"},CAR_FORWORD_SPEED,function(){
        $("#car").animate({top: "+=8px"},CAR_FORWORD_SPEED/3);
    });
}

function createImg(element,url) {
    $(element).empty();
    $(element).append('<img id="myimg" src="'+url+'" />');
    $(element).find("img").css({position:"relative" ,left:0});
}

function createImgOnLine(n) {
    var imgNum = parseInt(Math.random()*10); //0~9
    var s= obstacles[imgNum];
    createImg(n,s);
}

function gameOver() {
   alert("Hey, you hit the obstacle~! \nYour score is "+timedCount());
   $("body").replaceAll();
   isGameOn = false;
   window.location.href=window.location.href;
}

var c=0;
function timedCount() {              //count the time
   $("#clock").text(c);
   c=c+1;
   setTimeout("timedCount()",150);
   return c;
}

$(document).ready(function(){
    $("#clock").text(0);
    createImgOnLine(".l1");
    createImgOnLine(".l2");
    createImgOnLine(".l3");
    $("#button").click(function(){ 
        $("#button").hide();
        alert("Try to avoid all the obstacles! \nIf you collide with it the game will be over~ \n W -> UP, S -> DOWN");
        timedCount();
        window.setInterval('jump()',CAR_FORWORD_SPEED*5.5);
        backgroundMoving();
        lineOneMoving(createSpeed());
        lineTwoMoving(createSpeed());
        lineThreeMoving(createSpeed());
    });
    var keyForUp = true;
    var keyForDown = true;
    $(document).keydown(function(key){
        if(carLocation>=80 && carLocation <=420) {
            switch(parseInt(key.which,10)) {
                case 87 :
                    if(carLocation>80 && keyForUp){
                        //alert("up");
                        keyForUp = false;
                        $("#wrap").animate({top:"-=170px"},CAR_UPDOWN_SPEED,function(){
                            carLocation = parseInt($("#wrap").css("top"),10);
                            keyForUp = true; // avoid pressing many times
                            //alert("top:"+carLocation);
                        });
                    }
                    break;
                case 83 :
                    if(carLocation<420 && keyForDown){
                        //alert("down");
                        keyForDown = false;
                        $("#wrap").animate({top:"+=170px"},CAR_UPDOWN_SPEED,function(){
                            carLocation= parseInt($("#wrap").css("top"),10);
                            keyForDown = true;
                            //alert("top:"+carLocation);
                        });
                    }
                    break;
                default :
                    break;
            }
        }
    });

});