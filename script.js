for (i=0; i<100; i++){
fetch('https://jsonplaceholder.typicode.com/posts/'+i)
  .then((response) => response.json())
  .then((json) => console.log(json))
}


  var post =fetch('https://jsonplaceholder.typicode.com/posts/1') .then((response) => response.json());




post.then(value => {document.getElementById("PostPlace").innerHTML = "Id uzytkownika:<br> " +value.userId +"<br><br> tytuł: <br> " + value.title + "<br><br>zawartość: <br> " + value.body});
  
