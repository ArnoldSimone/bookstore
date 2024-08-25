function getBooksTemplate(i) {

  let tableCommentsHtml = renderCommentsHtml(i);

  return `
    <div class="content-book">
        <p id="title">${books[i].name}</p>
        <hr>
        <div id="ctn-img-book" >
          <img id="img-book" src="./assets/icons/icons8-literature-100.png" alt="imgBook">
        </div>
        <hr>
        <div class="ctn-book-details">
          <div class="book-details">
            <p id="price">${books[i].price.toFixed(2).replace(".",",")} €</p>
            <div class="likes">
              <p id="amount-likes${i}">${books[i].likes}</p>
              <img id="img-heart${i}" class="img-heart" src="${books[i].liked ? './assets/icons/icons8-herz-like.png' : './assets/icons/icons8-herz-dislike.png'}" alt="Herz-Icon">
            </div>
          </div>
          <table class="table-book-details">
            <tr>
              <td>Autor</td>
              <td>:</td>
              <td>${books[i].author}</td>
            </tr>
            <tr>
              <td>Erscheinungsjahr</td>
              <td>:</td>
              <td>${books[i].publishedYear}</td>
            </tr>
            <tr>
              <td>Genre</td>
              <td>:</td>
              <td>${books[i].genre}</td>
            </tr>
          </table>
        </div>   
        <hr>
        <div class="ctn-comments">
          <p>Kommentare:</p>
          <div id="comments" class="comments">
            <table id="table-comments${i}" class="table-comments">
              ${tableCommentsHtml}
            </table>
          </div>
          <div id="write-comment" class="write-comment">
            <input id="input-name${i}" class="input-name" name="input-name" type="text" placeholder="Dein Name ...">
            <input id="input-comment${i}" class="input-comment" name="input-comment" type="text" placeholder="Scheibe dein Kommentar ...">
            <img id="sendCommit${i}" class="sendCommit" src="./assets/icons/icons8-papierflieger-50.png" alt="Send-Image">
          </div>
        </div>
    </div>`;
}

function renderCommentHtml(inputName, inputComment) {
  return ` 
                <tr>
                    <td>${inputName}</td>
                    <td>:</td>
                    <td>${inputComment}</td>
                </tr>`;
}

function renderCommentsHtml(i) {
  return books[i].comments.map(comment => `
    <tr>
      <td>${comment.name}</td>
      <td>:</td>
      <td>${comment.comment}</td>
    </tr>
  `).join('');
}