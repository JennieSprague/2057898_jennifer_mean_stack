var newBlog = {
    title : null,
    articles : null,
    image : null
}

function addBlog(){
  console.log("added blog");

  blog.title = document.getElementById("title").value;
  blog.articles = document.getElementById("articles").value;
  blog.image = document.getElementById("image").value;



}
