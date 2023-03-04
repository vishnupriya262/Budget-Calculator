
function budget(){

   
 
     var total=0; 
     var savings=0;
     var amt = document.getElementById("amt").value;
 
     var fud = document.getElementById("fud").value;
     var uti = document.getElementById("uti").value;
     var insur = document.getElementById("insur").value;
     var insur = document.getElementById("insur").value;
     var rent = document.getElementById("rent").value;
     
 
     total = amt-fud-uti-insur-rent;
     savings= total*0.30;
     
 
     document.getElementById("result").innerHTML = 'Total Expence:'+total;
     document.getElementById("result_savings").innerHTML = 'You Saved:'+savings;
 
   
 
    
 } 
 
