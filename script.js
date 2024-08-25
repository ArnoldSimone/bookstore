function init() {
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
    tableComments.insertAdjacentHTML('afterbegin', newCommentHtml);
    inputCommentRef.value = "";
    inputNameRef.value = "";
  }
}

document.addEventListener("click", function (event) {
  if (event.target && event.target.id.startsWith("sendCommit")) {
    let index = event.target.id.replace("sendCommit", "");
    saveComment(index);
  }
});
