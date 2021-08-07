var blog = {
  title: null,
  articles: null,
  image: null
}

function addBlog() {
  console.log("added blog");
  var blogStart = document.getElementById('postBlog');


  blog.title = document.getElementById("title").value;
  var title_text = document.createTextNode(blog.title);
  blog.articles = document.getElementById("articles").value;

  blogStart.insertAdjacentHTML("beforeend", blog.title);
  blogStart.insertAdjacentHTML("beforeend", '<br/><br/>')
  blogStart.insertAdjacentText("beforeend", blog.articles);
  blogStart.insertAdjacentHTML("beforeend", '<br/><br/>')


  const list = document.createElement("ul");
  const li = document.createElement("li");
  list.appendChild(li);
  var img = document.createElement("img");
  img.src = URL.createObjectURL(document.getElementById('image').files[0]);
  img.height = 300;
  img.onload = function() {
    URL.revokeObjectURL(this.src);
  }

  li.appendChild(img);
  blogStart.appendChild(list);

}
