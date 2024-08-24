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

// function renderComments() {
//   let tableCommentsRef = document.getElementById("table-comments");
//   for (let i = 0; i < books.length; i++) {
//     for (let indexComments = 0; indexComments < books[i].comments.length; indexComments++) {
//         tableCommentsRef.innerHTML += `        
//             <tr>
//                 <td>${books[i].comments[indexComments].name}</td>
//                 <td>:</td>
//                 <td>${books[i].comments[indexComments].comment}</td>
//             </tr>`;
//     }
//   }
// }
