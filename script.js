
function init() {
  getLikesToLocalStorage();
  renderBooks();
}

function renderBooks() {
  let ctnBooksRef = document.getElementById("ctn-books");
  ctnBooksRef.innerHTML = "";
  for (let i = 0; i < books.length; i++) {
    ctnBooksRef.innerHTML += getBooksTemplate(i);
  }
}

function saveComment(index) {
  let inputNameRef = document.getElementById(`input-name${index}`);
  let inputName = inputNameRef.value.trim();
  let inputCommentRef = document.getElementById(`input-comment${index}`);
  let inputComment = inputCommentRef.value.trim();
  let tableComments = document.getElementById(`table-comments${index}`);
  if (inputComment !== "" && inputName !== "") {
    let newCommentHtml = renderCommentHtml(inputName, inputComment);
    tableComments.insertAdjacentHTML("afterbegin", newCommentHtml);
    inputCommentRef.value = "";
    inputNameRef.value = "";
  } else {
    alert("Bitte füllen sie beide Felder aus.");
  }
}

document.addEventListener("click", function (event) {
  if (event.target && event.target.id.startsWith("sendCommit")) {
    let index = event.target.id.replace("sendCommit", "");
    saveComment(index);
  }
});

document.addEventListener("click", function(event){
  if (event.target && event.target.id.startsWith("img-heart")) {
    let indexLikes = event.target.id.replace("img-heart", "");;
    toggleLike(indexLikes);
  }
})

function toggleLike(indexLikes) {
  let book = books[indexLikes];
  let amountLikes = document.getElementById(`amount-likes${indexLikes}`);
  let heartIcon  = document.getElementById(`img-heart${indexLikes}`);

  if (book.liked == true){
    amountLikes.innerHTML--;
    book.liked = false;
    heartIcon.src = "./assets/icons/icons8-herz-dislike.png";

  } else {
    amountLikes.innerHTML++;
    book.liked = true;
    heartIcon.src = "./assets/icons/icons8-herz-like.png";
  }  

  saveLikesToLocalStorage();
}

function saveLikesToLocalStorage() {
  let likesArr = books.map(book => ({
    likes: book.likes,
    liked: book.liked
  }));
  localStorage.setItem('likesArr', JSON.stringify(likesArr));
};

function getLikesToLocalStorage(){
  let myArr = JSON.parse(localStorage.getItem("likesArr"));
  if (myArr != null){
    books.forEach((book, index)=>{
      if (myArr[index]){
        book.likes = myArr[index].likes;
        book.liked = myArr[index].liked;
      }
    })
  }
}