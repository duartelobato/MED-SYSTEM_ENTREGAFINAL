function collapse(element){

element.classList.toggle("active");
var content = element.nextElementSibling;
if (content.style.maxHeight){
  content.style.maxHeight = null;
} else {
  content.style.maxHeight = content.scrollHeight + "px";
} 
}