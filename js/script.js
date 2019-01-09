/* global $ */
var userin;
var name = $("#name").val();
        var techPlacement = "TBD";
        var imgSrc = "https://media.giphy.com/media/22zgHX8aop488/giphy.gif";
        var q1Result = $("#question1").val();
        var q2Result = $("#question2").val();
        var q3Result = $("#question3").val();
        var totalScore = 0
        
//$(document).ready(function() {
   $("button").click(function() {
        
 

 function q1Result(){
  if(q1Result === "Tell a teacher"){
        totalScore= totalScore + 3;
}  else if( q1Result === "I'm tired of this"){
            totalScore= totalScore + 7;
}  else if ( q1Result ==="fight back" || "Fight back" ){
          totalScore= totalScore + 5;
}
  else if( q1Result === "run away" || "Run away"){
            totalScore= totalScore + 1;
}
totalScore= totalScore +q1Result
}
 
 
  function q2Result(){
  if(q2Result === "Yes"){
          totalScore= totalScore +3;
}  else if( q2Result=== "No "){
          totalScore= totalScore + 7;
}  else if ( q2Result==="Depends"){
           totalScore= totalScore+ 5;
}
  else if( q2Result=== "run away"){
           totalScore= totalScore +1;
}
 
}

 
  function q3Result(){
  if(q3Result === "Yes"){
      totalScore= totalScore +3;
}  else if( q3Result === "No "){
              totalScore= totalScore +7;
}  else if ( q3Result==="Depends"){
              totalScore= totalScore +5;
}
  else if( q3Result=== "Yeah"){
           totalScore= totalScore +1;

}

}


});

   //});
