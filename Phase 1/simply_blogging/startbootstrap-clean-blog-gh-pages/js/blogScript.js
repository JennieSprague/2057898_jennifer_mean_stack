var blog = {
  title: null,
  articles: null,
  image: null
}

function addBlog() {
  console.log("added blog");
  var blogStart = document.getElementById('postBlog');

  /*
  var title = document.getElementById("title");
  var title_h2 = document.createElement('h2');
  title_h2.appendChild(title.value);
  //var h2 = "<h2>" + title + "</h2>;
  blogStart.insertAdjacentElement('beforebegin', title_h2);
  */

  blog.title = document.getElementById("title").value;
  //var title = document.createElement('h2');
  var title_text = document.createTextNode(blog.title);
  //title.appendChild(title_text);
  blog.articles = document.getElementById("articles").value;
  //blog.image = document.getElementById("image").files[0];
  //const selectedFile = document.getElementById('input').files[0];
  //var title = 'Title: ' + blog.title;

  //blogStart.insertAdjacentHTML('beforeend',"<h2 class='section-heading'>blog.title</h2><p>blog.articles</p>")
  /*" <!--<img class='img-fluid' src='blog.image' /></a>" -->*/
  blogStart.insertAdjacentHTML("beforeend", blog.title);
  //blogStart.insertAdjacentHTML("beforeend", title);
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


  /*
    var file_selected = document.getElementById('image').files[0];
    var new_image = document.createElement('img');
    new_image.classList.add('obj');
    new_image.file = file_selected;
    blogStart.appendChild(new_image);
    const reader = new FileReader();
    reader.onload = (function(aImg) {
      return function(e) {
        aImg.src = e.target.result;
      };
    })(new_image);
    reader.readAsDataURL(file_selected);
  */


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
  //var img = document.createElement('img');
  //img.src = blog.image;
  //insert card
  //blogStart.insertAdjacentElement("beforeend", img);
  //blogStart.insertAdjacent("beforeend", blog.image.value);
  //blog.image.src = URL.createObjectURL(event.target.files[0]);
  //blog.image.src = url.createObjectURL()
}
