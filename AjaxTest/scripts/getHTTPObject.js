/* 
* @Author: anchen
* @Date:   2015-09-12 19:05:24
* @Last Modified by:   anchen
* @Last Modified time: 2015-09-12 19:36:34
*/

/*$(document).ready(function(){
    
});*/
function getHTTPObject(){
    if(typeof XMLHttpRequest=="undefined")
        XMLHttpRequest=function(){
            try{return new ActiveXObject("Msxml2.XMLHTTP.6.0");}
            catch(e){}
            try{return new ActiveXObject("Msxml2.XMLHTTP.3.0");}
            catch(e){}
            try{return new ActiveXObject("Msxml2.XMLHTTP");}
            catch(e){}
            return false;
        }
        return new XMLHttpRequest();
}