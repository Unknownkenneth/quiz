/* global $ */
var userin=
$(document).ready(function() {
    $("button").click(function() {
        var name = $("#name").val();
        var techPlacement = "TBD";
        var imgSrc = "https://media.giphy.com/media/22zgHX8aop488/giphy.gif";
        var q1Result = $("#question1").val();
        var q2Result = $("#question2").val();
        var q3Result = $("#question3").val();
        var totalScore;
    });

});
 function num1(){
  if(q1Result === "Tell a teacher"){
        totalScore=3;
}  else if( q1Result=== "I'm tired of this"){
            totalScore=7;
}  else if ( q1Result==="fight back"){
            totalScore=5;
}
  else if( q1Result=== "run away"){
            totalScore=1
}
}
 return  totalScore = num1
 
  function num2(){
  if(q2Result === "Tell a teacher"){
        totalScore=3;
}  else if( q2Result=== "I'm tired of this"){
            totalScore=7;
}  else if ( q2Result==="fight back"){
            totalScore=5;
}
  else if( q2Result=== "run away"){
            totalScore=1
}
}

