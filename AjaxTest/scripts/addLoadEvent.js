/* 
* @Author: anchen
* @Date:   2015-09-12 19:05:24
* @Last Modified by:   anchen
* @Last Modified time: 2015-09-12 19:36:37
*/

/*$(document).ready(function(){
    
});*/
function addLoadEvent(func){
    var oldonload=window.onload;
    if(typeof window.onload!='function'){
        window.onload=func;
    }else{
        window.onload=function(){
            oldonload();
            func();
        }
    }
}