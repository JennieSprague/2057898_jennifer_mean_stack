var blog = {
  title: null,
  articles: null,
  image: null
}

function addBlog() {
  console.log("added blog");

  blog.title = document.getElementById("title").value;
  blog.articles = document.getElementById("articles").value;
  blog.image = document.getElementById("image").files[0];
  //const selectedFile = document.getElementById('input').files[0];

  var blogStart = document.getElementById('postBlog');
  //blogStart.insertAdjacentHTML('beforeend',"<h2 class='section-heading'>blog.title</h2><p>blog.articles</p>")
  /*" <!--<img class='img-fluid' src='blog.image' /></a>" -->*/
  blogStart.insertAdjacentHTML("beforeend", blog.title);
  blogStart.insertAdjacentText("beforeend", blog.articles);
  /*let cardContainer = null;
  let card = document.createElement('div');
  card.className = 'card shadow cursor-pointer';

  let cardBody = document.createElement('div');
  cardBody.className = 'card-body';

  let title = document.createElement('h5');
  title.innerText = blog.title;
  title.className = 'card-title';

  cardBody.appendChild(title);
  card.appendChild(cardBody);
  cardContainer.appendChild(card)
  */

  //var s = document.getElementById("mySpan");
  //var h = document.getElementById("myH2");
  //make card
  var img = document.createElement('img');
  img.src = blog.image.value;
  //insert card
  blogStart.insertAdjacentElement("beforeend", img);
  //blogStart.insertAdjacent("beforeend", blog.image.value);
  //blog.image.src = URL.createObjectURL(event.target.files[0]);
  //blog.image.src = url.createObjectURL()
}
