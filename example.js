/* 
* @Author: anchen
* @Date:   2015-08-31 21:59:12
* @Last Modified by:   anchen
* @Last Modified time: 2015-08-31 23:29:28
*/
var mood="happy",age=33;
var year=2010;
var message="The year is ";
message+=year;
var count=3;
/*while(count<11){
alert(count);
count++;
}*/
/*alert(message);
alert(age);*/
function convertToCelsius(temp){
    var result=temp-32;
    result=result/1.8;
    return result;
}
var temp_fahrenheit=95;
var temp_celsius=convertToCelsius(temp_fahrenheit);
alert(temp_celsius);
$(document).ready(function(){
    alert(mood);
    alert(age);
});