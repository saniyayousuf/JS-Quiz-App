function checkAns(){
var correctAnswers = 0;
var rightAnswer_1 = document.getElementById('q1-op3');
var q1_op1= document.getElementById("q1-op1");
var q1_op2 = document.getElementById("q1-op2");
var q1_op4 = document.getElementById("q1-op4");
  if( rightAnswer_1.checked == true ){
  correctAnswers++
  alert( "Q1 is correct")
  }
  else {
    alert("Q1 is incorrect") 
  }



var rightAnswer_2 = document.getElementById('q2_op3');
var q2_op1 = document.getElementById("q2_op1");
var q2_op2 = document.getElementById("q2_op2");
var q2_op4 = document.getElementById("q2_op4");
  if( rightAnswer_2.checked == true ){
  correctAnswers++
  alert( "Q2 is correct")
  }
  else {
    alert("Q2 is incorrect") 
  }


  
var rightAnswer_3 = document.getElementById('q3_op2');
var q3_op1 = document.getElementById("q3_op1");
var q3_op3 = document.getElementById("q3_op3");
var q3_op4 = document.getElementById("q3_op4");
  if( rightAnswer_3.checked == true ){
  correctAnswers++
  alert( "Q3 is correct")
  }
  else {
    alert("Q3 is incorrect") 
  }


var rightAnswer_4 = document.getElementById('q4_op2');
var q4_op1 = document.getElementById("q4_op1");
var q4_op3 = document.getElementById("q4_op3");
var q4_op4 = document.getElementById("q4_op4");
  if( rightAnswer_4.checked == true ){
  correctAnswers++
  alert( "Q4 is correct")
  }
  else {
    alert("Q4 is incorrect")
  }  

  
var rightAnswer_5 = document.getElementById('q5_op2');
var q5_op1 = document.getElementById("q5_op1");
var q5_op3 = document.getElementById("q5_op3");
var q5_op4 = document.getElementById("q5_op4");
  if( rightAnswer_5.checked == true ){
  correctAnswers++
  alert( "Q5 is correct")
  }
  else {
    alert("Q5 is incorrect") 
}

var rightAnswer_6 = document.getElementById('q6_op1');
var q6_op2 = document.getElementById("q6_op2");
var q6_op3 = document.getElementById("q6_op3");
var q6_op4 = document.getElementById("q6_op4");
  if( rightAnswer_6.checked == true ){
  correctAnswers++
  alert( "Q6 is correct")
  }
  else {
    alert("Q6 is incorrect") 
}
var rightAnswer_7 = document.getElementById('q7_op2');
var q7_op1 = document.getElementById("q7_op1");
var q7_op3 = document.getElementById("q7_op3");
var q7_op4 = document.getElementById("q7_op4");
  if( rightAnswer_7.checked == true ){
  correctAnswers++
  alert( "Q7 is correct")
  }
  else {
    alert("Q7 is incorrect") 
}

var rightAnswer_8 = document.getElementById('q8_op1');
var q8_op2 = document.getElementById("q8_op2");
var q8_op3 = document.getElementById("q8_op3");
var q8_op4 = document.getElementById("q8_op4");
  if( rightAnswer_8.checked == true ){
  correctAnswers++
  alert( "Q8 is correct")
  }
  else {
    alert("Q8 is incorrect") 
}

var rightAnswer_9 = document.getElementById('q9_op2');
var q9_op1 = document.getElementById("q9_op1");
var q9_op3 = document.getElementById("q9_op3");
var q9_op4 = document.getElementById("q9_op4");
  if( rightAnswer_9.checked == true ){
  correctAnswers++
  alert( "Q9 is correct")
  }
  else {
    alert("Q9 is incorrect") 
}

var rightAnswer_10 = document.getElementById('q10_op2');
var q10_op1 = document.getElementById("q10_op1");
var q10_op3 = document.getElementById("q10_op3");
var q10_op4 = document.getElementById("q10_op4");
  if( rightAnswer_10.checked == true ){
  correctAnswers++
  alert( "Q10 is correct")
  }
  else {
    alert("Q10 is incorrect") 
}

alert("your toatl score is "+ correctAnswers++)
}