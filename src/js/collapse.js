var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
      content.style.border = "none";
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
      content.style.border = content.border + "3px solid";
    }
  });
}