// how to create dynamic cards

let posts = document.querySelector(".posts");

// let postObj = [
//   {
//     title: "post title 1",
//     body: "post body 1",
//   },
//   {
//     title: "post title 2",
//     body: "post body 2",
//   },
//   {
//     title: "post title 3",
//     body: "post body 3",
//   },
//   {
//     title: "post title 4",
//     body: "post body 4",
//   },
//   {
//     title: "post title 5",
//     body: "post body 5",
//   },
//   {
//     title: "post title 6",
//     body: "post body 6",
//   },
//   {
//     title: "post title 7",
//     body: "post body 7",
//   },
//   {
//     title: "post title 8",
//     body: "post body 8",
//   },
// ];

/*
<div class="post">
  <h3>Posts Title 1</h3>
  <p>posts body 1</p>
</div>;
*/

// postObj.forEach((elements) => {
//   let post = document.createElement("div");
//   post.classList = "post";
//   post.innerHTML = `<h3>${elements.title}</h3>
//   <p>${elements.body}</p>`;
//   posts.appendChild(post);
// });

// fetch API

function fetcData(url) {
  fetch(url)
    .then((res) => res.json())
    .then((res) => {
      res.forEach((elements) => {
        let post = document.createElement("div");
        post.classList = "post";
        post.innerHTML = `<h3>${elements.title}</h3>
      <p>${elements.body}</p>`;
        posts.appendChild(post);
      });
    })
    .catch((e) => console.log(e));
}

fetcData("https://jsonplaceholder.typicode.com/posts");
