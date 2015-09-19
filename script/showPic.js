/* 
* @Author: anchen
* @Date:   2015-09-05 15:57:48
* @Last Modified by:   anchen
* @Last Modified time: 2015-09-12 07:03:20
*/
/*window.onload=function(){
    prepareGallery();
}*/
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
addLoadEvent(prepareGallery);
function prepareGallery(){
    if(!document.getElementById)return false;
    if(!document.getElementsByTagName)return false;
    if(!document.getElementById("imagegallery"))return false;
    var gallery=document.getElementById("imagegallery");
    var links=gallery.getElementsByTagName("a");
    for(var i=0;i<links.length;i++){
        links[i].onclick=function(){
            return !showPic(this);
        }
    }
}
function showPic(whichpic){
    if(!document.getElementById("placeholder"))return false;
    var source=whichpic.getAttribute("href");
    var placeholder=document.getElementById("placeholder");
    placeholder.setAttribute("src",source);
    if(document.getElementById("description")){
    var text=whichpic.getAttribute("title");
    var description =document.getElementById("description");
    description.lastChild.nodeValue=text;}
    return true;
}
/*function countBodyChildren(){
    var body_element=document.getElementsByTagName("body")[0];
    alert(body_element.nodeType);
alert(description.childNodes[0].nodeValue);
}
 //window.onload=countBodyChildren;
 function popUp(winURL){
    window.open(winURL,"popup","width=320,height=480");
 }*/
 addLoadEvent(preparePlaceholder);
function preparePlaceholder(){
    var placeholder=document.createElement("img");
    placeholder.setAttribute("id", "placeholder");
    placeholder.setAttribute("src", "images/wo.jpg");
    placeholder.setAttribute("alt", "my image gallery");
    var description=document.createElement("p");
    description.setAttribute("id", "description");
    var desctext=document.createTextNode("Choose an image");
    description.appendChild(desctext);
    /*document.getElementsByTagName("body")[0].appendChild(placeholder);
    document.getElementsByTagName("body")[0].appendChild(description);*/
    var gallery=document.getElementById("imagegallery");
    /*gallery.parentNode.insertBefore(placeholder,gallery);
    gallery.parentNode.insertBefore(description,gallery);*/
    insertAfter(placeholder,gallery);
    insertAfter(description,placeholder);
}
function insertAfter(newElement,targetElement){
    var parent=targetElement.parentNode;
    if(parent.lastChild==targetElement){
        parent.appendChild(newElement);
    }else{
        parent.insertBefore(newElement,targetElement.nextSibling);
    }
}
