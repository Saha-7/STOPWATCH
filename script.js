var hr=0;
var min=0;
var sec=0;
var count=0;

var timer=false;



function start(){
    timer=true;
    stopwatch();

}
function stop(){
    timer=false;

}
function reset(){

    timer=false;
    hr=0;
    min=0;
    sec=0;
    count=0;


    document.getElementById("count").innerHTML="00";
    document.getElementById("sec").innerHTML="00";
    document.getElementById("min").innerHTML="00";
    document.getElementById("hr").innerHTML="00";


}
function stopwatch(){
    if(timer==true){

        count=count+1;                 // when start button clicked the count digit will start to increase.

        if(count==100){
            sec=sec+1;                  // when count reached 100 seconds digit will plus by 1
            count=0;
        }

        if(sec==60){
            min=min+1;                  // when sec reached 60 seconds  minutes digit will plus by 1
            sec=0;
        }

        if(min==60){
            hr=hr+1;                  // when minute reached 60 hour digit will plus by 1 & min & sec digit will be again start from 0.
            min=0;
            sec=0;
        }

        var hrString=hr;
        var minString=min;
        var secString=sec;                  // converting it into string
        var countString=count;

        if(hr<10){
            hrString="0"+hrString;
        }
        if(min<10){
            minString="0"+minString;
        }
        if(sec<10){
            secString="0"+secString;
        }
        if(count<10){
            countString="0"+countString;
        }


    



        document.getElementById("count").innerHTML=countString;
        document.getElementById("sec").innerHTML=secString;
        document.getElementById("min").innerHTML=minString;
        document.getElementById("hr").innerHTML=hrString;


        setTimeout( "stopwatch()",10)           // 
    }

}