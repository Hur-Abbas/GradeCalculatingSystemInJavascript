function calculate_result(){
    var a = parseInt( document.getElementById('bookone').value );
    var b = parseInt( document.getElementById('booktwo').value );
    var c = parseInt( document.getElementById('bookthree').value );
    var d = parseInt( document.getElementById('bookfour').value );
    var e = parseInt( document.getElementById('bookfive').value );

     if( a>100 || b>100 || c>100 || d>100 || e>100 ){
      alert('please enter correct value');
     }
     else{
         // obtaining total marks
         var obtain = a+b+c+d+e;
         document.getElementById('obtained').innerHTML = obtain;

         // obtaining percentage
         var percentage = obtain/500*100;
         document.getElementById('obtained_percentage').innerHTML = percentage;

         // obtaining remarks
         if ( a>40 && b>40 || c>40 && d>40 && e>40 ) {
         document.getElementById('remarks').innerHTML = '<span style=" color:#292; font-weight:bold;"> Pass </span>';
         }else if(percentage <= 50){
            document.getElementById('remarks').innerHTML = '<span style=" color:red;font-weight:bold;"> Fail </span>';
         }
         //obtaining grade
         if( percentage>= 85 ){
            document.getElementById('obtaining_grade').textContent = 'A+';
         }
        else if( percentage>= 75 ){
            document.getElementById('obtaining_grade').textContent = 'A';
         }
        else if( percentage>= 60 ){
            document.getElementById('obtaining_grade').textContent = 'B';
         }
        else if( percentage> 40 ){
            document.getElementById('obtaining_grade').textContent = 'C';
         }
         else{
            document.getElementById('obtaining_grade').textContent = 'F';
         }

     }
     return false;
}
