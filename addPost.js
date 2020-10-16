function validate() {

  var title = document.getElementById("title").value;
  var blog = document.getElementById("blog").value;

  if(title =="" && blog == "") {
    alert("Fields require input");
    title.style.borderColour ="red";
    blog.style.borderColour ="red";
    event.preventDefault();}
  else if(title=="") {
    alert("Please enter a title");
    title.style.borderColour ="red";
    event.preventDefault();}
  else if(blog=="") {
    alert("Please enter text");
    blog.style.borderColour ="red";
    event.preventDefault();}
}
