function myFunction() {
    var title = document.getElementById("addTitle");
    var article = document.getElementById("addArticle");
    var mainContent = document.getElementById("mainContent");

    var x = document.forms["myform"]["tblog"].value;
    if (x == "") {
    alert("Title must be filled out");
    return false;
  }

  var x = document.forms["myform"]["tarea"].value;
    if (x == "") {
    alert("Content must be filled out");
    return false;
  }

   var div = document.createElement("div");
    div.className = "container card blog-post";

    var h2 = document.createElement("h2");
    h2.className = "blog-post-title";
    h2.innerHTML = title.value;
    div.appendChild(h2);

    var p2 = document.createElement("p");
    p2.innerHTML = article.value;
    div.appendChild(p2);

    mainContent.prepend(div);

  }

  function myCancel() {
    document.getElementById("myForm").reset();
}