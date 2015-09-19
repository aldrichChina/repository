/* 
* @Author: anchen
* @Date:   2015-09-11 20:41:33
* @Last Modified by:   anchen
* @Last Modified time: 2015-09-12 05:05:34
*/

/*$(document).ready(function(){
    
});*/
function insertParagraph(text){
    var str="<p>";
    str+=text;
    str+="<p>";
    document.write(str);
}
window.onload=function(){
    /*var testdiv=document.getElementById("testdiv");
    testdiv.innerHTML="<p>This is <em>my</em> content.</p>";
    alert(testdiv.innerHTML);*/
    /*var para=document.createElement("p");
    var testdiv=document.getElementById("testdiv");
    testdiv.appendChild(para);
    var text=document.createTextNode("Hello World!!");
    para.appendChild(text);*/
    /*var info="nodeName: ";
    info+=para.nodeName;
    info+=" nodeType: ";
    info+=para.nodeType;
    alert(para);*/
    var para=document.createElement("p");
    var text1=document.createTextNode("This is ");
    para.appendChild(text1);
    var emphasis=document.createElement("em");
    para.appendChild(emphasis);
    var text2=document.createTextNode("content");
    para.appendChild(text2);
    var text3=document.createTextNode("my ");
    emphasis.appendChild(text3);
    var testdiv=document.getElementById("testdiv");
    testdiv.appendChild(para);
}